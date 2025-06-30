import { useSelector } from "react-redux";

export default function Navbar({ toggleCart }) {
  const cartCount = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-center w-full">ShopNow</h1>
      <button onClick={toggleCart} className="absolute right-4 bg-black text-white px-4 py-1 rounded cursor-pointer">
        Cart ({cartCount})
      </button>
    </nav>
  );
}
