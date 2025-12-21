import React from 'react'
import HeroSection from './../component/homeComponent/HeroSection';
import FeaturesProductSection from './../component/homeComponent/FeaturesProductSection';
import OneProductSection from './../component/homeComponent/OneProductSection';
import BestSellerProducts from './../component/homeComponent/BestSellerProducts';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesProductSection />
      <OneProductSection />
      <BestSellerProducts />
    </div>
  )
}

export default Home
