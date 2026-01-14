import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./featurs.css";

import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";
import { cart, domain } from "../../store/Store";
import { favorites } from "../../store/Favorites";
import { GrFavorite } from "react-icons/gr";

const FeaturesProductSection = () => {
  const { addToFavorites } = favorites();
  const { addToCart } = cart();
  const [Features, setFeatures] = useState([]);
  useEffect(() => {
    let url =
      `${domain}` +
      `/api/products?filters[featured][$eq]=true&pagination[limit]=8&sort[0]=createdAt:desc&populate=*`;
    axios.get(url).then((res) => {
      setFeatures(res.data.data);
    });
  }, []);

  return (
    <div className="w-full ">
      <div className="container mx-auto mb-5 py-20 ">
        <h2 className="text-2xl font-bold text-center mb-10">
          Features Product
        </h2>
        <Swiper
          slidesPerView="auto"
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {Features.map((item) => (
            <SwiperSlide key={item.documentId}>
              <div className="w-full flex flex-col gap-3 px-7 py-4 shadow-md rounded-md bg-white">
                <Link to={`./${item.documentId}`}>
                  <div className="w-full h-44 overflow-hidden rounded-md shadow-md mb-3">
                    <img
                      src={domain + item.cover.url}
                      alt="product"
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="h-28 flex flex-col justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 w-2/3">
                      {item.desc}
                    </p>
                    <p className="font-bold">${item.price}</p>
                  </div>
                </Link>

                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => addToFavorites(item)}
                    className="px-3 cursor-pointer py-3 border rounded-2xl hover:bg-yellow-700 transition duration-300 active:bg-yellow-900 active:scale-90 hover:text-white"
                  >
                    <GrFavorite className="text-2xl" />
                  </button>

                  <button
                    onClick={() => addToCart(item)}
                    className="px-3 w-full cursor-pointer py-3 bg-black text-white rounded-2xl hover:bg-gray-700 active:bg-gray-900 active:scale-90 transition duration-300 hover:text-white"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesProductSection;
