import React, { useEffect, useState } from "react";
import ContactLink from "./ContactLink";
import { Link } from "react-router-dom";
import { Button } from "../../Common/Button";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
// import { useEffect } from "react";/
import AOS from "aos";
import "aos/dist/aos.css";
// import { Sidebar } from "../../Common/Sidebar";


const Header = ({SideBar}) => {

    const [arrow, setShowArrow] = useState(false)

    const handleArrow = () => {
        setShowArrow(prev => !prev)

    }

    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 100,
            once: false
        })
    }, [])

    return(
        <div >
            <ContactLink />

            <div className=" xl:justify-between xl:flex ">
                <div className="sm:flex justify-between ">
                    <img src="talentpool.png" className="xl:h-[130px] xl:w-[250px] sm:h-[80px] sm:w-[100px]"/>
                    <FaBarsStaggered 
                       size={30} 
                       className="m-4 mt-7 text-blue-600 xl:hidden" 
                       onClick={SideBar}
                    />
                </div>
                <div className="xl:flex sm:hidden xl:w-[500px] mt-[50px] justify-between font-bold xl:text-[18px] text-slate-500">
                    <Link to="/">
                    <h1> Home </h1>
                    </Link>

                    <Link to="/aboutus">
                    <h1> About Us </h1>
                    </Link>

                    <div className=" xl:w-[100px]">
                        <div className="flex justify-center text-center ">
                            <h1> Services </h1>
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
                          className="bg-blue-200 text-center shadow-lg p-2 xl:w-[400px] absolute z-50 rounded-sm"  >
                            <Link  onClick={handleArrow} to="/recruitement">
                              <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200">Recruitement And Head Hunting Services</p>
                            </Link>
                            <Link  onClick={handleArrow} to="/checks">
                              <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200">Background Checks</p>
                            </Link>
                            <Link  onClick={handleArrow} to="/hr">
                               <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200">HR Advisory Services</p>
                            </Link>
                            <Link  onClick={handleArrow} to="/cv">
                               <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200" >CV Revamp Services</p>                          
                            </Link>
                            <Link  onClick={handleArrow} to="/business">
                               <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white border border-b-blue-400 border-t-blue-200 border-r-blue-200 border-l-blue-200">Business Management</p>
                            </Link>
                            <Link  onClick={handleArrow} to="/outsourcing">
                               <p className="text-sm mt-3 p-2 hover:bg-blue-600 hover:text-white  ">Outsourcing Services </p>
                            </Link>
                        </div>     
                        :
                        ""
                        }          

                    </div>
                    
                    <Link to="contactus">
                    <h1> Contact Us </h1>
                    </Link>
                </div>
                <div className="xl:m-8 xl:flex sm:hidden xl:justify-around xl:w-[400px]">
                  <Link to="/signin" >
                    <Button state="Employers Login" />
                  </Link>
                  {/* <Button state="Job Post" /> */}
                </div>
            </div>

        </div>
    )
}

export default Header;