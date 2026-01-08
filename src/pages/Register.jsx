import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'

import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'
const Register = () => {
    const navigate = useNavigate();
    const validationSchema = yup.object().shape({
        username: yup.string().required('Username is required'),
        email: yup.string().required('Email is required'),
        password: yup.string().required('Password is required'),
      });
        const domain = "http://localhost:1337";
        const register = (values) => {
            let url = domain + "/api/auth/local/register";
            axios.post(url, values).then((res) => {
                // console.log(res.data);
                let token = res.data.jwt;
                localStorage.setItem("token", token);
                
                navigate("/");
                toast.success("Registered Successfully")
            }).catch((err) => {
                // console.log(err);
                toast.error(err.response.data.error.message)
            }
            )
          };
  return (
    <div className='w-full flex justify-center items-center h-dvh bg-violet-50'>
      <Formik onSubmit={register} initialValues={{username: '', email: '', password: ''}} validationSchema={validationSchema}>
        <Form className="flex flex-col gap-6 w-150 md:h-[50%] p-10 bg-violet-200 shadow-lg rounded-2xl justify-center">
            <h2 className='text-3xl font-bold text-violet-800 text-center'>Register</h2>
            <Field name="username" placeholder="Enter your User Name" className="p-2 border border-violet-500 focus:outline-violet-800 shadow rounded-2xl"/>
            <ErrorMessage name="username" component="p" className="text-red-500"/>
            <Field name="email" placeholder="Enter your email" className="p-2 border border-violet-500 focus:outline-violet-800 shadow rounded-2xl"/>
            <ErrorMessage name="email" component="p" className="text-red-500"/>
            <Field name="password" placeholder="Enter your Password" className="p-2 border border-violet-500 focus:outline-violet-800 shadow rounded-2xl"/>
            <ErrorMessage name="password" component="p" className="text-red-500"/>
            <button type="submit" className='w-full p-3 bg-violet-800 text-2xl text-violet-300 rounded-3xl'>Register</button>
            <h4> Already have an account? <span className='text-violet-800 cursor-pointer' onClick={() => navigate("/login")}>Login</span></h4>
        </Form>
      </Formik>
    </div>
  )
}

export default Register
