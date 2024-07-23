import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
 const datas =  [
    {
     id: 1, 
     image : "https://unsplash.com/photos/a-green-valley-surrounded-by-mountains-and-trees-lD252H6SW14"
   },
   {
    id: 2, 
    image : "https://unsplash.com/photos/an-aerial-view-of-a-river-surrounded-by-trees-8yRPDmltcwI"
   },
   {
    id: 3, 
    image : "https://unsplash.com/photos/blue-and-brown-steel-bridge-eOpewngf68w"
   }
];

type datatype = {
    id: string,
    image : string
 }
const Benner = () => {
    
    const Handlescrol = () => {
    }
    return (
        <div className="border w-full h-full rounded-md relative group">
            <img src="/img/NewYork.jpeg" alt=""  className="w-full"/>
             <div className="absolute top-52 right-12">
                <span className="text-2xl" onClick={Handlescrol}>
                    <FaArrowAltCircleRight />
               </span>
             </div> 
        </div>
    );
}

export default Benner;
