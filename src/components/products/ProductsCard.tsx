import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import type { Product } from "@/types";
import AddToCart from "./AddToCart";
import ProductPrice from "./ProductPrice";

const ProductsCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square relative overflow-hidden bg-muted">
        <span className="absolute top-2 right-2 z-10">
          {/* <Badge className="bg-primary text-white">New</Badge> */}
        </span>
        <a href={`/product/${product._id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            height={300}
            width={300}
            className="max-h-[300px] w-full object-cover bg-white"
          />
        </a>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">
              {product.category.name}
            </p>
          </div>
          <div>
            <ProductPrice value={Number(product.price)} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        {/* <div className="flex items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Number(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
        />
      ))}
      <span className="text-xs text-muted-foreground ml-2">
        ({`${product.numReviews} reviews`})
      </span>
    </div> */}
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {product.stock > 0 ? (
            <h1>in stock</h1>
          ) : (
            <h1 className="text-red-500">out of stock</h1>
          )}
        </div>
        {product.stock > 0 ? (
          <div className="w-1/2">
            <AddToCart productId={product._id} />
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default ProductsCard;
