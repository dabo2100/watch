import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import img from "../assets/imgloood/0aa45a4889eb173f8ecb624b4ce80d27.jpg"
import logo from "../assets/logo.png"
import { TbBrandGmail } from "react-icons/tb";


export default function Login() {

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values) => {
    let domain = '';
    let endPoint = '';
    let url = domain + endPoint;
    let data = {
      identifier: values.email,
      password: values.password,
    };
    openLoader();
    axios
      .post(url, data)
      .then((res) => {
        sessionStorage.setItem('jwt', res.data.jwt);

      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
      });
  };

  return (
    <div className="w-full h-full flex items-center justify-end  bg-gradient-to-b   absolute inset-0 bg-cover bg-center "
      style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className=' w-[100%] lg:w-[50%] h-full flex justify-center items-center '>
        <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="relative w-[70%] h-[70%] p-2.5 rounded-2xl bg-gradient-to-br from-white/40 via-white/10 to-transparent shadow-[0_0_40px_rgba(255,255,255,0.15)] grid grid-cols-1 items-center">
            <div className=''>
              <img src={logo} alt="" className=' w-25  rounded-sm ' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 rounded-2xl mb-1.5'>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r blur-xl"></div>
              <button className="relative rounded-l-lg text-2xl px-6 py-2 text-white bg-white/10 border border-white/20 hover:bg-white/30 hover:text-black transition duration-300 z-10">
                Login in
              </button>
              <button className="relative rounded-r-lg text-2xl px-6 py-2 text-white bg-white/10 border border-white/20 border-l-0 hover:bg-white/30 hover:text-black transition duration-300 z-10">
                Sign up
              </button>
            </div>
            <Field name="email" className="w-full input  px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" placeholder="Enter your email" />
            <ErrorMessage name="email" component={'p'} className="text-red-500" />

            <Field name="password" className="w-full input  px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100" placeholder="Enter your password" />
            <ErrorMessage name="password" component={'p'} className="text-red-500" />
            <div className='border border-dashed  border-l-indigo-500'></div>
            <div className='z-10'>
              <button className="btn  btn-soft btn-secondary w-25 "><TbBrandGmail /></button>

            </div>
            <button type="sumbit" className="btn btn-soft btn-info  w-[50%] z-10">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
