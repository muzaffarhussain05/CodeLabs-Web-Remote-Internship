import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-black text-white w-full py-1 rounded cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
}
