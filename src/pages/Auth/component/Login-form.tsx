import { FaUsers } from "react-icons/fa6";
import { Loginschema, useLogin, values } from "../../../services/auth-services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";



const LoginForm = () => {

    const { register, handleSubmit } = useForm<Loginschema>({
         resolver : zodResolver(values),
    });

     const {mutateAsync : Login} = useLogin();
     const onSumbit = handleSubmit( async (e) => {
          try {
              await Login(e);
          } catch (error) {
              console.log(error);
          }
         
     });
    return (
        <div className="flex justify-center bg-zinc-800 shadow-lg  w-full h-full p-4">
        <div className="mt-6">
         <div className="flex justify-center">
           <FaUsers className="text-7xl"/>
         </div>
            <div className="flex-wrap mt-6">
             <form action="" onSubmit={onSumbit}>
                 <input  
                 className="text-violet11 shadow-violet7 mb-1 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"       
                 type="text"
                 placeholder="example@gmail.com"
                 {...register("email")}
                 />  
               <input
                className="text-violet11 mt-4 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                type="text"
                 placeholder="Password" 
                 {...register("password")}
               />
                <button type="submit" className="mt-4 cursor-pointer bg-gray-700 w-full py-2 rounded-md text-lg">Login Now</button>
             </form>
            </div>
         </div>
       </div>
    );
}

export default LoginForm;
