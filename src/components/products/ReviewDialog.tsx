import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "../ui/form";
// input component not needed in this dialog
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { StarIcon } from "lucide-react";
import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import reviewServices from "@/services/reviewServices";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { reviewSchema } from "@/validators/reviewValidators";

type ReviewFormValues = z.infer<typeof reviewSchema>;

type Props = {
  productId: string;
  onSubmitted?: () => void;
  /**
   * Optional render prop that receives an `open` callback.
   * Use this to render a custom trigger in the parent (e.g. a button in ProductPage).
   */
  renderTrigger?: (open: () => void) => ReactNode;
};

const ReviewDialog = ({ productId, onSubmitted, renderTrigger }: Props) => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();

  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      productId: productId || "",
      rating: 5,
      comment: "",
    },
  });

  useEffect(() => {
    // update productId if it changes
    form.reset({ ...form.getValues(), productId: productId || "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  const handleOpen = () => {
    form.reset({ productId: productId || "", rating: 5, comment: "" });
    setOpen(true);
  };

  const onSubmit = async (values: ReviewFormValues) => {
    try {
      const payload = {
        productId: values.productId,
        rating: values.rating,
        comment: values.comment,
      };

      const res = await reviewServices.createReview(payload);

      // service might return different shapes; try to detect success
      if (res && (res as any).success !== false) {
        toast.success(res.message || "Review submitted");
        setOpen(false);
        form.reset({ productId: productId || "", rating: 5, comment: "" });
        // notify parent to refresh reviews if provided
        queryClient.invalidateQueries({ queryKey: ["productFeedback"] });
        onSubmitted?.();
      } else {
        const msg = (res && (res as any).message) || "Failed to submit review";
        toast.error(msg);
      }
    } catch (err: any) {
      toast.error(err?.message || "An error occured while submitting review");
    } finally {
      // react-hook-form manages isSubmitting internally via handleSubmit; ensure it's cleared
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* If parent provided a renderTrigger, use it; otherwise show internal button */}
      {renderTrigger ? (
        <>{renderTrigger(handleOpen)}</>
      ) : (
        <Button onClick={handleOpen} variant="default">
          Write a Review
        </Button>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Write a Review</DialogTitle>
              <DialogDescription>
                Share your thoughts with other customers
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* hidden productId field (kept in form state) */}
              <input type="hidden" {...form.register("productId")} />

              <FormField
                control={form.control}
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comment</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Write your review" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Rating</FormLabel>
                      <Select
                        onValueChange={(v) => field.onChange(Number(v))}
                        value={String(field.value)}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <SelectItem
                              key={index}
                              value={(index + 1).toString()}
                            >
                              {index + 1}{" "}
                              <StarIcon className="inline h-4 w-4" />
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewDialog;
