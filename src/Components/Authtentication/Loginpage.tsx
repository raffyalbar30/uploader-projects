import { useForm} from "react-hook-form"
import axios from "axios";
import { z } from "zod";
import { FaUsers } from "react-icons/fa6";
import { zodResolver } from "@hookform/resolvers/zod";



 

 const valuesform = z.object({
    username : z.string()
    .min(3, "username minimal 3 char"),
    password : z.string().min(8, "password minimal 8 char")
})

type Loginschema = z.infer<typeof valuesform>;

const Loginpage = () => {
    const { register, handleSubmit, formState, reset} = useForm<Loginschema>({
        resolver : zodResolver(valuesform),
    });
    const onSumbit = handleSubmit( async (e) => {
        try {
            await axios.post(`https://reqres.in/api/login`, {
                email : e.username,
                password : e.password
            }).then(ress => console.log(ress));
            alert("berhasil login");
        } catch (error) {
            console.log(error);
        }
        reset()
    })

    return (
        <div className="flex justify-center  items-center">
        <div className="bg-zinc-800 shadow-lg rounded-lg w-[400px] h-[400px] p-4">
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
                    {...register("username")}
                    />
                    {formState.errors.username && (
                         <p className="text-red-300 float-left mb-4">{formState.errors.username.message}</p>
                    )}
                   
                  <input
                   className="text-violet11 mt-4 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                   type="text"
                    placeholder="Password"
                   {...register("password")} 
                  />
                 {formState.errors.password && (
                         <p className="text-red-300 float-left mb-4">{formState.errors.password.message}</p>
                    )}
                   <button type="submit" className="mt-4 cursor-pointer bg-gray-700 w-full py-2 rounded-md text-lg">Login Now</button>
                </form>
               </div>
            </div>
        </div>
        </div>
    );
}

export default Loginpage;
