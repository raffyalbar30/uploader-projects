import { useState } from "react";
import Search from "../../Components/UI/Search";
import { useFecthingQuery } from "../../services/User-CRUD";
import Cardsmain from "./Cards";








const UserDashbord = () => {
    const [getInputs, setgetInputs] = useState<string>("");
    const { data } = useFecthingQuery();
    const Handlesearch = () => {
        console.log(getInputs);
        
    }
    
    console.log(data);
    return (
        <div className="w-full h-screen">
            <div className="mr-12 ml-12 mt-4">
                 <Search setgetInputs={setgetInputs} handleclick={Handlesearch}/>
                 <Cardsmain />
            </div>
        </div>
    );
}

export default UserDashbord;
