
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/hero.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HeroSwiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  return (
  <div className='w-full '>
    <div className='container mx-auto mb-5  h-[70%]'>

 
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
        navigation={true}
        modules={[Autoplay, Pagination, ]}
        className="mySwiper"
      >

        <SwiperSlide>
            <div className="w-full">
                <img className='object-contain w-full' src={img} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full">
                <img className='object-contain w-full' src={img} alt="" />
            </div>
        </SwiperSlide>

      </Swiper>
         </div>
    </div>
  )
}

export default HeroSection
