import React from "react";
import { ScalerButton } from "./ScalerButton";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";



export const Footer = () => {
    return (
        <div className="bg-blue-700 p-5 xl:mt-60 sm:mt-[40px] justify-around flex">

            {/* <div className="bg-blue-400 xl:w-[700px] rounded-xl flex absolute xl:top-[2150px] sm:top-[2820px] p-[20px] justify-between align-middle" >
               <p className="text-white font-bold mt-1">Ready to Get Started? </p>
               <ScalerButton state=" Contact Us" />
            </div> */}

            <div className="xl:flex sm:inline-block text-center xl:mt-20 xl:w-[1000px] justify-between">
                <div className="flex xl:m-10 sm:m-5 justify-between ">
                    <div className="p-5 bg-white rounded-full">
                      <Link to="https://www.instagram.com/talentpoolresources24/">
                        <FaInstagram 
                           src="facebook.png"
                           className="w-[1rem]"
                        />
                      </Link>
                    </div>

                    <div className="p-5 bg-white rounded-full">
                       <Link to="https://t.me/talentpoolresources24">
                        <FaTelegramPlane
                           src="twitter.png"
                           className="w-[1rem]"
                        />
                       </Link>
                    </div>

                    <div className="p-5 bg-white rounded-full">
                       <Link to="https://www.linkedin.com/company/talent-pool-resources-international-ltd/">
                        <FaLinkedinIn
                           src="linkedin.png"
                           className="w-[1em]"
                        />
                       </Link>
                    </div>

                    <div className="p-5 bg-white rounded-full">
                       <Link to="https://wa.me/message/KPQZTRNCKYLSG1">
                        <FaWhatsapp
                           src="linkedin.png"
                           className="w-[1em]"
                        />
                       </Link>
                    </div>
                </div>

                <div className="xl:mt-5 xl:flex sm:inline-block xl:w-[900px] justify-around text-center">

                   <div className="text-white text-[12px]">
                      <h1 className="text-white font-bold xl:text-[27px] sm:text-[15px]">Contact us</h1>
                      <p>talentpoolresourcesng@gmail.com</p>
                      <p>+234 815 639 2799</p>
                      <p>Alimosho ,Lagos</p>
                   </div>
                   
                   <div className="text-white text-[12px]">
                      <h1 className="text-white font-bold xl:text-[27px] sm:text-[15px]">Services</h1>
                      <p>Recruitement And Head Hunting services</p>
                      <p>Background Checks</p>
                      <p>CV Revamp</p>
                      <p>Human Resources Advisory Services</p>
                  
                   </div>
                    
                   <div className="text-white text-[12px]">
                      <h1 className="text-white font-bold xl:text-[27px] sm:text-[15px]">About us</h1>
                      <p>Recruitement Services</p>
                      <p>Background Check Services</p>
                      <p>Outsourcing</p>
                   </div>

                   {/* <div className="text-white text-[12px] sm:mt-[50px]">
                      <h1 className="text-white font-bold xl:text-[27px] sm:text-[15px]">Services</h1>
                      <p>Marketing</p>
                      <p>Social Media</p>
                   </div>

                   <div className="text-white text-[12px]  sm:mt-[50px]">
                      <h1 className="text-white font-bold xl:text-[27px] sm:text-[15px]">About us</h1>
                      <p>Home</p>
                      <p>About</p>
                      <p>Privacy Policy</p>
                   </div> */}
                </div>
            </div>
        </div>
    )
}