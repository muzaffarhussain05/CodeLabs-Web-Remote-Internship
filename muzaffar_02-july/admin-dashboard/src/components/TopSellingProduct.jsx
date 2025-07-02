import React from "react";

const products = [
  {
    name: "Shirt",
    image: "👕",
    price: "$76.89",
    category: "Man Cloths",
    quantity: 128,
    amount: "$6,647.15",
  },
  {
    name: "T-Shirt",
    image: "👚",
    price: "$79.80",
    category: "Women Cloths",
    quantity: 89,
    amount: "$6,647.15",
  },
  {
    name: "Pant",
    image: "👖",
    price: "$86.65",
    category: "Kid Cloths",
    quantity: 74,
    amount: "$6,647.15",
  },
  {
    name: "Sweater",
    image: "🧥",
    price: "$56.07",
    category: "Man Cloths",
    quantity: 69,
    amount: "$6,647.15",
  },
  {
    name: "Light Jacket",
    image: "🧥",
    price: "$36.00",
    category: "Women Cloths",
    quantity: 65,
    amount: "$6,647.15",
  },
  {
    name: "Half Shirt",
    image: "👔",
    price: "$46.78",
    category: "Man Cloths",
    quantity: 58,
    amount: "$6,647.15",
  },
];

const TopSellingProducts = ({ darkMode }) => {
  const base = darkMode
    ? {
        bg: "bg-gray-800",
        card: "bg-gray-700",
        border: "border-gray-600",
        text: "text-white",
        subText: "text-gray-300",
        hover: "hover:bg-gray-600",
        button: "text-gray-300 hover:text-white",
        header: "bg-gray-700 text-white",
      }
    : {
        bg: "bg-white",
        card: "bg-white",
        border: "border-gray-200",
        text: "text-gray-800",
        subText: "text-gray-600",
        hover: "hover:bg-gray-100",
        button: "text-gray-500 hover:text-gray-700",
        header: "bg-gray-100 text-gray-700",
      };

  return (
    <div
      className={`rounded-lg shadow-md p-4 ml-0 w-full max-w-5xl mx-auto mt-6 ${base.bg} ${base.text} ${base.border} border`}
    >
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
        <h2 className={`text-xl font-semibold ${base.text}`}>
          Top Selling Products
        </h2>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 border rounded-md text-sm ${base.subText} ${base.hover}`}
          >
            Filter
          </button>
          <button
            className={`px-3 py-1 border rounded-md text-sm ${base.subText} ${base.hover}`}
          >
            See All
          </button>
        </div>
      </div>

      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-sm text-left border-t">
          <thead>
            <tr className={`${base.header}`}>
              <th className="px-4 py-2">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className={base.subText}>
            {products.map((product, idx) => (
              <tr key={idx} className={`border-b ${base.hover}`}>
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <span>{product.image}</span> {product.name}
                </td>
                <td className="px-4 py-3">{product.price}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">{product.quantity}</td>
                <td className="px-4 py-3">{product.amount}</td>
                <td className="px-4 py-3">
                  <button className={`text-xl ${base.button}`}>⋮</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {products.map((product, idx) => (
          <div
            key={idx}
            className={`rounded-lg p-4 shadow-sm ${base.card} ${base.border} border`}
          >
            <div className="flex justify-between items-center mb-2">
              <div
                className={`flex items-center gap-2 text-lg font-semibold ${base.text}`}
              >
                <input type="checkbox" />
                <span>{product.image}</span> {product.name}
              </div>
              <button className={`text-xl ${base.button}`}>⋮</button>
            </div>
            <div className={`text-sm ${base.subText}`}>
              <p>
                <span className="font-medium">Price:</span> {product.price}
              </p>
              <p>
                <span className="font-medium">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-medium">Quantity:</span>{" "}
                {product.quantity}
              </p>
              <p>
                <span className="font-medium">Amount:</span> {product.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
