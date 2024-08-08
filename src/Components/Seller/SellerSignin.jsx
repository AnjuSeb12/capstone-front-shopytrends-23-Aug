import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6),
  })
  .required();




const SellerSignin = () => {
    const navigate = useNavigate();
   
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
        const res = await axios.post(
            "http://localhost:4000/api/v1/seller/sellerlogin",
            data,
            {
              withCredentials: true,
            },
          );
          if(res.data.success){
              toast.success(res.data.message),
                navigate(`/sellerdashboard`)
              
          }else{
              toast.error(res.data.message)
          }
        
    } catch (error) {
        console.log(error)
        
    }
   
  };


  return (
    <div>
        <ToastContainer/>
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
      <input type="submit" className="rounded-md bg-blue-500 py-1 text-white" />
      <p>
        Instructor not created yet{" "}
        <Link to="/seller/signup" className="text-blue-500 underline">
          Signup
        </Link>
      </p>
    </form>
        
    </div>
  )
}

export default SellerSignin