import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { fetchCart } from "@/redux/slices/cartSlice";

const CartCountBadge = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { token } = useSelector((state: RootState) => state.auth);
  const { cart } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    if (token) {
      dispatch(fetchCart({ token }));
    }
  }, [dispatch, token]);

  const cartItemCount =
    cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <Badge className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-primary rounded-full">
      {cartItemCount}
    </Badge>
  );
};

export default CartCountBadge;
