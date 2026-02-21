import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useCheckoutStore } from "../../store/Checkout";
import { domain } from "../../store/Store";
const OrderSummary = () => {
  const { checkoutItems, incrementQty, decrementQty } = useCheckoutStore();
  return (
    <div className="overflow-y-auto h-125">
      <h1 className="text-[18px] font-semibold mb-10 text-[#222222]">
        Order summary
      </h1>
      <div className="flex flex-col gap-10">
        {checkoutItems.map((item) => (
          <div
            className="w-full  flex items-center justify-between "
            key={item?.documentId}
          >
            <div className="w-full flex flex-1 gap-4">
              {/* img */}
              <div className="w-27.75">
                <img
                  className="w-full"
                  src={domain + item?.cover.url}
                  alt={item?.name}
                />
              </div>
              {/* details */}
              {/* name and price */}
              <div className="flex flex-col gap-1 ">
                <h2 className="text-[#222222]">{item?.name}</h2>
                <p className="text-[14px] text-[#222222]">
                  <span className="text-[#22222280]"> $</span> {item?.price}
                </p>
              </div>
            </div>
            {/* quantity */}
              <div className=" flex items-center gap-2 ">
                <button
                  onClick={() => decrementQty(item)}
                  className="text-2xl text-pink-500 cursor-pointer"
                >
                  <FiMinusCircle />
                </button>
                <span className="font-medium text-2xl ">{item?.qty}</span>
                <button
                  onClick={() => incrementQty(item)}
                  className="text-2xl text-pink-500 cursor-pointer"
                >
                  <FiPlusCircle />
                </button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderSummary;
