import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authUserSuccess } from '../../redux/userAuthentication';
import { useDispatch } from 'react-redux';




const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();


const UserSignIn = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data,e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        data,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        if (res.data.isAuthenticated) {
          dispatch(authUserSuccess({
            user: res.data.user,
            isAuthenticated: res.data.isAuthenticated
          }));

        }
        toast.success(res.data.message);



      } else {
        toast.error(res.data.message);

      }
    } catch (error) {
      console.error("ErrorLogin:", error.response ? error.response.data : error.message);

    }
  };
  return (
    <div>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 rounded-md border p-6"
      >

        <input
          {...register("email")}
          placeholder="email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("password")}
          placeholder="password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.password && <p>{errors.password.message}</p>}


        <input type="submit" placeholder="sub" className="rounded-md bg-blue-500 py-1 text-white" />
        <p>
          User not created yet{" "}
          <Link to="/user/signup" className="text-blue-500 underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  )
}

export default UserSignIn