import { useState } from "react";

const PaymentMethodCheckout = () => {
  const payment =[
    {
      id:1,
      name:"online payment"
    },
    {id:2,
      name:"cash on delivery"
    },
    {
      id:3,
      name: "POS on delivery"
    }
  ]
  const [selected, setSelected] = useState("online");
  return (
    <div className="xl:p-10 p-5 rounded-2xl bg-white shadow">
      <h1 className="text-[#222222] mb-10 text-[18px] font-semibold">
        Payment Method
      </h1>
      <div className="flex justify-between">
        {
          payment.map((item) => (
            <label key={item.id} className={"px-5 lg:px-2 xl:px-8 py-4  border border-[#22222233] rounded-md cursor-pointer  flex items-center gap-2.5 " + (selected === item.name ? "text-[#D9176C] bg-[#D9176C1A] " : "")}>
              <input type="radio" name="payment" onChange={() => setSelected(item.name)} />
              {item.name}
            </label>
          ))}
      
 
      </div>
    </div>
  );
};

export default PaymentMethodCheckout;
