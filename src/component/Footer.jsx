import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { cart } from "../store/Store";
import { favorites } from "../store/Favorites";
const Footer = () => {
  const { favoritesItem } = favorites();
  const { cartItem } = cart();
  return (
    <div className="bg-[#7C2D12] text-[#FFF7ED] border-t-2 border-[#FB923C]">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-20 p-4">
        <h1>My Logo</h1>
        <div>
          <p className="text-center mb-5"> Follow us on social media </p>
          <div className="flex items-center justify-center gap-7 ">
                 <NavLink
           className={({ isActive }) =>
                     "relative transition duration-200 hover:text-[#FB923C] font-bold p-1.5" +
                     (isActive
                       ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1"
                       : "")
                   }
                   to="/cart"
                 >
                   <FaCartShopping  className="text-2xl"/>
                   {cartItem.length > 0 && (
                     <span className="absolute -top-2 -right-4 bg-[#FB923C] text-[#431407] w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
                       {cartItem.length}
                     </span>
                   )}
                 </NavLink>
                 <NavLink
                    className={({ isActive }) =>
                     "relative transition duration-200 hover:text-[#FB923C] font-bold p-1.5" +
                     (isActive
                       ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1"
                       : "")
                   }
                   to="/favorites"
                 >
                   <GrFavorite className="text-2xl" />
                   {favoritesItem.length > 0 && (
                     <span className="absolute -top-2 -right-4 bg-[#FB923C] text-[#431407] w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
                       {favoritesItem.length}
                     </span>
                   )}
                 </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-center "> Follow & Contact Me </p>
          <div className="flex gap-4">
            <a
              className="hover:text-[#FB923C] transition duration-300 text-2xl"
              href="#"
            >
              <FaFacebook />
            </a>
            <a
              className="hover:text-[#FB923C] transition duration-300 text-2xl"
              href="#"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="hover:text-[#FB923C] transition duration-300 text-2xl"
              href="#"
            >
              <SiGithub />
            </a>
            <a
              className="hover:text-[#FB923C] transition duration-300 text-2xl"
              href="#"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-center p-4"> Created By Ahmed Elsayed. © 2026 </h1>
    </div>
  );
};

export default Footer;
