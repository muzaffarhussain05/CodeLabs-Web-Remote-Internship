import { useEffect } from "react";

const Slidebar = ({ setIsOpen, isOpen, darkMode }) => {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsOpen(true);
    }
  }, [setIsOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-2 left-4 z-50 bg-purple-700 text-white px-3 py-1 rounded shadow"
      >
        {isOpen ? "Hide Menu" : "Show Menu"}
      </button>

      <div
        className={`
          h-full w-64 z-40 fixed top-0 left-0 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-white"
              : "bg-white border-gray-300 text-gray-900"
          }
          border-r
        `}
      >
        <div
          className={`
            px-6 py-4 font-bold text-2xl border-b
            ${
              darkMode
                ? "text-purple-300 border-gray-700"
                : "text-purple-700 border-gray-300"
            }
          `}
        >
          Fast Pizza
        </div>

        <nav className="px-4 py-4 text-sm">
          <div
            className={`uppercase text-xs mb-2 ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Menu
          </div>
          <ul className="space-y-2">
            <li
              className={`p-2 rounded font-medium ${
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-100 text-purple-700"
              }`}
            >
              Dashboard
            </li>

            <li>
              <div
                className={`text-xs ml-1 mb-1 ${
                  darkMode ? "text-gray-400" : "text-gray-400"
                }`}
              >
                Products
              </div>
              <div className="ml-4 space-y-1">
                <div
                  className={`p-2 rounded hover:bg-opacity-70 ${
                    darkMode
                      ? "text-white hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Product List
                </div>
                <div
                  className={`p-2 rounded hover:bg-opacity-70 ${
                    darkMode
                      ? "text-white hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  Categories
                </div>
              </div>
            </li>

            {[
              "Sales",
              "Customers",
              "Analytics",
              "Notifications",
              "Settings",
            ].map((item) => (
              <li
                key={item}
                className={`p-2 rounded font-medium hover:bg-opacity-70 ${
                  darkMode
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Slidebar;
