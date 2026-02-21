import React from "react";
import { cart } from "../../store/Store";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCheckoutStore } from "../../store/Checkout";

const PaymentCart = () => {
  const navigate = useNavigate();
  const { cartItem, total, clearCart } = cart();
  const { addToCheckout } = useCheckoutStore();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-fit flex flex-col gap-7">
      <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>$ {total}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping:</span>
        <span>$10</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Tax: 14%</span>
        <span>{(14 * total) / 100}</span>
      </div>
      <div className="flex justify-between font-semibold mt-4">
        <span>Total:</span>
        <span>$ {(114 * total) / 100 + 10}</span>
      </div>
      <div>
        <button
          onClick={() => {
            cartItem.forEach((item) => addToCheckout(item));
            navigate("/checkout");
            clearCart();
            toast.success("Proceeding to checkout");
          }}
          className="bg-[#FB923C] text-white py-2 px-4 rounded-md mt-4 w-full border border-[#FB923C] cursor-pointer"
        >
          Checkout
        </button>
        <button
          className="bg-gray-300 text-black py-2 px-4 rounded-md mt-4 w-full border border-[#FB923C] cursor-pointer"
          onClick={() => navigate("/menu")}
        >
          {" "}
          Keep Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentCart;
