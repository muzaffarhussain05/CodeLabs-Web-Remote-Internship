import { useDispatch, useSelector } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../redux/cartSlice";

export default function CartModal({ closeCart }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="w-[400px] h-full bg-white p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          <button onClick={closeCart} className="text-red-600 cursor-pointer">Close</button>
        </div>
        {items.length === 0 ? <p>No items in cart</p> : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="border-b pb-2">
                <div className="flex justify-between">
                  <p>{item.title}</p>
                  <p>${item.price * item.quantity}</p>
                </div>
                <div className="flex gap-2 mt-1">
                  <button onClick={() => dispatch(decreaseQty(item.id))} className="px-2 bg-gray-200 cursor-pointer">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))} className="px-2 bg-gray-200 cursor-pointer">+</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-auto text-red-500 cursor-pointer">Remove</button>
                </div>
              </div>
            ))}
            <div className="text-lg font-semibold mt-4">Total: ${total.toFixed(2)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
