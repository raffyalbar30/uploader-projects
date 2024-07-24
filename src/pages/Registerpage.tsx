import Benner from './Auth/component/benner';
import RegisterForm from './Auth/component/Register-form';

const Registerpage = () => {
    return (
          //------------------ Register----------------------//
       <div className="flex justify-center items-center">
       <section className="mt-8">
         <div className=" grid grid-cols-2 w-[600px] h-[470px] ">
           <Benner />
           <RegisterForm />
         </div>
       </section>
    </div>
   // ---------------------------------------------//
    );
}

export default Registerpage;
