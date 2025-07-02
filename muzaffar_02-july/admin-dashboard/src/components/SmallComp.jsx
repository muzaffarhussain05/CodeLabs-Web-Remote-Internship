import React from "react";

const SmallComp = ({ isOpen, darkMode }) => {
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const textMain = darkMode ? "text-white" : "text-gray-800";
  const textSub = darkMode ? "text-gray-400" : "text-gray-500";

  return (
    <div className="flex justify-between items-center gap-6 flex-wrap">
      {/* Card 1 */}
      <div
        className={`py-3 px-2 ${cardBg} ${textMain} flex flex-col gap-4 w-full sm:w-[48%] lg:w-[23%] rounded shadow-md`}
      >
        <div className="flex justify-between items-center">
          <p className={textSub}>Total Sales</p>
          <p className="font-bold">...</p>
        </div>
        <h1 className="font-bold">$41,318.00</h1>
        <div className="flex justify-start gap-4">
          <p className="text-green-400">+8%</p>
          <p className={textSub}>in last month</p>
        </div>
      </div>

      <div
        className={`py-3 px-2 ${cardBg} ${textMain} flex flex-col gap-4 w-full sm:w-[48%] lg:w-[23%] rounded shadow-md`}
      >
        <div className="flex justify-between items-center">
          <p className={textSub}>Total Orders</p>
          <p>...</p>
        </div>
        <h1 className="font-bold">4,242</h1>
        <div className="flex justify-start gap-4">
          <p className="text-red-400">-11%</p>
          <p className={textSub}>in last month</p>
        </div>
      </div>

      <div
        className={`py-3 px-2 ${cardBg} ${textMain} flex flex-col gap-4 w-full sm:w-[48%] lg:w-[23%] rounded shadow-md`}
      >
        <div className="flex justify-between items-center">
          <p className={textSub}>Total Revenue</p>
          <p>...</p>
        </div>
        <h1 className="font-bold">$942.00</h1>
        <div className="flex justify-start gap-4">
          <p className="text-green-400">+12%</p>
          <p className={textSub}>in last month</p>
        </div>
      </div>

      <div
        className={`py-3 px-2 ${cardBg} ${textMain} flex flex-col gap-4 w-full sm:w-[48%] lg:w-[23%] rounded shadow-md`}
      >
        <div className="flex justify-between items-center">
          <p className={textSub}>Total Customers</p>
          <p>...</p>
        </div>
        <h1 className="font-bold">52</h1>
        <div className="flex justify-start gap-4">
          <p className="text-red-400">-19%</p>
          <p className={textSub}>in last month</p>
        </div>
      </div>
    </div>
  );
};

export default SmallComp;
