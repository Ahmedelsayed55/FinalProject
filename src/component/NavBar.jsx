import React from "react";
import { NavLink } from "react-router-dom";
import NavBarForMobile from "./NavForMobile";
import { FaCartShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { cart } from "../store/Store";
import { favorites } from "../store/Favorites";
const NavBar = () => {
  const { favoritesItem } = favorites();
  const { cartItem } = cart();
  return (
    <div className="w-full fixed top-0 z-50  bg-white shadow-md">
      <div className=" container mx-auto flex  items-center justify-between p-4 text-[#7C2D12]">
        <h1>My Logo</h1>
        {/* nav for pc */}
        <nav className="hidden md:flex items-center justify-center gap-7">
          <NavLink
            className={({ isActive }) =>
              "transition duration-200 hover:text-[#FB923C] font-bold" +
              (isActive
                ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1"
                : "")
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "transition duration-200 hover:text-[#FB923C] font-bold" +
              (isActive
                ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1"
                : "")
            }
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "transition duration-200 hover:text-[#FB923C] font-bold" +
              (isActive
                ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1"
                : "")
            }
            to="/menu"
          >
            Menu
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              "relative transition duration-200 hover:text-[#FB923C] font-bold p-1.5" +
              (isActive
                ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1"
                : "")
            }
            to="/cart"
          >
            <FaCartShopping className="text-2xl" />
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
        </nav>
        {/* nav for mobile */}
        <NavBarForMobile className="md:hidden" />
      </div>
    </div>
  );
};

export default NavBar;
