import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import reviewServices from "@/services/reviewServices";
import type { Feedback } from "@/types";

type Props = {
  productId?: string;
};

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
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star</span>
          <span className="material-symbols-outlined">star_half</span>
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
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-sm font-semibold text-gray-800 dark:text-white"
                aria-hidden
              >
                {fb.user?.userName
                  ? fb.user.userName.charAt(0).toUpperCase()
                  : (fb.user?.email || "?").charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {fb.user?.userName || fb.user?.email || "Anonymous"}
                </p>
                <div className="flex text-primary text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-sm">
                      {i < fb.rating ? "star" : "star_outline"}
                    </span>
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
