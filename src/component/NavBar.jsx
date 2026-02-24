import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBarForMobile from "./NavForMobile";
import { FaCartShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { cart, domain } from "../store/Store";
import { favorites } from "../store/Favorites";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/Screenshot 2026-02-24 210857.png"
import axios from "axios";
import UserModel from "./UserModel";
const NavBar = () => {
  const [showModel, setShowModel]= useState()
  const { favoritesItem } = favorites();
  const { cartItem } = cart();
  const [style, setStyle] = useState();
  useEffect(() => {
    let url = domain + "/api/style-nav-for-desks";
    axios.get(url).then((res) => {
      // console.log(res.data.data[0]);
      setStyle(res.data.data[0]);
    });
  }, []);
  return (
    <div
      style={{
        background: style?.bg,
        color: style?.text,
      }}
      className="w-full fixed top-0 z-50  bg-white shadow-md"
    >
      <div className=" container mx-auto flex  items-center justify-between p-4 ">
        <img className="w-32" src={logo} alt="" />
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
          <div className="relative">
            <button
            className="cursor-pointer"
              onClick={() => {
                setShowModel(!showModel)
              }}
            >
              <FaUserCircle className="text-2xl" />
            </button>
            {

              showModel && <UserModel />
            }
          </div>
        </nav>
        {/* nav for mobile */}
        <NavBarForMobile className="md:hidden" />
      </div>
    </div>
  );
};

export default NavBar;
