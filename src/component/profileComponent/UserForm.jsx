import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";

import * as Yup from "yup";

import toast from "react-hot-toast";
import { domain } from "../../store/Store";
const UserForm = ({ userInfo, token }) => {

  const user =JSON.parse(localStorage.getItem("user"))
  const handelUpdateInfo = (values) => {
    console.log(values);
    axios.put(domain + `/api/users/${user.id}`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Updated");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update please try again");
      });
  };
  const registerSchema = Yup.object({
    username: Yup.string()
      .min(2, "First name is too short")
      .required("First name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

  });
  return (
    <div className="py-16">
      <Formik
        enableReinitialize
        initialValues={{
          username: userInfo?.username || "",
          email: userInfo?.email || "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          handelUpdateInfo(values);
        }}
      >
        <Form className="flex flex-col items-center gap-5 ">
          <div className="w-full md:w-169 flex flex-col gap-5 bg-white rounded-2xl   shadow p-10">
            <h1 className="text-center text-[20px] pb-3 ">
              General information
            </h1>
            <div className="flex flex-col gap-3">
                <label className="flex flex-col gap-2 text-gray-600">
                  User Name
                  <Field
                    name="username"
                    type="text"
                    placeholder="john "
                    className=" p-4 w-full rounded-lg border border-[#22222233]/40 text-black  outline-0"
                  />
                </label>
                <ErrorMessage
                  name="username"
                  component={"p"}
                  className="text-red-500"
                />
            </div>
            <label className="flex flex-col gap-2 text-gray-600">
              Email
              <Field
                name="email"
                type="text"
                placeholder="example@gmail.com "
                className=" p-4 rounded-lg border border-[#22222233]/40 text-black  outline-0"
              />
            </label>
            <ErrorMessage
              name="email"
              component={"p"}
              className="text-red-500"
            />

          </div>

          <button
            type="submit"
            className="py-3 px-12 bg-[#D9176C] rounded-lg text-white cursor-pointer w-fit"
          >
            Update information
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
