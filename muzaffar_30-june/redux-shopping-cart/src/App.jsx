import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartModal from "./components/CartModal";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar toggleCart={() => setShowCart(true)} />
      <Home />
      {showCart && <CartModal closeCart={() => setShowCart(false)} />}
    </>
  );
}

export default App;
