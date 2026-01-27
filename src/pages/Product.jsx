import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { cart, domain } from "../store/Store";
import { favorites } from "../store/Favorites";
import { GrFavorite } from "react-icons/gr";

const Product = () => {
  const { addToFavorites } = favorites();
  const { addToCart } = cart();

  const [products, setProducts] = useState([]);
  const parm = useParams();
  let idCat = parm.id;
  useEffect(() => {
    let url = `${domain}` + `/api/categories/${idCat}`;
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
        // console.log(res.data.data.products);
      });
  }, []);
   const [style, setStyle] = useState();
  useEffect(() => {
    let url = domain + "/api/style-cards";
    axios.get(url).then((res) => {
      console.log(res.data.data[0]);
      setStyle(res.data.data[0]);
    });
  }, []);
  return (
    <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.documentId}>
          <div 
                style={{
                  background: style?.bg,
                  color: style?.text,
                }}
          className="w-full flex flex-col gap-3 px-7 py-4 shadow-md rounded-md bg-white">
            <Link to={`./${product.documentId}`}>
              <div className="w-full h-44 overflow-hidden rounded-md shadow-md mb-3">
                <img
                  src={domain + product.cover.url}
                  alt="product"
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="h-28 flex flex-col justify-between">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2 w-2/3">
                  {product.desc}
                </p>
                <p className="font-bold">{product.price}</p>
              </div>
            </Link>

            <div className="flex gap-3 mt-2">
              <button
                onClick={() => addToFavorites(product)}
                className="px-3 cursor-pointer py-3 border rounded-2xl hover:bg-yellow-700 transition duration-300 active:bg-yellow-900 active:scale-90 hover:text-white"
              >
                <GrFavorite className="text-2xl" />
              </button>

              <button
                style={{
                      "--btn-bg": style?.btnbg,
                      "--btn-text": style?.btntext,
                      "--btn-hover": style?.btnhover,
                    }}
                onClick={() => addToCart(product)}
                className="px-3 w-full cursor-pointer py-3 bg-black text-white rounded-2xl hover:bg-gray-700 active:bg-gray-900 active:scale-90 transition duration-300 hover:text-white"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
