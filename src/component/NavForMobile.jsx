import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GrFavorite } from "react-icons/gr";
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const NavForMobile = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="md:hidden">
      <nav className=" flex items-center justify-center gap-5 text-2xl">
        <NavLink className="flex relative p-3" to="/cart">
          {" "}
          <FaCartShopping />{" "}
          <span className="absolute top-0 right-0 text-[15px] font-bold">
            0
          </span>{" "}
        </NavLink>
        <NavLink className="flex relative p-3" to="/favorites">
          {" "}
          <GrFavorite />{" "}
          <span className="absolute top-0 right-0 text-[15px] font-bold">
            0
          </span>{" "}
        </NavLink>
        <CiMenuFries
          onClick={() => setOpen(!open)}
          className="cursor-pointer font-bold"
        />
      </nav>

      {open && (
        <div onClick={() => setOpen(false)} className="w-full fixed top-0 left-0 bg-black/20">
          <nav onClick={(e)=> e.stopPropagation()} className=" flex flex-col items-center justify-center gap-7 bg-white p-7 mt-16 text-[#7C2D12]">
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
            <NavLink
              className="flex relative p-3 text-2xl hover:text-[#FB923C]"
              to="/cart"
            >
              <FaCartShopping />
              <span className="absolute top-0 right-0 text-[15px] font-bold">
                {" "}
                0{" "}
              </span>
            </NavLink>
            <NavLink
              className="flex relative p-3 text-2xl hover:text-[#FB923C]"
              to="/favorites"
            >
              <GrFavorite />
              <span className="absolute top-0 right-0 text-[15px] font-bold">
                0
              </span>
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavForMobile;
