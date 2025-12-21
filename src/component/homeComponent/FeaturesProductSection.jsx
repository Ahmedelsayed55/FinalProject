import React from "react";
import img from "../../assets/a2.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./featurs.css";

// modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const FeaturesProductSection = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto mb-5 py-10 ">
        <h2 className="text-2xl font-bold text-center mb-5">
          Features Product
        </h2>

        <Swiper
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
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper "
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item} >
              <div className="w-full  flex flex-col items-center gap-3 p-5 shadow bg-white ">
                {/* Image */}
                <div className="w-full h-44 overflow-hidden rounded-md">
                  <img
                    src={img}
                    alt="product"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-semibold">Product {item}</h3>
                <p className="text-sm text-gray-500">
                  Product description
                </p>
                <p className="font-bold">Product price</p>

                <div className="flex gap-3 mt-2">
                  <button className="px-3 py-1 border rounded">
                    Favorite
                  </button>
                  <button className="px-3 py-1 bg-black text-white rounded">
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
