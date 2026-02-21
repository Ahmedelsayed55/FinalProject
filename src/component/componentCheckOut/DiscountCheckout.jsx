import React from "react";

const DiscountCheckout = () => {
  return (
    <div >
      <h1 className="text-[#22222280] mb-4">Have a discount code?</h1>
      <div className="flex gap-3 w-full">
        <input
          type="text"
          placeholder="Enter Promo Code"
          className="flex-1 px-4.75 py-4 border border-gray-300 rounded-md text-[16px] outline-none"
        />
        <button className="px-6 py-2 bg-[#3a2d4f] text-white text-sm rounded-md">
          Apply
        </button>
      </div>
    </div>
  );
};

export default DiscountCheckout;
