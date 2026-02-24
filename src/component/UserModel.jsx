import React from "react";
import CheckOut from "./../pages/CheckOut";
import { NavLink, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
import { IoBagCheckOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiLogout } from "react-icons/ci";

const UserModel = () => {
  const Navigate = useNavigate();
  return (
    <div className="absolute z-50 right-0 bg-white p-5 rounded-2xl flex flex-col gap-3">
      {/* profile */}
      <NavLink
        className={({ isActive }) =>
          "flex gap-2 items-center text-[14px] md:text-[18px] py-2 px-3 transition duration-200 hover:text-[#FB923C] font-bold" +
          (isActive ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1" : "")
        }
        to="/profile"
      >
        {" "}
        <CgProfile />
        Profile
      </NavLink>
      {/* CheckOut */}
      <NavLink
        className={({ isActive }) =>
          "flex gap-2 items-center text-[14px] md:text-[18px] py-2 px-3 transition duration-200 hover:text-[#FB923C] font-bold" +
          (isActive ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1" : "")
        }
        to="/checkout"
      >
        {" "}
        <IoBagCheckOutline />
        Checkout
      </NavLink>
      {/* Order */}
      <NavLink
        className={({ isActive }) =>
          "flex gap-2 items-center text-[14px] md:text-[18px] py-2 px-3 transition duration-200 hover:text-[#FB923C] font-bold" +
          (isActive ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1" : "")
        }
        to="/order"
      >
        <LiaShippingFastSolid /> Order
      </NavLink>
      {/* logout */}
      <button
        className="text-2xl mt-5 py-3 px-7 flex items-center justify-center cursor-pointer hover:bg-red-500 transition duration-300 hover:text-white border border-gray-200 shadow rounded-2xl"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          Navigate("/login");
          toast.success("Logout Success");
        }}
      >
        <CiLogout />
      </button>
    </div>
  );
};

export default UserModel;
