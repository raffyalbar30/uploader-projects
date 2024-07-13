import { useForm } from "react-hook-form"
import axios from "axios";
import { z } from "zod";





 const valuesform = z.object({
    username : z.string()
    .min(3, "username minimal 3 char")
    .max(16, "username maksimal 16 char"),
    password : z.string().min(8, "password minimal 8 char")
})

type Loginschema = z.infer<typeof valuesform>;

const Loginpage = () => {
    const { register, handleSubmit } = useForm<Loginschema>();
    const onSumbit = handleSubmit( async (e) => {
        try {
             await axios.post(`https://reqres.in/api/login`, {
                  email : e.username,
                  password : e.password
             }).then(ress => console.log(ress));
         } catch (error) {
             console.log(error);
         }
    })

    return (
        <div className="flex justify-center mt-24 items-center">
        <div className="bg-zinc-800 rounded-lg w-[400px] p-4">
          <p className="float-left">Wellcome Back !!</p>
           <div className="mt-12">
               <div className="flex-wrap">
                <form action="" onSubmit={onSumbit}>
                    <input  
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"       
                    type="text"
                    placeholder="example@gmail.com"
                    {...register("username")}
                    />
                  <input
                   className="text-violet11 shadow-violet7 mt-4 focus:shadow-violet8 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                   type="text"
                    placeholder="Password"
                   {...register("password")} 
                  />
                   <button type="submit" className="mt-4 cursor-pointer bg-gray-700 w-full py-2 rounded-md text-lg">Login Now</button>
                </form>
               </div>
            </div>
        </div>
        </div>
    );
}

export default Loginpage;
