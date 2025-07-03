import { useState } from "react";
import AppContext from "./AppContext";
import data from "../Menu/Data";

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  function addToCart(pizza) {
    setCart((prev) => [...prev, { ...pizza, quantity: 1 }]);
  }

  function updateToCart(photoName, action) {
    setCart((prev) =>
      prev.map((item) =>
        item.photoName === photoName
          ? {
              ...item,
              quantity:
                action === "inc"
                  ? item.quantity + 1
                  : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  }

  function removeFromCart(photoName) {
    setCart((prev) => prev.filter((item) => item.photoName !== photoName));
  }

  function getTotalItems() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };
  const updateOrder = (id, updatedData) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, ...updatedData } : order
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        login,
        setLogin,
        cart,
        setCart,
        data,
        addToCart,
        removeFromCart,
        getTotalItems,
        updateToCart,
        getTotal,
        orders,
        setOrders,
        updateOrder,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
