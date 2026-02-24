
import { useCheckoutStore } from '../../store/Checkout';

const PaymentSummary = () => {
  const { total } = useCheckoutStore();

  return (
    <div className="flex flex-col gap-4 mt-10">
      <div className="flex items-center justify-between">
        <h3 className="text-[#22222280]">Subtotal</h3>
        <p className="text-[20px] text-[#222222]">${total.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-[#22222280]">Tax</h3>
        <p className="text-[20px] text-[#222222]">$4</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-[#22222280]">Shipping</h3>
        <p className="text-[20px] text-[#22222280]">$0</p>
      </div>
      <div className="flex items-center justify-between">
        <h3 className="text-[#22222280]">Total (USD)</h3>
        <p className="text-[20px] text-[#FB923C] font-semibold">
          ${(total + 4).toFixed(2)}
        </p>
      </div>
   
    </div>
  );
};

export default PaymentSummary;
