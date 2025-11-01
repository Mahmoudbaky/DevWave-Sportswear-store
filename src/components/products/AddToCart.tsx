import { useDispatch, useSelector } from "react-redux";
import { type RootState, type AppDispatch } from "@/redux/store";
import { addToCart as addToCartThunk } from "@/redux/slices/cartSlice";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const AddToCart = ({ productId }: { productId: string }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);
  const { loading } = useSelector((state: RootState) => state.cart);
  const [localLoading, setLocalLoading] = useState(false);
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (!token) {
      navigate("/login");
      toast.error("Please log in to add items to your cart");
      return;
    }
    try {
      setLocalLoading(true);
      const action = await dispatch(
        addToCartThunk({ token, productId, quantity: 1 })
      );
      if (addToCartThunk.fulfilled.match(action)) {
        toast.success("Item added to cart");
      } else {
        navigate("/login");
        toast.error((action.payload as string) || "Failed to add to cart");
      }
    } finally {
      setLocalLoading(false);
    }
  };

  return (
    <Button
      onClick={handleAdd}
      disabled={loading || localLoading}
      className="w-full"
    >
      {loading || localLoading ? "Adding..." : "Add to Cart"}
    </Button>
  );
};

export default AddToCart;
