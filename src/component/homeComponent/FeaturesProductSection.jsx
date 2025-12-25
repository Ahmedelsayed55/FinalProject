import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./featurs.css";

import { Pagination } from "swiper/modules";
import axios from "axios";
import { Link } from "react-router-dom";
import { domain } from "../../store/Store";

const FeaturesProductSection = () => {
  const [Features, setFeatures] = useState([]);
  useEffect(() => {
    let url =
      `${domain}` + `/api/products?filters[featured][$eq]=true&pagination[limit]=8&sort[0]=createdAt:desc&populate=*`;
    axios
      .get(url)
      .then((res) => {

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
          loop={Features.length > 3}
          effect="coverflow"
          grabCursor
          centeredSlides={false}
          slidesPerView="auto"
          spaceBetween={60}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 60,
            modifier: 1,
          }}
          pagination={{ clickable: true }}
      
          modules={[Pagination]}
          className="mySwiper"
        >
          {Features.map((item) => (
            
              <SwiperSlide key={item.documentId}>
                <Link  to={`./${item.documentId}`}>
                <div className="w-full  flex flex-col items-center gap-3 p-5 shadow bg-white ">
                  {/* Image */}
                  <div className="w-full h-44 overflow-hidden rounded-md">
                    <img
                      src={domain + item.cover.url}
                      alt="product"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-semibold"> {item.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-1">{item.desc}</p>
                  <p className="font-bold">{item.price}</p>

                  <div className="flex gap-3 mt-2">
                    <button className="px-3 py-1 border rounded">
                      Favorite
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        alert("DSas");
                      }}
                      className="px-3 py-1 bg-black cursor-pointer text-white rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
                   </Link>
              </SwiperSlide>
         
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturesProductSection;
