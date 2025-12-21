
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../../assets/hero.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HeroSwiper.css';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const HeroSection = () => {
  return (
  <div className='w-full h-[60vh] '>
    <div className='container mx-auto mb-5 h-full'>

 
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
     
        modules={[Autoplay, Pagination, ]}
        className="mySwiper h-full"
      >

        <SwiperSlide>
            <div className="w-full">
                <img className='object-contain w-full h-full' src={img} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full">
                <img className='object-contain w-full h-full' src={img} alt="" />
            </div>
        </SwiperSlide>

      </Swiper>
         </div>
    </div>
  )
}

export default HeroSection
