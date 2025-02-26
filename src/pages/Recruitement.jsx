import React from "react";

export const Recruitement = () => {
    return (
        <div className="xl:flex xl:justify-around">       
           <div className="sm:m-3 xl:w-[700px]">
              <p className="font-extrabold xl:text-[35px] xl:mt-7 text-blue-600 sm:text-[14px] btext-center md:mt-10">RECRUITMENT AND HEAD HUNTING SERVICES </p>
              <p className="xl:mt-2 sm:text-[13px] xl:text-[15px]">
                We strive to bring in talents that best fits your organization. 
                Our experienced HR recruiters bring deep expertise across various industries.
                We specialize in sourcing and acquiring the best talent to drive organizational success. 
                {/* <br /> */}
                Our recruitment services include:

              </p>
              <or 
                 className="xl:mt-5 xl:text-[25px] sm:text-start text-start font-normal text-blue-600"
                 data-aos="fade-right"
              >
                <li className="xl:mt-4">Contract hires - Short-term and project-based staffing solutions. </li>
                <li>Graduate Trainee Hires – Fresh talent recruitment and onboarding.</li>
                <li>Experienced Hires – Mid-level to senior professionals tailored to your business needs.
                </li>
                <li>Executive Search – Finding top-level leadership candidates.
                </li>
              </or>
             </div>

             <img 
                 src="photo-1573497491208-6b1acb260507.avif"
                 className="sm:rounded-full sm:w-[340px] xl:w-[600px] sm:mt-10 sm:m-5"
               />
        </div>
    )
}