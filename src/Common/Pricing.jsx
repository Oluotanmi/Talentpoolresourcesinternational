import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const Pricing = ({ state1,state2,state3,state4,state5,state6,state7,state8,state9 }) => {
    return (
        <div className="p-5 sm:mt-5 hover:bg-blue-200 w-[250px] rounded-md border-blue-200 border">
           <p className="text-[25px] font-extrabold text-blue-600">{state1}</p>
           <p className="text-[14px] mt-3 font-bold">{state2}</p>
           <div className="flex">
            <p className="text-blue-600 font-extrabold mt-2"># </p>
            <p className="text-[39px] font-extrabold text-blue-600">{state3}</p>
           </div>
           <p className="text-[14px]">{state4}</p>
           <div className="flex mt-10">
             <FaStar color="gold"/>
             <p className="text-[14px] ms-10 font-bold">{state5}</p>
           </div>
           <div className="flex mt-5">
             <FaStar color="gold"/>
             <p className="text-[14px] ms-10 font-bold">{state6}</p>
           </div>
            <div className="flex  mt-5">
             <FaStar color="gold"/>
             <p className="text-[14px] ms-10 font-bold">{state7}</p>
           </div>
           <div className="flex  mt-5">
            {state8 && <FaStar color="gold"/>}
             <p className="text-[14px] ms-10 font-bold">{state8}</p>
           </div>
           <div className="flex  mt-5">
            {state9 && <FaStar color="gold"/>}
             <p className="text-[14px] ms-10 font-bold">{state9}</p>
           </div>
           <div className="mt-5 text-[12px]">
               <Link to="https://wa.me/message/KPQZTRNCKYLSG1" >
                <Button 
                    state="Contact Us"
                />
                </Link>
           </div>

        </div>
    )
}