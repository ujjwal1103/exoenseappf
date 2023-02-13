import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../utility/userSchema";
import axios from "axios";
const Register = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  

  
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true)
    try{
        
        const res = await axios.post("https://expenseapp-p9wl.onrender.com/api/auth/register",data, { mode: 'cors' })
       
        if(res){
            navigate("/login")
        }
    }
    catch(err){
       setError("error")
    }
    finally{
        setLoading(false)
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 ">
      <div className="w-full md:w-[50%] lg:p-3 lg:mt-10 lg:w-[30%] bg-white shadow-md rounded h-full lg:h-auto md:h-auto ">
        <form className="w-full p-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full  mt-16 md:mt-0 lg:mt-0 flex flex-col lg:my-2 p-2  justify-center items-center text-2xl font-bold">
            <h1>Creat New Account</h1>
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="username" className="text-base my-2 after:content-['*'] after:text-red-500">
              Full Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="px-1 py-2 outline-none border-2 rounded pl-4"
              placeholder="Enter your name"
              {...register("username")}
            />
           {errors.username && 
              <span className="font-medium text-red-500 text-sm pt-2">{errors?.username?.message}</span>
            }
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="email" className="text-base my-2 after:content-['*'] after:text-red-500">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="px-1 py-2 outline-none border-2 rounded pl-4"
              placeholder="Enter your email"
              {...register("email")}
            />
           {errors.email &&  
              <span className="font-medium text-red-500 text-sm pt-2">{errors?.email?.message}</span>
            }
          </div>
          <div className="w-full flex flex-col  p-2">
            <label htmlFor="mobilenumber" className="text-base my-2 after:content-['*'] after:text-red-500">
              Mobile Number
            </label>
            <input
              type="number"
              id="mobilenumber"
              name="mobileNumber"
              className="px-1 py-2 outline-none border-2 rounded pl-4 "
              placeholder="Enter your mobile number"
              {...register("mobileNumber")}
            />
            {errors.mobileNumber && 
              <span className="font-medium text-red-500 text-sm pt-2">{errors?.mobileNumber?.message}</span>
            }
          </div>
          <div className="w-full flex flex-col p-2">
            <label htmlFor="password" className="text-base my-2 after:content-['*'] after:text-red-500"  >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="px-1 py-2 outline-none border-2 rounded pl-4 "
              placeholder="Enter new password"
              {...register("password")}
            />
            {errors.password && 
              <span className="font-medium text-red-500 text-sm pt-2">{errors?.password?.message}</span>
           }
          </div>
          <div className="w-full flex flex-col p-3 items-center ">
            <button
              type="submit"
              className="bg-blue-500 w-24 px-3 py-2 text-white rounded-md hover:bg-blue-600 duration-110 ease-in-out"
            >
             {loading?"loading..." :"Register"}
            </button>
          </div>
          {error && 
              <span className="font-medium text-red-500 text-sm pt-2">{error}</span>
           }
          <div className="w-full flex flex-col my-2  items-center ">
            <span>
              don't have an account?{" "}
              <Link
                to={`/login`}
                className="text-red-500 cursor-pointer hover:text-red-600"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
