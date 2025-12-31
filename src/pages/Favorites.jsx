import React from "react";
import { favorites } from "../store/Favorites";
import { cart, domain } from "../store/Store";
import { FaCartShopping, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
const Favorites = () => {
  const { favoritesItem, removeItemFromFavorites } = favorites();
  const { addToCart } = cart();
  return (
    <div className="w-full  py-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex gap-5 items-center">
            <FaStar className="text-yellow-500 text-4xl" />
            <h1 className="text-5xl font-bold">FAVORITES</h1>
          </div>
          <div className="w-1/2">
            <input
              type="text"
              placeholder="Search"
              className=" w-full p-2 border focus:border-blue-200 outline-0 shadow-2xl rounded-2xl"
            />
          </div>
        </div>
        <p className="text-gray-500 text-2xl mt-10">
          Here You can find your favorite products :)
        </p>
        {favoritesItem.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-20">
            {favoritesItem.map((item) => (
              <div key={item.documentId} className="shadow-md rounded p-4 ">
                <div className=" w-full flex  items-center justify-between mt-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 py-1 text-yellow-800 cursor-pointer rounded text-4xl"
                  >
                 <FaCartShopping/>
                  </button>
                  <button onClick={() => removeItemFromFavorites(item)} className="px-3 py-1 text-red-800 cursor-pointer rounded text-4xl">
                    <MdFavorite />
                  </button>
                </div>

                <Link to={`./${item.documentId}`}>
                    <div className="rating flex justify-center">
  <input type="radio" name={`rating-${item.documentId}`} className="mask mask-star-2 bg-orange-400 " aria-label="1 star" />
  <input type="radio" name={`rating-${item.documentId}`} className="mask mask-star-2 bg-orange-400 " aria-label="2 star" />
  <input type="radio" name={`rating-${item.documentId}`} className="mask mask-star-2 bg-orange-400 " aria-label="3 star" />
  <input type="radio" name={`rating-${item.documentId}`} className="mask mask-star-2 bg-orange-400 " aria-label="4 star" defaultChecked />
  <input type="radio" name={`rating-${item.documentId}`} className="mask mask-star-2 bg-orange-400 " aria-label="5 star" />
</div>
                  <div className=" flex flex-col gap-5 mt-3">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-1 w-2/3 mb-5">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-full h-44 overflow-hidden rounded-md">
                    <img
                      src={domain + item.cover.url}
                      alt="product"
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-[60vh] flex justify-center items-center">
            <p className="  text-3xl ">Your Favorites is Empty :(</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
