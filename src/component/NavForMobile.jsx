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
          <FaCartShopping />
          <span className="absolute -top-1 -right-1 bg-[#FB923C] text-[#431407] w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
            0
          </span>
        </NavLink>
        <NavLink className="flex relative p-3" to="/favorites">
          <GrFavorite />
          <span className="absolute -top-1 -right-1 bg-[#FB923C] text-[#431407] w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
            0
          </span>
        </NavLink>
        <CiMenuFries
          onClick={() => setOpen(!open)}
          className="cursor-pointer font-bold"
        />
      </nav>

      <div
        onClick={() => setOpen(false)}
        className={`
    fixed inset-0 z-50 bg-black/40
    transition-opacity duration-500
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className="mt-16 bg-white p-8 flex flex-col items-center gap-8 text-[#7C2D12]"
        >
          <h1>My Logo</h1>
          <NavLink
            className={({ isActive }) =>
              "transition duration-200 hover:text-[#FB923C] font-bold" +
              (isActive
                ? " text-[#FB923C] border-b-2 border-[#FB923C] pb-1"
                : "")
            }
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
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
            onClick={() => setOpen(false)}
            to="/menu"
          >
            Menu{" "}
          </NavLink>

          <div className="flex gap-8">
            <NavLink
              onClick={() => setOpen(false)}
              className="relative text-2xl"
              to="/cart"
            >
              <FaCartShopping />
              <span className="absolute -top-2 -right-3 bg-[#FB923C] text-[#431407] w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
                0
              </span>
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              className="relative text-2xl"
              to="/favorites"
            >
              <GrFavorite />
              <span className="absolute -top-2 -right-3 bg-[#FB923C] text-[#431407] w-5 h-5 text-xs flex items-center justify-center rounded-full font-bold">
                0
              </span>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavForMobile;
