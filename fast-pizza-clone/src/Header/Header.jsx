import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, login, orders } = useContext(AppContext);
  const [searchId, setSearchId] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = searchId.trim();
      if (!trimmed) return;

      const found = orders.find((order) => order.id === trimmed);
      if (found) {
        navigate(`/order/${trimmed}`);
      } else {
        navigate(`/order-not-found/${trimmed}`);
      }

      setSearchId("");
    }
  };

  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 font-pizza uppercase sm:px-6  fixed top-0 w-full z-50 gap-4">
      <div className="tracking-widest">
        <Link to="/">Fast React Pizza Co.</Link>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search order #"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-28 rounded-full bg-yellow-100 px-4 sm: py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
      </div>

      {login && <div>{user}</div>}
    </div>
  );
};

export default Header;
