import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Cart = () => {
  const { cart, getTotalItems, getTotal, login } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);
  return (
    <>
      {cart.length > 0 && (
        <div className="flex items-center justify-between  bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base fixed bottom-0 w-full">
          <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 ">
            <span>{getTotalItems()} Pizza</span> <span>${getTotal()}</span>
          </p>
          <Link to="/cart">Open Cart</Link>
        </div>
      )}
    </>
  );
};

export default Cart;

const CartData = () => {
  const {
    cart,
    setCart,
    removeFromCart,
    getTotalItems,
    getTotal,
    updateToCart,
  } = useContext(AppContext);
  return (
    <>
      <div className="overflow-y-scroll mt-18 mb-18">
        <div className="mx-auto max-w-3xl">
          <div className="px-4 py-3">
            <Link
              to="/menu"
              className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
            >
              ← Back to menu
            </Link>

            {cart.length < 1 ? (
              <p class="mt-7 font-semibold">
                Your cart is still empty. Start adding some pizzas :)
              </p>
            ) : (
              <>
                <h2 className="mt-7 text-xl font-semibold">Your cart, user</h2>
                <ul className="mt-3 divide-y divide-stone-200 border-b">
                  {cart.map((item) => (
                    <li
                      key={item.photoName}
                      className="py-3 sm:flex sm:items-center sm:justify-between"
                    >
                      <p className="mb-1 sm:mb-0">
                        {item.quantity} x {item.name}
                      </p>

                      <div className="flex items-center justify-between sm:gap-6">
                        {/* Price */}
                        <p className="text-sm font-bold">
                          ${item.price * item.quantity}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 md:gap-3">
                          <button
                            className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-2.5 py-1 md:px-3.5 md:py-2"
                            onClick={() => updateToCart(item.photoName, "dec")}
                          >
                            –
                          </button>

                          <span className="text-sm font-medium">
                            {item.quantity}
                          </span>

                          <button
                            className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-2.5 py-1 md:px-3.5 md:py-2"
                            onClick={() => updateToCart(item.photoName, "inc")}
                          >
                            +
                          </button>
                        </div>

                        {/* Delete */}
                        <button
                          className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-2 md:px-5 md:py-2.5 text-xs"
                          onClick={() => removeFromCart(item.photoName)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {cart.length > 0 && (
              <div className="mt-6 space-x-2">
                <Link
                  to="/order/new"
                  className="inline-block text-sm rounded-full bg-yellow-400 font-semibold  uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
                >
                  ORDER PIZZAS
                </Link>
                <button
                  onClick={() => setCart([])}
                  className=" cursor-pointer inline-block text-sm rounded-full border-2 border-stone-300 px-4 py-2.5 font-semibold uppercase tracking-wide text-stone-400 duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-500 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export { CartData };
