import type { CartItem } from "@/types";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { updateCart } from "@/redux/slices/cartSlice";
import type { RootState, AppDispatch } from "@/redux/store";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  // Local optimistic quantity so the UI updates immediately
  const [localQty, setLocalQty] = useState<number>(item.quantity);

  // Sync local quantity when the store updates (after fulfilled)
  useEffect(() => {
    setLocalQty(item.quantity);
  }, [item.quantity]);

  const handleDecrease = () => {
    if (localQty > 1) {
      const newQuantity = localQty - 1;
      // update UI immediately
      setLocalQty(newQuantity);
      // persist change
      dispatch(
        updateCart({
          token: token!,
          productId: item.product._id,
          quantity: newQuantity,
        })
      );
    }
  };

  const handleIncrease = () => {
    const newQuantity = localQty + 1;
    // update UI immediately
    setLocalQty(newQuantity);
    // persist change
    dispatch(
      updateCart({
        token: token!,
        productId: item.product._id,
        quantity: newQuantity,
      })
    );
  };

  const image = item.product.images?.[0] || "/images/placeholder.png";
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800/50 shadow-sm">
      <div className="flex-shrink-0">
        <img
          alt={item.product.name}
          className="w-24 h-24 rounded object-cover"
          src={image}
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-bold text-slate-800 dark:text-slate-100">
          {item.product.name}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          -
        </button>
        <span className="font-bold text-lg">{localQty}</span>
        <button
          onClick={handleIncrease}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
        >
          +
        </button>
      </div>
      <button className="text-slate-400 cursor-pointer dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500 transition-colors">
        <Trash className="size-5 ml-2.5" />
      </button>
    </div>
  );
};

export default CartItemCard;
