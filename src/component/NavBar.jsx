import React from "react";
import { NavLink } from "react-router-dom";
import NavBarForMobile from "./NavForMobile";
import { FaCartShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
const NavBar = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className=" container mx-auto flex  items-center justify-between p-4 text-[#7C2D12]">
        <h1>My Logo</h1>
        {/* nav for pc */}
        <nav className="hidden md:flex items-center justify-center gap-7 ">
            <NavLink
            className="transition duration-200 hover:text-[#FB923C] font-bold"
            to="/"
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            className="transition duration-200 hover:text-[#FB923C] font-bold"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink className="flex relative p-3 text-2xl hover:text-[#FB923C]" to="/cart">
            <FaCartShopping />
          <span className="absolute -top-1 -right-1 bg-[#FB923C] text-[#431407] w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
               0 </span>
          </NavLink>
          <NavLink className="flex relative p-3 text-2xl hover:text-[#FB923C]" to="/favorites"><GrFavorite />
          <span className="absolute -top-1 -right-1 bg-[#FB923C] text-[#431407] w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
            0
            </span>
          </NavLink>
        
        </nav>
        {/* nav for mobile */}
        <NavBarForMobile className="md:hidden" />
      </div>
    </div>
  );
};

export default NavBar;
