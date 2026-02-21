import FormCheckout from "./../component/componentCheckOut/FormCheckout";
import PaymentMethodCheckout from "./../component/componentCheckOut/PaymentMethodCheckout";
import NoteCheckout from "./../component/componentCheckOut/NoteCheckout";
import OrderSummary from "./../component/componentCheckOut/OrderSummary";
import DiscountCheckout from "./../component/componentCheckOut/DiscountCheckout";
import PaymentSummary from "./../component/componentCheckOut/PaymentSummary";
import { useCheckoutStore } from "./../store/Checkout";

const CheckOut = () => {
  const { clearCheckout, checkoutItems } = useCheckoutStore();
  return (
    <div className="w-full min-h-screen  pt-7 lg:pt-15 pb-10 lg:pb-50.75">

      {
        checkoutItems.length === 0 ? (
          <h1 className="text-center md:text-4xl">Checkout Page is Empty :)</h1>
        ) : (
                <div>
        <div className="w-full flex items-center justify-center mb-5">
          <button
            className="px-5 py-3 bg-red-500 text-white rounded-2xl shadow cursor-pointer"
            onClick={clearCheckout}
          >
            Clear Checkout Page
          </button>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row gap-6 ">
          {/* left side */}
          <div className="grow flex flex-col gap-6">
            <FormCheckout />
            <PaymentMethodCheckout />
            <NoteCheckout />
          </div>
          {/* right side */}
          <div className="w-full flex flex-col lg:w-134 p-10 rounded-2xl bg-white shadow">
            <OrderSummary />

            <div className="grow"></div>
            <DiscountCheckout />
            <PaymentSummary />
          </div>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default CheckOut;
