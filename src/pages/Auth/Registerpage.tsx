import Benner from './component/benner';
import RegisterForm from './component/Register-form';

const Registerpage = () => {
    return (
          //------------------ Register----------------------//
       <div id='formauth' className='w-full h-screen'>
       <div className="flex justify-center items-center">
       <section className="mt-8">
         <div className=" grid grid-cols-2 w-[600px] h-[470px] ">
           <Benner />
           <RegisterForm />
         </div>
       </section>
       </div>
       </div>
   // ---------------------------------------------//
    );
}

export default Registerpage;
