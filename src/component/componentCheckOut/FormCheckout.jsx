import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { domain } from "../../store/Store";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCheckoutStore } from "../../store/Checkout";
import * as Yup from "yup";
const FormCheckout = () => {
  const { clearCheckout, checkoutItems } = useCheckoutStore();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  // handel checkout function
  const checkout = () => {
    checkoutItems.forEach((item) => {
      axios
        .post(
          domain + "/api/orders",
          {
            data: {
              name: item.name,
              price: item.price,
              qty: item.qty,
              users_permissions_user: user.id,
              state: "vmhblgyvrkunwuu5zxbkfkhu",
            },
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((res) => {
          // console.log(res.data);

          Swal.fire({
            icon: "success",
            title: "Successful!",
            text: "Your order has been confirmed",
            showCancelButton: true,
            confirmButtonText: "Keep shopping",
            cancelButtonText: "Show order",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/menu");
            } else if (result.isDismissed) {
              navigate("/order");
            }
            clearCheckout();
          });
          toast.success("Order placed successfully");
        });
    });
  };

  //  validationSchema
  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    phone: Yup.string()
      .matches(/^01[0-2,5]{1}[0-9]{8}$/, "Enter a valid Egyptian phone number")
      .required("Phone number is required"),

    email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

    city: Yup.string().trim().required("City is required"),

    state: Yup.string().trim().required("State is required"),

    zip: Yup.string()
      .matches(/^[0-9]{5}$/, "Zip code must be 5 digits")
      .required("Zip code is required"),

    address: Yup.string()
      .trim()
      .min(10, "Address must be at least 10 characters")
      .required("Address is required"),
  });
  return (
    <div className="flex flex-col gap-10 bg-white p-10 rounded-2xl shadow">
      <h1 className="text-[#222222] text-[18px] font-semibold mb-10">
        Shipping information
      </h1>
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          city: "",
          state: "",
          zip: "",
          address: "",
        }}
        validationSchema={validationSchema}
        onSubmit={checkout}
      >
        <Form className="flex flex-col gap-6">
          {/* name and phone */}
          <div className="flex flex-col md:flex-row gap-4">
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
          <div className="flex flex-col md:flex-row gap-4">
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
          <div className="flex flex-col md:flex-row gap-4">
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
          <button
            type="submit"
            className="mt-10 bg-[#FB923C] text-white px-6 py-3 rounded-md w-full border border-[#FB923C] hover:bg-white hover:text-[#FB923C] transition duration-200 cursor-pointer active:scale-105"
          >
            Confirm order
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormCheckout;
