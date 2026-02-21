import { ErrorMessage, Field, Form, Formik } from "formik";


const FormCheckout = () => {
  return (
    <div className="flex flex-col gap-10 bg-white p-10 rounded-2xl shadow">
      <h1 className="text-[#222222] text-[18px] font-semibold mb-10">
        Shipping information
      </h1>
      <Formik>
        <Form className="flex flex-col gap-6">
          {/* name and phone */}
          <div className="flex gap-4">
            <label className="w-full flex flex-col gap-2.5">
              Name
              <Field
                name="name"
                placeholder="Enter your name"
                className="w-full bg-gray-50 border border-[#22222233] rounded-md py-4 px-5 focus:outline-none focus:border-[#22222280]"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </label>
            <label className="w-full flex flex-col gap-2.5">
              Phone
              <Field
                name="phone"
                placeholder="Enter your phone number"
                className="w-full bg-gray-50 border border-[#22222233] rounded-md py-4 px-5 focus:outline-none focus:border-[#22222280]"
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </label>
          </div>

          {/* email and city */}
          <div className="flex gap-4">
            <label className="w-full flex flex-col gap-2.5">
              Email
              <Field
                name="email"
                placeholder="Enter your email"
                className="w-full bg-gray-50 border border-[#22222233] rounded-md py-4 px-5 focus:outline-none focus:border-[#22222280]"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </label>
            <label className="w-full flex flex-col gap-2.5">
              City
              <Field
                name="city"
                placeholder="Enter your city"
                className="w-full bg-gray-50 border border-[#22222233] rounded-md py-4 px-5 focus:outline-none focus:border-[#22222280]"
              />
              <ErrorMessage
                name="city"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </label>
          </div>

          {/* state and zip */}
          <div className="flex gap-4">
            <label className="w-full flex flex-col gap-2.5">
              State
              <Field
                name="state"
                placeholder="Enter your state"
                className="w-full bg-gray-50 border border-[#22222233] rounded-md py-4 px-5 focus:outline-none focus:border-[#22222280]"
              />
              <ErrorMessage
                name="state"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </label>
            <label className="w-full flex flex-col gap-2.5">
              Zip
              <Field
                name="zip"
                placeholder="Enter your zip code"
                className="w-full bg-gray-50 border border-[#22222233] rounded-md py-4 px-5 focus:outline-none focus:border-[#22222280]"
              />
              <ErrorMessage
                name="zip"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </label>
          </div>
          {/* Address */}
          <label className="w-full flex flex-col gap-2.5">
            Address
            <Field
              name="address"
              placeholder="Enter your address"
              className="w-full bg-gray-50 border border-[#22222233] rounded-md py-4 px-5 focus:outline-none focus:border-[#22222280]"
            />
            <ErrorMessage
              name="address"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </label>
        </Form>
      </Formik>
    </div>
  );
};

export default FormCheckout;
