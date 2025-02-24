import React, { useEffect } from "react";
import ContactLink from "./ContactLink";
import { Link } from "react-router-dom";
import { Button } from "../../Common/Button";
import { FaBarsStaggered } from "react-icons/fa6";
// import { Sidebar } from "../../Common/Sidebar";


const Header = ({SideBar}) => {


    return(
        <div >
            <ContactLink />

            <div className=" xl:justify-between xl:flex ">
                <div className="sm:flex justify-between ">
                    <img src="talentpool.png" className="xl:h-[130px] xl:w-[220px] sm:h-[80px] sm:w-[100px]"/>
                    <FaBarsStaggered 
                       size={30} 
                       className="m-4 mt-7 text-blue-600 xl:hidden" 
                       onClick={SideBar}
                    />
                </div>
                <div className="xl:flex sm:hidden xl:w-[500px] mt-10 justify-between font-bold xl:text-[13px] text-slate-500">
                    <Link to="/">
                    <h1> Home </h1>
                    </Link>

                    <Link to="/aboutus">
                    <h1> About Us </h1>
                    </Link>

                    <Link to="/services">
                    <h1> Services </h1>
                    </Link>

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