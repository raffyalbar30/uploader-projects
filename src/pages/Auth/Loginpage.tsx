import Benner from "./component/benner";
import LoginForm from "./component/Login-form";


 const Loginpage = () => {
    return (
      //------------------ LOGIN----------------------//
      <div id="formauth" className="w-full h-screen">
       <div className="flex justify-center items-center">
          <section className="mt-8">
            <div className=" grid grid-cols-2 w-[600px] h-[470px] ">
              <Benner />
              <LoginForm />
            </div>
          </section>
       </div>
      </div>
      // ---------------------------------------------//
    );
}

export default Loginpage;
