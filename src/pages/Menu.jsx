import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { domain } from "../store/Store";
const Menu = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    axios.get(domain + "/api/categories?populate=*").then((res) => {
      setCategories(res.data.data);
      console.log(res.data.data);
      
    });
  },[])
if (categories.length === 0) {
  return <div className="text-center font-bold text-3xl p-20">Loading...</div>;
}
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-20">
      {categories.map((category) => (
          <NavLink
          key={category.documentId}
        to={`./${category.documentId}`}
        className=" group relative block overflow-hidden  rounded-2xl bg-white shadow-sm  hover:shadow-md transition "
      >
        {/* Image */}
        <img
          src={domain + category.img.url}
          alt=""
          className=" w-full  h-56 object-contain transition-transform  duration-300  group-hover:scale-110 "
        />

        <div className=" absolute inset-0  bg-black/30 opacity-0 group-hover:opacity-100 transition "/>

        <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl font-bold transition-all duration-300 group-hover:bottom-6">
         { category.name}
        </h3>
      </NavLink>
      ))}
    
    </div>
  );
};

export default Menu;
