import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const Home = () => {
  const { user, setUser, setLogin, login } = useContext(AppContext);

  return (
    <div className="overflow-y-scroll mt-15">
      <main className="mx-auto max-w-3xl ">
        <div className="my-10 px-4 text-center sm:my-16">
          <h1 className="mb-8 text-xl font-semibold md:text-3xl">
            The best pizza.
            <br />
            <span className="text-yellow-500">
              Straight out of the oven, straight to you.
            </span>
          </h1>
          {login ? (
            <div className="mt-6">
              <Link
                to="/menu"
                className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
              >
                Continue Ordering, {user}
              </Link>
            </div>
          ) : (
            <>
              <p className="mb-4 text-sm text-stone-600 md:text-base">
                👋 Welcome! Please start by telling us your name:
              </p>

              <input
                type="text"
                placeholder="Your full name"
                className="w-72 px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
                onChange={(e) => setUser(e.target.value)}
              />
            </>
          )}

          {!login && user && (
            <div className="mt-6">
              <Link
                onClick={() => setLogin(true)}
                to="/menu"
                className="cursor-pointer inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-3 md:px-6 md:py-4"
              >
                Start Ordering
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
