import React from "react";

export const HR = ({ state,type }) => {
    return (
        <div className="xl:flex xl:justify-around">
           <div className=" xl:w-[1400px] m-5">
                 
              <p 
                className="font-extrabold xl:text-[35px] text-blue-600 text-center">
                  HUMAN RESOURCES ADVISORY SERVICES: 
              </p>
              <p className="xl:mt-2 xl:text-[16px] xl:text-center sm:m-3 sm:text-[13px]">
              Our HR Advisory Services provide expert guidance to businesses seeking to optimize their human resource functions. 
              We support organizations by offering strategic advice, ensuring compliance, 
              and implementing HR best practices to foster a productive workforce. 
              Our HR advisory solutions include:

              </p>
              <or 
                 className="xl:mt-5 xl:text-[20px] text-start xl:m-5 font-normal  text-blue-600"
                 data-aos="fade-right"
              >
                {/* <li className="xl:mt-4">Locum (Contract hires)</li> */}
                <li>HR Toolkit, HR Policy Development & Implementation – Crafting guidelines, forms or policies that align with company goals and legal requirements. Our HR Toolkit can be a vital asset in helping to support your people and enable teams to perform and deliver results
                </li>
                <li>Employment Law Compliance & Regulatory Support – Helping businesses stay compliant with labor laws and industry regulations.
                </li>
                <li>Employee Relations & Conflict Resolution – Providing mediation and conflict resolution strategies to maintain workplace harmony.
                </li>
                <li>Workforce Planning & Strategy Development – Assisting organizations in effective workforce forecasting and employee engagement.
                </li>
                <li>Talent & Performance Management – Designing and implementing frameworks for assessing and enhancing employee performance, ensuring alignment with business goals.
                </li>
              </or>

           </div>
           
           <div className="sm:m-5">
             <img 
               src="photo-1590650516494-0c8e4a4dd67e.avif"
               className="xl:w-[900px] rounded-xl xl:mt-20"
             />
           </div>
        </div>
    )
}