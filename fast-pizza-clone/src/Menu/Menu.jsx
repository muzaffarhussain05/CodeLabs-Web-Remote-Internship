import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import Pizza from "./Pizza";
import data from "./Data";
import { v4 as uuidv4 } from "uuid";
const Menu = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();
  const Id = uuidv4();
  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <>
      {login && (
        <div className="overflow-y-scroll mt-18 mb-18">
          <main className="mx-auto max-w-3xl ">
            <ul className="divide-y divide-stone-200 px-2">
              {data.map((pizza) => (
                <Pizza key={pizza.photoName} pizza={pizza} />
              ))}
            </ul>
          </main>
        </div>
      )}
    </>
  );
};

export default Menu;
