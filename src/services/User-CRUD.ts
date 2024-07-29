import { useQuery } from "@tanstack/react-query"
import { Makecallapi } from "./axios-client"

  
  

  // function axios fecthing data 
  const fecthingdata = async () => {
      const Response = await Makecallapi(`api/users`)
      .then(ress => console.log(ress.data.data))
      .catch(Error => console.log(Error))

      return Response;
  }
  
  export const useFecthingQuery = () => {
     return useQuery({
         queryKey : ["fecthing"],
         queryFn : fecthingdata
     })
  }


      