import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { Button } from "./Button";

export const Sidebar = ({SideBar}) => {

    return (
        <div className="h-screen w-full z-50 bg-white fixed">

           <div className=" p-10 ">
             <div className="flex justify-between">
               <h1 className="font-extrabold text-blue-600">TalentpoolResourcesInternational</h1>
               <MdOutlineCancel size={25} onClick={SideBar}/>
             </div>
             <div className="w-full bg-slate-600 h-[1px] mt-10"></div>
             <div>
                   <Link to="/" className="flex mt-5" >
                      <CiHome size={25}/>
                      <h1 className="ms-5"  onClick={SideBar}> Home </h1>
                    </Link>

                    <Link to="/aboutus" className="flex mt-10">
                      <MdOutlineRoundaboutRight size={25}/>
                      <h1 className="ms-5"  onClick={SideBar}> About Us </h1>
                    </Link>

                    <Link to="/services" className="flex mt-10">
                      <MdMiscellaneousServices size={25}/>
                      <h1 className="ms-5"  onClick={SideBar}> Services </h1>
                    </Link>

                    <Link className="flex mt-10 " to="/contactus">
                      <LuContact size={25} />
                      <h1 className="ms-5"  onClick={SideBar}> Contact Us </h1>
                    </Link>
             </div>
             <div className="w-full bg-slate-600 h-[1px] mt-[200px]"></div>
             <div className="mt-10">
               <Link onClick={SideBar} to="/signin">
                <Button
                  state="Recruiter Login"
                />
               </Link>
             </div>
           </div>
        </div>
    )
}