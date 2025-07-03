import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Pizza = ({ pizza }) => {
  const { name, ingredients, price, photoName, soldOut } = pizza;
  const {
    cart,
    addToCart,
    removeFromCart,
    updateToCart, // (photoName, "inc" | "dec")
  } = useContext(AppContext);

  /* 🔑  does *this* pizza live in the cart? */
  const cartItem = cart.find((item) => item.photoName === photoName); // or use an id

  return (
    <li className="flex gap-4 py-2">
      <img
        src={photoName}
        alt={name}
        className={soldOut ? "h-24 opacity-70 grayscale" : "h-24"}
      />

      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients}
        </p>

        <div className="mt-auto flex items-center justify-between">
          {!soldOut && <p className="text-sm">${price}</p>}

          {soldOut ? (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          ) : cartItem ? (
            /* ✔ this pizza already in cart → show qty controls */
            <div className="flex items-center gap-3 sm:gap-8">
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-2.5 py-1 md:px-3.5 md:py-2"
                  onClick={() => updateToCart(photoName, "dec")}
                >
                  –
                </button>

                <span className="text-sm font-medium">{cartItem.quantity}</span>

                <button
                  className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-2.5 py-1 md:px-3.5 md:py-2"
                  onClick={() => updateToCart(photoName, "inc")}
                >
                  +
                </button>
              </div>

              <button
                className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-2 md:px-5 md:py-2.5"
                onClick={() => removeFromCart(photoName)}
              >
                Delete
              </button>
            </div>
          ) : (
            /* ✖ not yet in cart → show Add button */
            <button
              className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 py-2 md:px-5 md:py-2.5"
              onClick={() => addToCart(pizza)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Pizza;
