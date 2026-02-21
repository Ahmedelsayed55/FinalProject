import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { domain } from "../../store/Store";
import axios from "axios";
import toast from "react-hot-toast";
import { useCheckoutStore } from '../../store/Checkout';

const PaymentSummary = () => {
  const { total, clearCheckout, checkoutItems } = useCheckoutStore();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const checkout = () => {
    checkoutItems.forEach((item) => {
      axios
        .post(
          domain + "/api/orders",
          {
            data: {
              name: item.name,
              price: item.price,
              qty: item.qty,
              users_permissions_user: user.id,
              state: "vmhblgyvrkunwuu5zxbkfkhu",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          console.log(res.data);
          toast.success("Order placed successfully");
          clearCheckout();
          Swal.fire({
            icon: "success",
            title: "Successful!",
            text: "Your order has been confirmed",
            showCancelButton: true,
            confirmButtonText: "Keep shopping",
            cancelButtonText: "Show order",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/menu");
            } else if (result.isDismissed) {
              navigate("/order");
            }
          });
        });
    });
  };
  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-[#22222280]">Subtotal</h3>
        <p className="text-[20px] text-[#222222]">${total.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-[#22222280]">Tax</h3>
        <p className="text-[20px] text-[#222222]">$4</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-[#22222280]">Shipping</h3>
        <p className="text-[20px] text-[#22222280]">$0</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-[#22222280]">Total (USD)</h3>
        <p className="text-[20px] text-[#FB923C] font-semibold">
          ${(total + 4).toFixed(2)}
        </p>
      </div>
      <button
        onClick={checkout}
        className="mt-10 bg-[#FB923C] text-white px-6 py-3 rounded-md w-full border border-[#FB923C] hover:bg-white hover:text-[#FB923C] transition duration-200 cursor-pointer active:scale-105"
      >
        Confirm order
      </button>
    </div>
  );
};

export default PaymentSummary;
