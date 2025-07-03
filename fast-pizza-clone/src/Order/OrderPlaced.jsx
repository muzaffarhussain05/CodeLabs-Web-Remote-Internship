import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const OrderPlaced = () => {
  const { orderId } = useParams();
  const { orders, updateOrder, login } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  const order = orders.find((o) => o.id === orderId);
  if (!order) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Order not found.
      </div>
    );
  }

  const orderTime = new Date(order.date);
  const now = new Date();

  const deliveryOffset = order.priority ? 22 : 42; 
  const deliveryTime = new Date(
    orderTime.getTime() + deliveryOffset * 60 * 1000
  );
  const timeLeft = Math.max(0, Math.floor((deliveryTime - now) / 60000)); 

  const totalPrice = order.priority ? order.totalPrice + 20 : order.totalPrice;

  const formatTime = (date) => {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      month: "short",
      day: "numeric",
    });
  };

  const handleMakePriority = () => {
    updateOrder(orderId, { priority: true });
  };

  return (
    <div className="overflow-y-scroll mt-18 mb-18">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-8 px-4 py-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">Order #{orderId} status</h2>
            <div className="space-x-2">
              {order.priority && (
                <span class="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
                  Priority
                </span>
              )}
              <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
                preparing order
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
            <p className="font-medium">
              Only {timeLeft > 0 ? `${timeLeft} minute(s)` : "Delivered"} left
              😃
            </p>
            <p className="text-xs text-stone-500">
              (Estimated delivery: {formatTime(deliveryTime)})
            </p>
          </div>

          <ul className="divide-y divide-stone-200 border-b border-t">
            {order.cart.map((item) => (
              <li className="space-y-1 py-3" key={item.photoName}>
                <div className="flex items-center justify-between text-sm">
                  <p>
                    <span>{item.quantity} x </span>
                    {item.name}
                  </p>
                  <p className="font-bold">${item.price * item.quantity}</p>
                </div>
                <p className="text-sm capitalize italic text-stone-500">
                  {item.ingredients}
                </p>
              </li>
            ))}
          </ul>

          <div className="space-y-2 bg-stone-200 px-6 py-5">
            <p className="text-sm font-medium text-stone-600">
              Price pizza: ${order.totalPrice.toFixed(2)}
            </p>
            {order.priority && (
              <p className="text-sm text-stone-600">Priority Fee: €20.00</p>
            )}
            <p className="font-bold">
              To pay on delivery: ${totalPrice.toFixed(2)}
            </p>
          </div>

          {!order.priority && (
            <div className="text-right">
              <button
                onClick={handleMakePriority}
                className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-3 md:px-6 md:py-4"
              >
                Make priority
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
