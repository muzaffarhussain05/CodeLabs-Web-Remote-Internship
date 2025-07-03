import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { useParams, Link } from "react-router-dom";

const OrderNotFound = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 px-4 text-center">
      <h1 className="text-2xl font-semibold mb-4">Something went wrong 😢</h1>
      <p className="text-lg">
        Couldn't find order{" "}
        <span className="font-bold text-red-600">#{orderId}</span>
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-yellow-400 px-6 py-3 font-semibold uppercase tracking-wide text-stone-800 hover:bg-yellow-300"
      >
        ← Go back
      </Link>
    </div>
  );
};

export default OrderNotFound;
