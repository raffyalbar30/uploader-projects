 import { useMutation } from "@tanstack/react-query";
 import { z } from "zod";
 import { Makecallapi } from "./axios-client";
 import Validate from "./hooks/validate";
 

 
  export const values = z.object({
     email : z.string().email("email is invalid").max(24, "maximum email 24 character"),
     password : z.string().min(8, "minimum 8 characters")
  });

  export const valuesregis = z.object ({
    email : z.string().email("email is invalid").max(24, "maximum email 24 character"),
    password : z.string().min(8, "minimum 8 characters"),
    confirm :  z.string().min(8, "minimum 8 characters")
  })

  export type Registerschema = z.infer<typeof valuesregis>;
  export type Loginschema = z.infer<typeof values>;
  
  export const useLogin = () => {
      return useMutation({
          mutationFn : async (data : Loginschema) => {
               return await Makecallapi.post(`api/login`, data)
          },
          onSuccess : (Response) => {
               try {
                 localStorage.setItem("token", Response.data.token);
                 Validate();
               } catch (error) {
                  // throw handling nya 
               }
          }
      })
  }


  