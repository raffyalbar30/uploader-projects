import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
 const datas =  [
    { 
     image : "https://unsplash.com/photos/a-green-valley-surrounded-by-mountains-and-trees-lD252H6SW14"
   },
   {
    
    image : "https://unsplash.com/photos/an-aerial-view-of-a-river-surrounded-by-trees-8yRPDmltcwI"
   },
   { 
    image : "https://unsplash.com/photos/blue-and-brown-steel-bridge-eOpewngf68w"
   }
];


   const Benner = () => {
    const [isnext, setisnext] = useState(0);
    const Handlescrol = () => {
        const lastIndex = isnext === datas.length;
        const Nextslide = lastIndex ? 0 : isnext + 1;
        setisnext(Nextslide);
    }
    return (
        <div className="border w-full h-full rounded-md relative group">
            <img style={{ backgroundImage: `url(${datas[isnext].image})` }} alt=""  className="w-full"/>
             <div className="absolute top-52 right-12">
                <span className="text-2xl cursor-pointer" onClick={Handlescrol}>
                    <FaArrowAltCircleRight />
               </span>
             </div> 
        </div>
    );
}

export default Benner;
