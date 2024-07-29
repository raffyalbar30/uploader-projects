import Button from "../../UI/Button";

 
 const Navbarlist = () => {
    return (
        <div className="w-full border border-slate-600 ">
            <div className="flex justify-between items-center p-2">
              <div className="ml-12">
                 <nav className="text-slate-100 text-[16px] font-Popins font-semibold"> Uploader web apps</nav>
              </div>
             <div className="flex justify-evenly items-center">
                   <ul className="flex items-center gap-x-9 hover:underline underline-offset-4 cursor-pointer text-[16px] font-Popins font-semibold text-slate-50">
                       <li>Intro</li>
                       <li>Services</li>
                       <li>Support</li>
                       <li>Contact</li>
                   </ul>
               </div>
                  <div className="mr-6 text-slate-200">
                   <Button className="text-[18px] font-Popins font-medium">Open now</Button>
                  </div>
            </div>
        </div>
    );
 }
 
 export default Navbarlist;
 