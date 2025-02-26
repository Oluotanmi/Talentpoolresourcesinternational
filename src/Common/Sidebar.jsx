import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { LuContact } from "react-icons/lu";
import { Button } from "./Button";
import { FaAngleDown,FaAngleUp } from "react-icons/fa";

export const Sidebar = ({SideBar}) => {

  const [arrow, setShowArrow] = useState(false)

  const handleArrow = () => {
      setShowArrow(prev => !prev)
      // SideBar(false)
  }

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

                    <div>
                      <div className="flex mt-10">
                        <MdMiscellaneousServices size={25}/>
                        <h1 className="ms-5" > Services </h1>
                        { 
                            arrow ?
                            <FaAngleUp onClick={handleArrow} className="m-1"/>
                            :
                            <FaAngleDown onClick={handleArrow} className="m-1"/>
                          } 
                      </div>

                      { arrow
                        ?
                        <div 
                          data-aos="flip-right"
                          className="bg-blue-200 text-center shadow-lg p-2 xl:w-[500px] absolute z-50 rounded-sm"  >
                            <Link  onClick={SideBar} to="/recruitement">
                              <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200">Recruitement And Head Hunting Services</p>
                            </Link>
                            <Link  onClick={SideBar} to="/checks">
                              <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200">Background Checks</p>
                            </Link>
                            <Link  onClick={SideBar} to="/hr">
                               <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200">HR Advisory Services</p>
                            </Link>
                            <Link  onClick={SideBar} to="/cv">
                               <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200" >CV Revamp Services</p>                          
                            </Link>
                            <Link  onClick={SideBar} to="/business">
                               <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200">Business Management</p>
                            </Link>
                            <Link  onClick={SideBar} to="/outsourcing">
                               <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white  ">Outsourcing Services </p>
                            </Link>
                        </div>     
                        :
                        ""
                        }          

                    </div>
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