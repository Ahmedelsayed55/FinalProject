import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const parm = useParams();
  let idCat = parm.id;
  useEffect(() => {
    let url = "https://ear-strikes-plus-lighter.trycloudflare.com" + `/api/categories/${idCat}`;
    axios
      .get(url, {
        params: {
          populate: {
            products: { populate: "*" },
          },
        },
      })
      .then((res) => {
        setProducts(res.data.data.products);
        console.log(res.data.data.products);
      });
  }, []);
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((category) => (
        <NavLink
          key={category.documentId}
          to={`./${category.documentId}`}
          className=" group relative block overflow-hidden  rounded-2xl bg-white shadow-sm  hover:shadow-md transition "
        >
          {/* Image */}
          <img
            src={"https://ear-strikes-plus-lighter.trycloudflare.com" + category.cover.url}
            alt=""
            className=" w-full  h-56 object-cover transition-transform  duration-300  group-hover:scale-110 "
          />

          <div className=" absolute inset-0  bg-black/30 opacity-0 group-hover:opacity-100 transition " />

          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl font-bold transition-all duration-300 group-hover:bottom-6">
            {category.name}
          </h3>
        </NavLink>
      ))}
    </div>
  );
};

export default Product;
