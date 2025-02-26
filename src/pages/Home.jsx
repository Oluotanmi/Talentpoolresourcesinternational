import React from "react";
import { Button } from "../Common/Button";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home =() => {

    
    useEffect(() => {
        AOS.init({
            duration: 3000,
            offset: 100,
            once: false
        })
    }, [])


    return (
        <>
          
          <div className="xl:flex sm:inline-block justify-between">

            <div 
                className="xl:ms-[80px] xl:mt-10 sm:p-10 xl:bg-white sm:bg-slate-100" 
                data-aos="fade-right"
            >
            <h1 className="xl:text-[70px] sm:text-[35px] font-extrabold text-blue-600 ">Talent Pool<br /> Resources International</h1>
            <p>We Transform the work place</p>
            <p className="xl:text-[12px] sm:text-[12px] mt-2"> 
                We are delighted to inform you that our company is a human resources<br /> and business management consulting
                firm located in lagos
            </p>
            <div className="mt-4 sm:text-center xl:text-start w-[120px]">
                <Button state="Get Started"/>
            </div>
            </div>

            <div>
                <img 
                data-aos="flip-right"
                src="header.avif"
                className="xl:w-[50rem] xl:h-[40rem] sm:w-[400rem] sm:h-[300px] rounded-l-5xl sm:mt-[15px]"
                />
            </div>

            </div>

            <div className="xl:mt-40 xl:flex justify-around xl:bg-slate-400 p-10 xl:shadow-xl xl:m-2">
                <div>
                <img 
                   data-aos="fade-left"
                   src="home.avif"
                   className="w-[39rem] rounded-xl sm:hidden xl:inline"
                />
                <div cl></div>
                </div>
                
                <div 
                  className="xl:w-[500px] sm:mt-[20px]"
                    data-aos="fade-up"
                >
                    <h1 className="xl:text-[30px] font-extrabold text-blue-600 text-center">Mission</h1>
                   <p className="xl:text-white text-[17px] text-start">
                    We are professionals and believe people are innovative team. 
                     We are the key to an organization’s competitive advantage.
                     Our mission is to help organizations leverage  the full potential of their people
                    and navigate the ever changing world of work
                   </p>
                   
                   <div className=" bg-slate-500 w-full h-[1px] mt-16"></div>

                   <h1 className="xl:text-[30px] text-blue-600 font-extrabold mt-10 text-center">Vision</h1>
                   <p className="xl:text-white text-[17px]">
                            To be the firm of choice for innovative and
                            HR support empowering solutions, people and organizations. 
                            We are your number one HR partner.
                   </p>
                </div>
            </div>


            <h1 className="text-center font-extrabold xl:text-[25px] sm:text-[16px] xl:mt-20 text-blue-600">Why  Choose Us</h1>
            
            <div className="xl:flex sm:inline-block justify-around xl:mt-10 sm:m-5">

                <div 
                  className="xl:w-[300px] xl:mt-[50px] shadow-xl border-2 border-b-blue-500 border-t-white border-r-white border-l-white hover:text-white hover:bg-blue-600"
                  data-aos="fade-right"
                  >
                    <h1 className="font-extrabold text-[18px] text-blue-600 text-center w-full mt-10">Cost Effective & Flexible</h1>
                    <p className="text-[13px] p-7 ">  
                        We’re responsive, flexible and agile. We adapt as your needs and priorities change, with a speed, 
                        efficiency and cost-effectiveness that larger firms just can’t match
                    </p>
                </div>

                <div  
                   className="sm:mt-[60px] xl:w-[300px]  shadow-xl border-2 border-b-blue-500 border-t-white border-r-white border-l-white hover:bg-blue-600 hover:text-white"
                   data-aos="fade-right"
                >
                    <h1 className="font-extrabold text-[18px] mt-10 text-blue-600 text-center">Consulting Expertise  </h1>
                    <p className="text-[13px] p-7">
                    We are committed to providing innovative solutions that will help create a better tomorrow for everyone.

                    </p>
                </div>

                <div  
                   className="sm:mt-[60px] xl:w-[300px] shadow-xl border-2 border-b-blue-500 border-t-white border-r-white border-l-white hover:text-white hover:bg-blue-600"
                   data-aos="fade-right"
                 
                 >
                    <h1 className="font-extrabold text-[18px] mt-10 text-blue-600 text-center w-full">Innovative and committed to serving you  </h1>
                    <p className="text-[13px] p-4">
                    we offer professionalism, comprehensive industry knowledge and readiness to go the extra mile in a unique way.

                    </p>
                </div>

                <div  
                    className="sm:mt-[60px] xl:w-[300px] shadow-xl  border-2 border-b-blue-500 border-t-white border-r-white border-l-white hover:text-white  hover:bg-blue-600"
                    data-aos="fade-right"
                >
                    <h1 className="font-extrabold text-[18px] mt-10 text-blue-600 text-center">Results-Driven   </h1>
                    <p className="text-[13px] p-3 w-full ">
                        Our focus is on delivering actionable objectives and prioritizing tasks that directly 
                        contribute to achieving these goals. 
                        his approach empowers employees to remain motivated, overcome obstacles, 
                        efficiently manage time, and remain accountable for their deliverables.

                    </p>
                </div>
            </div>
        </>
    )
}