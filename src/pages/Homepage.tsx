import DialogDemo from "../Components/Modal/Modals";
import Search from "../Components/UI/Search";


const Homepage = () => {
    return (
        <>
         <Search/>
         <div className="z-20">
        <DialogDemo/>
        </div>
        </>
    );
}

export default Homepage;
