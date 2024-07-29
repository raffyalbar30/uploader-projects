import Benner from "../Components/Bener/Benner";
import Navbarlist from "../Components/Navbar/components/Navbarlist";




const Homepage = () => {
    return (
        //--------------- userpages -------------------//
        <>
        <div id="homepage" className="w-full h-screen">
         <div className="z-20">
          <Navbarlist />
          <Benner></Benner>
        </div>
        </div>
        </>
          //--------------- userpages -------------------//
    );
}

export default Homepage;
