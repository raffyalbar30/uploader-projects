import { IoEyeSharp,IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { Loginschema, useLogin, values } from "../../../services/auth-services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";



const LoginForm = () => {
    const Navigation = useNavigate();
    const { register, handleSubmit, reset, formState } = useForm<Loginschema>({
        resolver : zodResolver(values),
    });

     const [view,setview] = useState(false);
      const handleview = () => {
         setview(!view);
      }

     const {mutateAsync : Login} = useLogin();
     const onSumbit = handleSubmit( async (e) => {
          try {
              reset();
              await Login(e);
              Navigation("/user");
          } catch (error) {
              console.log(error);
          }
         
     });
    return (
        <div className=" bg-slate-100 shadow-lg rounded-r-md w-full h-full p-4">
            <div className="ml-2">
                <p className="text-slate-950 font-bold text-left ml-2 text-4xl pb-1">Login</p>
                 <p className="text-[12px] ml-2 text-slate-950 font-semibold">Don't have an account ? <Link to={"Register"}><span className="text-purple-800 font-semibold">Create account now</span> </Link></p>
            </div>
            <div className="mt-12">
            <form action="" onSubmit={onSumbit}>
                <div className={`border-b w-full ${formState.errors?.email ? "border-red-600" : "border-purple-600"}`}>
                 <input  
                 className= {`appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 placeholder:text-gray-400 leading-tight focus:outline-none`}
                 type="text" placeholder="example@gmail.com" 
                 aria-label="Full name"
                 {...register("email")}
                 />  
                </div>
                 {formState.errors?.email && <p className="text-[13px] mt-1 ml-2 text-red-500">{formState.errors.email.message}</p>}
                <div className={`border-b w-full ${formState.errors?.password? "border-red-600" : "border-purple-600"} mt-8`}>
                 <div className="flex justify- items-center">
                  <input  
                 className="appearance-none bg-transparent w-full text-gray-700 mr-3 font-semibold py-1 px-2 placeholder:text-gray-400 leading-tight focus:outline-none" 
                 type={view ? "text" : "password"} placeholder="Password" 
                 aria-label="Full name"
                 {...register("password")}
                 />  
                 <span className="text-gray-400 text-[18px] cursor-pointer" onClick={handleview}>
                    {
                        view ?  <IoEyeSharp /> : <IoEyeOff /> 
                    }
                 </span>
                </div>
                </div>
                {formState.errors?.password && <p className="text-[13px] mt-1 ml-2 text-red-500">{formState.errors.password.message}</p>}
                <div className="flex justify-between w-full mt-4">
                   <div className="flex gap-x-1 items-center">
                    <input type="checkbox" id="rememberme" className="bg-transparent border border-slate-800"/>
                    <span className="text-gray-700 text-[12px] font-semibold">Remember me</span>
                   </div>
                  <span className="text-purple-800 text-[12px] font-bold cursor-pointer">Forget password?</span>
                </div>
                <button type="submit" className="cursor-pointer text-gray-200 font-semibold bg-purple-700 mt-9 w-full py-2 rounded-md text-lg">
                    Sign Up Now
                </button>
            </form>
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-400 ml-8"></div>
                <span className="flex-shrink mx-2 text-[12px] text-gray-400">Or Login With</span>
               <div className="flex-grow border-t border-gray-400 mr-8"></div>
            </div>
            <div className="flex gap-x-6 justify-center items-center text-[32px] cursor-pointer">
                <span><FcGoogle/></span>
                <span className="text-gray-800"><SiFacebook/></span>
                <span className="text-gray-800"><SiGithub /></span>
            </div>
            </div>
        </div>
    );
}

export default LoginForm;
