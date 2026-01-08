import axios from "axios";
import React, { useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { cart, domain } from "../store/Store";
import { favorites } from "../store/Favorites";

const ProductDetails = () => {
  const { addToFavorites } = favorites();
  const { addToCart } = cart();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(""); // الصورة الكبيرة
  const [zoomStyle, setZoomStyle] = useState({});
  const params = useParams();
  const productId = params.productId;

  useEffect(() => {
    let url = `${domain}/api/products/${productId}`;
    axios
      .get(url, {
        params: {
          populate: "*",
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setProduct(res.data.data);
        // خلي الصورة الكبيرة تبدأ بالـ cover
        setMainImage(res.data.data.cover.url);
      });
  }, [productId]);

  if (!product)
    return <p className="text-center text-3xl mt-10">Loading ...</p>;

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      <div className="flex flex-col gap-4 ">
        <div
          className="w-full h-96 overflow-hidden rounded-md shadow-lg"
          onMouseMove={(e) => {
            const { left, top, width, height } =
              e.currentTarget.getBoundingClientRect();

            const x = ((e.clientX - left) / width) * 100;
            const y = ((e.clientY - top) / height) * 100;

            setZoomStyle({
              transform: "scale(2)",
              transformOrigin: `${x}% ${y}%`,
            });
          }}
          onMouseLeave={() =>
            setZoomStyle({
              transform: "scale(1)",
              transformOrigin: "center center",
            })
          }
        >
          <img
            src={`${domain}${mainImage}`}
            alt={product.name}
            className="w-full h-full cursor-pointer object-contain transition-transform duration-200"
            style={zoomStyle}
          />
        </div>

        <div className="flex gap-4 justify-center">
          {product?.imgs?.map((img) => (
            <img
              key={img.documentId}
              src={`${domain}${img.url}`}
              alt={product.name}
              className={`w-15 h-15 md:w-30 md:h-30 object-contain rounded-md cursor-pointer border-2 border-gray-300 opacity-70 ${
                mainImage === img.url ? "border-orange-400 opacity-100" : ""
              }`}
              onClick={() => setMainImage(img.url)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:gap-4 px-5 md:px-10">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-gray-600 mt-2 whitespace-pre-line lg:w-2/3">
          {product.desc}
        </p>
        <p className="font-bold text-xl my-3">{product.price} EGP</p>
        <div className="flex gap-2">
          <button
            onClick={() => addToFavorites(product)}
            className=" p-3 text-2xl hover:text-white hover:bg-black bg-white transition duration-300 rounded cursor-pointer"
          >
            <GrFavorite />
          </button>
          <button
            onClick={() => addToCart(product)}
            className="bg-black hover:bg-white hover:text-black text-white transition duration-300 py-2 cursor-pointer rounded w-1/2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
