import React from "react";
import { cart } from "../../store/Store";
import { MdRemoveShoppingCart } from "react-icons/md";

const CartInfoPriceQty = ({ itemCart }) => {
  const { incrementQuantity, decrementQuantity, removeItem } = cart();
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex items-center gap-10">
        <p>
          {" "}
          <span className="font-semibold">Total:</span> $
          {itemCart.price * itemCart.quantity}{" "}
        </p>
        <button className="text-red-500 text-2xl cursor-pointer hover:text-red-700 active:scale-90 active:text-red-900 transition duration-300">
          <MdRemoveShoppingCart onClick={() => removeItem(itemCart)} />
        </button>
      </div>
      <div className="flex items-center gap-7">
        <button
          onClick={() => decrementQuantity(itemCart)}
          className=" shadow text-[17px] px-2 rounded-md"
        >
          -
        </button>
        <span className="mb-2">{itemCart?.quantity}</span>
        <button
          onClick={() => incrementQuantity(itemCart)}
          className=" shadow text-[17px] px-2 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartInfoPriceQty;
