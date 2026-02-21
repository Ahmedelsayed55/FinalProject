import React from "react";
import { domain } from "../../store/Store";

const CartInfoItem = ({ itemCart}) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-20 h-20 flex justify-center items-center rounded-md border overflow-hidden">
        <img
          className="w-full object-contain"
          src={domain + itemCart.cover.url}
          alt=""
        />
      </div>
      <div>
        <h2>{itemCart.name}</h2>
        <p>${itemCart.price}</p>
      </div>
    </div>
  );
};

export default CartInfoItem;
