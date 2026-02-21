import React, { useEffect } from "react";
import { cart } from "../store/Store";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CartInfoPriceQty from "../component/cartComponent/CartInfoPriceQty";
import CartInfoItem from "../component/cartComponent/CartInfoItem";
import PaymentCart from "../component/cartComponent/PaymentCart";
const Cart = () => {
  const { cartItem } =
    cart();
  const navigate = useNavigate();
  
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      console.log("User not logged in");
      toast.error("User not logged in");
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center">Cart Page</h1>
      {cartItem.length === 0 ? (
        <div className="h-[60vh]">
          <p className="text-center text-3xl mt-10 ">Your Cart is Empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3  py-10 container mx-auto">
          <div className="bg-white py-6 rounded-lg  shadow col-span-2 flex flex-col items-center gap-5 overflow-auto max-h-[70vh]">
            <h2 className="text-2xl font-semibold mb-4  text-center bg-transparent  w-full p-4 ">
              Shopping Cart Items
            </h2>
            {/* Cart items will be listed here */}
            {cartItem.map((itemCart) => (
              <div
                key={itemCart.documentId}
                className="w-full flex justify-between items-center gap-5 shadow  p-4"
              >
                {/* info item */}
                <CartInfoItem itemCart={itemCart} />
                {/* Qty and Price */}
                <CartInfoPriceQty itemCart={itemCart} />
              </div>
            ))}
          </div>
          <PaymentCart />
        </div>
      )}
    </div>
  );
};

export default Cart;
