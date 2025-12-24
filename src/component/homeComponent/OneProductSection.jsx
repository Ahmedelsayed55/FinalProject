import axios from "axios";
import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";

const OneProductSection = () => {
  const [oneProduct, setOneProduct] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/oneproducts?populate=*`)
      .then((res) => {
        // console.log(res.data.data[0]);
        setOneProduct(res.data.data[0]);
      });
  }, []);
  if (!oneProduct) {
  return <p className="text-center">Loading...</p>;
}
  return (
    <div className="w-full py-20 bg-gray-100 shadow-md mb-10">
      
      <h2 className="text-2xl font-bold text-center mb-5">
        One Product Section
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  px-2 md:px-0">
        <div className="w-full h-full p-10 shadow">
          <img className="w-full" src={"http://localhost:1337" + oneProduct.img.url} alt="" />
        </div>
        <div className="w-full  flex flex-col gap-5 p-10 md:py-20">
          <h2 cassName="text-4xl font-bold ">{oneProduct?.name}</h2>
          <p className="text-gray-500 w-full md:w-2/3 ">{oneProduct.desc}</p>
          <p className="text-gray-500">${oneProduct.price} </p>
          <div className="flex gap-2  ">
            <button className=" p-3 text-2xl hover:text-white hover:bg-black bg-white transition duration-300 rounded cursor-pointer"><GrFavorite /></button>
            <button className="bg-black hover:bg-white hover:text-black text-white transition duration-300 py-2 cursor-pointer rounded w-1/2">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProductSection;
