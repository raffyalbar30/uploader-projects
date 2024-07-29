import { useState } from "react";
import Search from "../../Components/UI/Search";
import { useFecthingQuery } from "../../services/User-CRUD";






const UserDashbord = () => {
    const [getInputs, setgetInputs] = useState<string>("");
    const { data } = useFecthingQuery();
    const Handlesearch = () => {
    }
    
    console.log(data);
    return (
        <div className="w-full h-screen">
            <div className="mr-12 ml-12 mt-4">
                 <Search setgetInputs={setgetInputs} handleclick={Handlesearch} />
            </div>
        </div>
    );
}

export default UserDashbord;
