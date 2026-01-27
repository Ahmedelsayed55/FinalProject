// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { domain } from "../../store/Store";

const HeroSection = () => {
  const [imgHero, setImgHero] = useState([]);
  useEffect(() => {
    axios
      .get(domain + "/api/hero-imgs?populate=*")
      .then((res) => {
        console.log(res.data.data);
        setImgHero(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full md:h-[60vh] md:mb-20">
      <div className="container mx-auto mb-5 h-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {imgHero.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="w-full">
                <img
                  className="object-contain w-full h-full"
                  src={domain + img.heroimg[0].url}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
