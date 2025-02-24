import React from "react";
import {Button} from '../../src/Common/Button' 

export const SideTab = () => {
    return (
        <div className="xl:w-[280px] bg-slate-200 xl:h-screen p-5 text-start">
           <div className="p-3 text-center hover:bg-blue-400 rounded-sm text-blue-600 font-bold hover:text-white border-blue-400 border">
            <p>DashBoard</p>
           </div>
           <div  className="p-3 mt-5 text-center hover:bg-blue-400 rounded-sm text-blue-600 font-bold hover:text-white border-blue-400 border">
            <p>Paid Job post</p>
           </div>
           <div  className="p-3 mt-5 text-center hover:bg-blue-400 rounded-sm text-blue-600 font-bold hover:text-white border-blue-400 border">
            <p>Manage Paid Job Post</p>
           </div>
           <div  className="p-3 mt-5 text-center hover:bg-blue-400 rounded-sm text-blue-600 font-bold hover:text-white border-blue-400 border">
            <p className="">Free Job Post</p >
           </div>
           <div  className="p-3 mt-5 text-center hover:bg-blue-400 rounded-sm text-blue-600 font-bold hover:text-white border-blue-400 border">
            <p>Manage Free Job Post</p>
           </div>
        </div>
    )
}