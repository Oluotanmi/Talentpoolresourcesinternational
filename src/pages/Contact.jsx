import React,{useEffect} from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Input } from "../Common/Input";
import {  FaFacebookF, FaLink, FaPhone, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt} from "react-icons/fa";
import { Button } from "../Common/Button";
import AOS from "aos";
import "aos/dist/aos.css";


export const ContactUs = ({  }) => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 100,
            once: false
        })
    }, [])


    return (
        <div>
           <p className="text-center">Contact Us</p>
           
           <div className="xl:flex sm:inline xl: justify-center ">
            
                <div className="m-10 p-10 bg-blue-100" data-aos="fade-left">
                    <div className="flex m-3"> 
                    <MdOutlineMailOutline className="text-blue-600" size={45}/>
                    <p className="m-2">Email Us</p>
                    </div>
                    <h1 className="xl:text-[10px] xl:ms-10 sm:text-[10px]">talentpoolresourcesng@gmail.com</h1>
                </div>

                <div className="m-10 p-10 bg-blue-100" data-aos="fade-right">
                    <div className="flex m-3"> 
                    <FaPhone className="text-blue-600" size={45}/>
                    <p className="m-2">Call Us</p>
                    </div>
                    <h1 className="xl:text-[10px] xl:ms-10 sm:text-[10px]">+234 815 639 2799</h1>
                </div>

                <div className="m-10 p-10 bg-blue-100" data-aos="fade-left">
                    <div className="flex m-3"> 
                    <FaMapMarkerAlt className="text-blue-600" size={45}/>
                    <p className="m-2">Office</p>
                    </div>
                    <h1 className="xl:text-[10px] xl:ms-10 sm:text-[10px]">Alimosho, Lagos</h1>
                </div>
            </div>

            <div className="xl:flex xl:justify-center mt-20 ">
               <div className="m-10">
                <p className="xl:text-[35px] xl:mt-40 sm:text-[20px] font-bold">Lets Work together </p>
                <p className="xl:text-[12px] text-slate-500">Share yout vision for your next projects with us. 
                    <br />
                    kindly Book an appointment with us to enable us know how we can help your business needs
                  </p>
               </div>
               
               <div className="sm:w-[290px] sm:inline justify-center items-center xl:w-[500px] ">
                  <div 
                    className="xl:flex xl:justify-between">
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                  </div>
                  <div className="w-full">
                    <Input placeholder="Email"/>
                  </div>
                  <div className="w-full xl:flex xl:justify-between">
                    <Input placeholder="Service interested  in"/>
                    <Input placeholder="Subject"/>
                  </div>
                  <div className="mt-5">
                    <input 
                      className="w-full border border-blue-600 p-10"
                      placeholder="say something"
                    />
                  </div>
                  <div className="xl:ms-10 sm:m-5">
                    <Button 
                        state="Submit"
                    />
                  </div>
               </div>
            </div>
        </div>
    )
}