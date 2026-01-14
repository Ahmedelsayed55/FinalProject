import React, { useEffect } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { cart, domain } from "../store/Store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Cart = () => {
  const { cartItem, incrementQuantity, decrementQuantity, removeItem, total , clearCart } =
    cart();
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  let token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      console.log("User not logged in");
      toast.error("User not logged in");
      navigate("/login");
    }
  }, []);
  const checkout = () => {
    cartItem.forEach((item) => {
      axios
        .post(
          domain + "/api/orders",
          {
            data: {
              name: item.name,
              price: item.price,
              qty: item.quantity,
              users_permissions_user: user.id,
              state: "vmhblgyvrkunwuu5zxbkfkhu",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success("Order placed successfully");
          clearCart();
          navigate("/order");
        });
    });
  };
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
                <div className="flex items-center gap-5">
                  <div className="w-20 h-20 flex justify-center items-center rounded-md border overflow-hidden">
                    <img
                      className="w-full object-contain"
                      src={domain + itemCart.cover.url}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2>{itemCart.name}</h2>
                    <p>${itemCart.price}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-10">
                  <div className="flex items-center gap-10">
                    <p>
                      {" "}
                      <span className="font-semibold">Total:</span> $
                      {itemCart.price * itemCart.quantity}{" "}
                    </p>
                    <button className="text-red-500 text-2xl cursor-pointer hover:text-red-700 active:scale-90 active:text-red-900 transition duration-300">
                      <MdRemoveShoppingCart
                        onClick={() => removeItem(itemCart)}
                      />
                    </button>
                  </div>
                  <div className="flex items-center gap-7">
                    <button
                      onClick={() => decrementQuantity(itemCart)}
                      className=" shadow text-[17px] px-2 rounded-md"
                    >
                      -
                    </button>
                    <span className="mb-2">{itemCart?.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(itemCart)}
                      className=" shadow text-[17px] px-2 rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
              <span>Tax:</span>
              <span>{(14 * total) / 100}</span>
            </div>
            <div className="flex justify-between font-semibold mt-4">
              <span>Total:</span>
              <span>$ {(114 * total) / 100 + 10}</span>
            </div>
            <button
              onClick={checkout}
              className="bg-[#FB923C] text-white py-2 px-4 rounded-md mt-4 w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
