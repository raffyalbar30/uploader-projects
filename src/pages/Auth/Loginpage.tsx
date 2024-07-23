import Benner from "./component/benner";
import LoginForm from "./component/Login-form";


 const Loginpage = () => {
    return (
      //------------------ LOGIN----------------------//
       <div className="flex justify-center">
          <section className="mt-24 rounded-lg">
            <div className=" grid grid-cols-2 gap-x-2 ">
              <LoginForm />
              <Benner />
            </div>
          </section>
       </div>
      // ---------------------------------------------//
    );
}

export default Loginpage;
