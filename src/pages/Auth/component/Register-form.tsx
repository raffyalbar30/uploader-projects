import { useForm } from "react-hook-form";
import { Registerschema, valuesregis } from "../../../services/auth-services";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoEyeSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook, SiGithub } from "react-icons/si";



const RegisterForm = () => {
    const {register, handleSubmit} = useForm<Registerschema>({
         resolver : zodResolver(valuesregis),
    })
    const onSumbit = handleSubmit((e)=> {
       console.log(e.email)
    })
    return (
        <div className=" bg-slate-100 shadow-lg  w-full h-full p-4">
            <div className="ml-2">
                <p className="text-slate-950 font-bold text-left ml-2 text-4xl pb-1">Register</p>
                <p className="text-[12px] text-slate-950 font-semibold ml-2">You have an account ? <span className="text-purple-800 font-semibold">Sign up now</span></p>
            </div>
            <div className="mt-12">
            <form action="" onSubmit={onSumbit}>
                <div className="border-b w-full border-purple-600">
                 <input  
                 className="appearance-none bg-transparent w-full text-gray-700 mr-3 font-semibold py-1 px-2 placeholder:text-gray-400 leading-tight focus:outline-none" 
                 type="text" placeholder="example@gmail.com" 
                 aria-label="Full name"
                 {...register("email")}
                 />  
                </div>
                <div className="border-b w-full border-purple-600 mt-8">
                 <div className="flex justify- items-center">
                  <input  
                 className="appearance-none bg-transparent w-full text-gray-700 mr-3 font-semibold py-1 px-2 placeholder:text-gray-400 leading-tight focus:outline-none" 
                 type="text" placeholder="Password" 
                 aria-label="Full name"
                 {...register("password")}
                 />  
                 <span className="text-gray-400 text-[18px] cursor-pointer">
                   <IoEyeSharp />
                 </span>
                </div>
                </div>
                <div className="border-b w-full border-purple-600 mt-8">
                 <div className="flex justify- items-center">
                  <input  
                 className="appearance-none bg-transparent w-full text-gray-700 mr-3 font-semibold py-1 px-2 placeholder:text-gray-400 leading-tight focus:outline-none" 
                 type="text" placeholder="Confirm Password" 
                 aria-label="Full name"
                 {...register("confirm")}
                 />  
                 <span className="text-gray-400 text-[18px] cursor-pointer">
                   <IoEyeSharp />
                 </span>
                </div>
                </div>
                <button type="submit" className="cursor-pointer text-gray-200 font-semibold bg-purple-700 mt-12 w-full py-2 rounded-md text-lg">
                     Register now
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

export default RegisterForm;
