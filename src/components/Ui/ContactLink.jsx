import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import {  FaFacebookF, FaLink, FaPhone, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const ContactLink = () => {
    return(
        <>
          <div className="sm:hidden xl:flex flex  bg-blue-100  font-bold text-slate-500 border-b-blue-400 border p-2 justify-between">

            <div className=" flex justify-around xl:w-[800px] ">

                <div className="flex">
                    <MdOutlineMailOutline className="text-blue-600" size={25}/>
                    <Link href="talentpoolresourcesng@gmail.com">
                        <h1 className="xl:text-[10px] mt-1">talentpoolresourcesng@gmail.com</h1>
                    </Link>
                </div>  

                <div className="flex mt-1">
                    <FaPhone className="text-blue-600" size={15}/>
                    {/* <ink href="talentpoolresourcesng@gmail.com"> */}
                        <h1 className="xl:text-[10px]"> +234 815 639 2799 </h1>
                    {/* </link> */}
                </div>  

                
                <div className="flex mt-1">
                    <FaMapMarkerAlt className="text-blue-600" size={15}/>
                    {/* <ink href="talentpoolresourcesng@gmail.com"> */}
                        <h1 className="xl:text-[10px]"> Alimosho , Lagos </h1>
                    {/* </link> */}
                </div>  

                <div className="flex mt-1">
                    <FaWhatsapp className="text-blue-600" size={15}/>
                    <Link to="https://wa.me/message/KPQZTRNCKYLSG1">
                        <h1 className="xl:text-[10px]"> Contact us </h1>
                    </Link>
                </div>  
            </div>

             <div className="flex justify-around xl:w-[200px]">
                <div>
                    <Link to="https://www.linkedin.com/company/talent-pool-resources-international-ltd/">
                       <FaLinkedinIn className="text-blue-600"/>
                    </Link>
                </div>
                <div>
                    <Link to="https://t.me/talentpoolresources24">
                       <FaTelegramPlane className="text-blue-600" />
                    </Link>
                </div>
                <div>
                    <Link to="https://www.instagram.com/talentpoolresources24/">
                      <FaInstagram className="text-blue-600"/>
                    </Link>
                </div>
                <div>
                    <Link to="https://wa.me/message/KPQZTRNCKYLSG1">
                      <FaWhatsapp className="text-blue-600"/>
                    </Link>
                </div>
               
             </div>  
          </div> 
        </>
    )
}

export default ContactLink;