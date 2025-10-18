import type { CartItem } from "@/types";

interface Props {
  item: CartItem;
}

const CartItemCard = ({ item }: Props) => {
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
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
          -
        </button>
        <span className="font-bold text-lg">{item.quantity}</span>
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">
          +
        </button>
      </div>
      <button className="text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-500 transition-colors">
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};

export default CartItemCard;
