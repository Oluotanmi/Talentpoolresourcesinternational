import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export const AboutUs = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            offset: 100,
            once: false
        })
    }, [])

    return (
        <div>

           <div className="text-center" >
             <h1 data-aos="fade-right" className="xl:text-[40px] font-bold text-blue-600">About Us</h1>
             <p className="sm:mt-5">About Talent Pool Resources International</p>
           </div>

           <div className="xl:flex xl:justify-around mt-10">
             <img 
               src="photo-1570126618953-d437176e8c79.avif"
               className="xl:w-[600px] rounded-r-full"
                data-aos="flip-left"
             />
             <div  data-aos="flip-right" className="xl:w-[700px] xl:mt-40 xl:text-[25px] sm:p-5 sm:mt-5">
              <p>We are delighted to inform you that our company is a human resources 
                  consulting firm in Lagos, Nigeria and are officially registered as 
                  limited liability with CAC No. 7396745. We are human resources and 
                  business management consulting firm offering HR Solutions to Start ups, small and medium scale businesses across board within and outside Nigeria.
                   <br />
                  we are professionals and believe people are innovative team. We the key to 
                   an organization’s competitive advantage. Our mission is to help
                   organizations leverage the full potential of their people and 
                  navigate the ever changing world of work.
               </p>
             </div>
           </div>

           <div  className="xl:flex xl:justify-around sm:justify-center sm:text-center sm:w-full xl:mt-10 xl:m-10 ">
{/* 
            <div className="xl:h-[200px] xl:inline  xl:w-[450px] sm:justify-center  sm:flex sm:w-full sm:p-5">
              <img 
                src="photo-1570126618953-d437176e8c79.avif"
                className="sm:w-[140px] sm:h-[250px] xl:w-full sm:shadow-md"
              />
              <p data-aos="fade-left" 
                 className=" xl:text-[18px] sm:text-wrap sm:font-bold sm:w-full md:text-[12.7px] sm:text-[12.7px] xl:w-full sm:h-[250px] p-2 xl:rounded-b-xl shadow-md text-center border-blue-200 border-l-white xl:border-b-blue-600 sm:mt-10"
              >
              We are professional and believe people are innovative team.. 
              We the key to an organization’s competitive advantage.
              </p>
            </div>

            <div className="xl:h-[200px] xl:inline  xl:w-[450px] sm:justify-center  sm:flex sm:w-full sm:p-5">
              <img 
                src="premium_photo-1661963571550-8a06ba7ded7d.avif"
                className="sm:w-[140px] sm:h-[250px] xl:w-full sm:shadow-md"
              />
              <p data-aos="fade-left" 
                 className=" xl:text-[18px] sm:text-wrap sm:font-bold sm:w-full md:text-[12.7px] sm:text-[12.7px] xl:w-full sm:h-[250px] p-2 xl:rounded-b-xl shadow-md text-center border-blue-200 border-l-white xl:border-b-blue-600 sm:mt-10"
              >
              We are delighted to inform you that our company is a human resources consulting firm in Lagos, Nigeria 
              </p>
            </div>

            <div className="xl:h-[200px] xl:inline  xl:w-[450px] sm:justify-center  sm:flex sm:w-full sm:p-5">
              <img 
                src="photo-1542744173-8e7e53415bb0.avif"
                className="sm:w-[140px] sm:h-[250px] xl:w-full sm:shadow-md"
              />
              <p data-aos="fade-left" 
                 className=" xl:text-[18px] sm:text-wrap sm:font-bold sm:w-full md:text-[12.7px] sm:text-[12.7px] xl:w-full sm:h-[250px] p-2 xl:rounded-b-xl shadow-md text-center border-blue-200 border-l-white xl:border-b-blue-600 sm:mt-10"
              >
             We are human resources and business management consulting firm offering HR 
              </p>
            </div> */}

           </div>


           <div className="xl:mt-[100px] sm:p-10 xl:flex justify-around">
             <div>
               <h1 className="xl:text-[60px] font-bold text-blue-600">Our Core Values: RICCO</h1>
               <or className="m-2">
                <li>Result-Oriented</li>
                <li> Innovative & Efficient Execution</li>
                <li> Clients-centric Adaptability</li>
                <li>Cost-Effectiive & Flexible Solutions</li>
                <li>Objectively Focused</li>
               </or>
             </div>
             
             <div className="">
                <img 
                  data-aos="flip-left"
                  className=""
                  src="photo-1551135049-8a33b5883817.avif"
                />
             </div>
           </div>

           <h1 data-aos="slide-up" className="xl:text-[40px] font-bold text-center xl:mt-20 text-blue-600">Our Clients</h1>
            <div className="xl:flex xl:justify-between">
              <img 
                src="download.jpeg"
                className="xl:m-20 sm:m-10"
              />
               <img 
                src="WhatsApp Image 2025-02-19 at 22.18.57_e89fdddc.jpg"
                className="xl:m-20 sm:m-10 w-[240px]"
              />
               <img 
                src="WhatsApp Image 2025-02-19 at 22.18.59_96b712ea.jpg"
                className="xl:m-20 sm:m-10 w-[240px]"
              />
               <img 
                src="WhatsApp Image 2025-02-19 at 22.19.05_10f152dd.jpg"
                className="xl:m-20 sm:m-10 w-[240px]"
              />
               <img 
                src="WhatsApp Image 2025-02-19 at 22.20.19_6e7738ec.jpg"
                className="xl:m-20 sm:m-10 w-[240px]"
              />
            </div>
        </div>
    )
}