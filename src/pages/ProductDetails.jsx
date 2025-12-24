import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
   const [products, setProducts] = useState(null);
    const parm = useParams();
    let idCat = parm.productId;
   
    
    useEffect(() => {
      let url = "http://localhost:1337" + `/api/products/${idCat}`;
      axios
        .get(url,  {
          params: {
            populate: "*"
          }
        })
        .then((res) => {
          setProducts(res.data.data);
        });
    }, []);
  return (
   <div className="container mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
{
  products ? (
  <div
          className=" group relative block overflow-hidden  rounded-2xl bg-white shadow-sm  hover:shadow-md transition "
        >
          <img
            src={"http://localhost:1337" + products.cover.url}
            alt=""
            className=" w-full  h-56 object-cover transition-transform  duration-300  group-hover:scale-110 "
          />

          <div className=" absolute inset-0  bg-black/30 opacity-0 group-hover:opacity-100 transition " />

          <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xl font-bold transition-all duration-300 group-hover:bottom-6">
            {products.name}
          </h3>
        </div>
  ) : <p>loading ....</p>
}
      
      
    </div>
  )
}

export default ProductDetails
