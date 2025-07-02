import { useState } from "react";
import Slidebar from "./SlideBar";
import SmallComp from "./SmallComp";
import TopSellingProduct from "./TopSellingProduct";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <Slidebar isOpen={isOpen} setIsOpen={setIsOpen} darkMode={darkMode} />

      <main
        className={`flex-1 p-6 overflow-y-auto transition-all duration-300 ${
          isOpen ? "lg:pl-70" : ""
        }`}
      >
       
        <div className="flex justify-between items-center mb-4">
          <h1
            className={`text-2xl font-semibold py-1 px-0 border-b ${
              darkMode ? "border-gray-700" : "border-gray-300"
            }`}
          >
            Dashboard
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-purple-700 text-white px-2 py-1 rounded hover:bg-purple-800 transition"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <SmallComp darkMode={darkMode} />
        <TopSellingProduct darkMode={darkMode} />
      </main>
    </div>
  );
};

export default DashboardLayout;
