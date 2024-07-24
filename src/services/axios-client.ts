 import axios from "axios";
 //  Todo env
 const endpoint = "https://reqres.in/";

//  config axios instance 
 export const Makecallapi = axios.create ({
     baseURL : endpoint,
     timeout : 5000,
     headers : {
         "Content-Type" : "application/json",
     }
 }); 


  
  

  