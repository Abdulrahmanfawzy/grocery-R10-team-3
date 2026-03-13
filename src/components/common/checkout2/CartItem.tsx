import type { CartItemProps} from "@/lib/types/cart.types";
import { Button } from "../../ui/button";
import { useRemoveCartItem, useUpdataQuantity } from "@/lib/api/cartApi";
export default function CartItem({product}:CartItemProps) {
  console.log(product.id);
  
  const{mutate} = useUpdataQuantity()
  const{mutate:removeMutate} = useRemoveCartItem()
  return <>
    <div className="flex gap-6 p-6 [:nth-child(-n+2)]:border-t-0 border-t">
      <div className="flex items-center flex-col gap-2">
        <img
          src={product.meal.image_url}
          alt={product.meal.title}
          className="w-16 h-16 object-contain"
          loading="lazy"
        />
        <div>
          <span className="inline-block px-3 py-1 text-xs rounded-md bg-black text-white">
            {product.meal.in_stock?"In Stock":"Out Of Stock"}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-3">
        <h3 className="text-md font-medium text-gray-800">
          {product.meal.title}
        </h3>
        <div className="flex gap-12 items-center">
          <div className="flex items-center border rounded-md px-4 py-1 gap-6 ">
            <span className="text-blue-600 font-semibold text-lg cursor-pointer"
            onClick={()=>{mutate({mealId:product.id,quantity:product.quantity - 1})}}>
              -
            </span>
            <span className="text-sm">{product.quantity}</span>
            <span className="text-blue-600 font-semibold text-lg cursor-pointer"
            onClick={()=>{mutate({mealId:product.id,quantity:product.quantity + 1})}}>
              +
            </span>
          </div>
          <span className="font-medium text-gray-800 text-md">{product.meal.price}</span>
        </div>
      <Button onClick={()=>{removeMutate(product.id)}}>Remove Product</Button>
      </div>
    </div>
  </>

}
