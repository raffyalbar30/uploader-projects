 import { useMutation } from "@tanstack/react-query";
 import { z } from "zod";
 import { Makecallapi } from "./axios-client";

 
  export const values = z.object({
     email : z.string().min(3, "tiga char").max(20, "enambelas char"),
     password : z.string().min(8, "char password")
  });

  export const valuesregis = z.object ({
    email : z.string().min(3, "tiga char").max(20, "enambelas char"),
    password : z.string().min(8, "char password"),
    confirm :  z.string().min(8, "char password")
  })


  export type Registerschema = z.infer<typeof valuesregis>;
  export type Loginschema = z.infer<typeof values>;
  
  export const useLogin = () => {
      return useMutation({
          mutationFn : async (data : Loginschema) => {
               return await Makecallapi.post(`api/login`, data)
          }
      })
  }