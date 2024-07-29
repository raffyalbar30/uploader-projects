import DialogDemo from "../../Components/Modal/Modals";
import UserDashbord from "../../Layouts/Dashboard/UserDashbord";


const Dashboard = () => {
    return (
        //---------------user Dashboard -----------//
        <div>
               <UserDashbord />
                <div className="fixed z-20 bottom-2 cursor-pointer right-2">
                   <DialogDemo />
                </div>
        </div>
       //---------------user Dashboard -----------//
    );
}

export default Dashboard;
