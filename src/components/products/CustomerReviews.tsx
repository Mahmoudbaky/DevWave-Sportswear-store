import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import reviewServices from "@/services/reviewServices";
import type { Feedback } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  productId?: string;
};

// Small inline Star component: uses SVG so we get a real scalable star (filled or outline).
const Star = ({
  filled,
  className = "w-4 h-4",
}: {
  filled: boolean;
  className?: string;
}) => (
  <svg
    aria-hidden="true"
    focusable="false"
    className={className + " inline-block"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.5}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const CustomerReviews = ({ productId }: Props) => {
  const {
    data: feedbackResponse,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["productFeedback", productId],
    queryFn: () => reviewServices.getProductFeedback(productId!),
    enabled: !!productId,
  });

  console.log("Feedback response:", feedbackResponse);

  const feedbacks: Feedback[] = feedbackResponse?.data ?? [];

  const average = useMemo(() => {
    if (!feedbacks.length) return null;
    const avg =
      feedbacks.reduce((s, f) => s + (f.rating ?? 0), 0) / feedbacks.length;
    return avg.toFixed(1);
  }, [feedbacks]);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Customer Reviews
      </h2>

      <div className="flex items-center mt-2 gap-2">
        <div className="flex text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              filled={
                Boolean(average) ? i < Math.round(Number(average)) : false
              }
              className="w-5 h-5"
            />
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          {average ? `${average} out of 5` : "No reviews yet"}
        </p>
      </div>

      <div className="space-y-8 mt-6">
        {isLoading && (
          <div className="space-y-4">
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-24" />
            <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-24" />
          </div>
        )}

        {isError && (
          <div className="text-red-600">
            {(error as any)?.message || "Failed to load reviews."}
          </div>
        )}

        {!isLoading && !feedbacks.length && !isError && (
          <p className="text-gray-600 dark:text-gray-400">
            Be the first to review this product.
          </p>
        )}

        {feedbacks.map((fb) => (
          <div
            key={fb._id}
            className="border-b border-gray-200 dark:border-gray-800 pb-6"
          >
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src={fb.user?.userImage} />
                <AvatarFallback>{fb.user.userName?.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {fb.user?.userName || "Anonymous"}
                </p>
                <div className="flex text-primary text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      filled={!!fb.rating && i < (fb.rating ?? 0)}
                      className="w-4 h-4 mr-0.5"
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {fb.comment}
            </p>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {new Date(fb.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
