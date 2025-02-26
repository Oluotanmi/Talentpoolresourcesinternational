import React from "react";


export const Checks = () => {
    return (
        <div className="xl:flex xl:justify-around mt-10 sm:m-5 sm:justify-center sm:inline-block">

            <div className="">
              <img 
                 src="photo-1577962917302-cd874c4e31d2.avif"
                 className="sm:rounded-md sm:mt-8 xl:w-[700px]"
               /> 
            </div>

            <div className="xl: xl:w-[700px]">
              <p className="font-extrabold xl:text-[35px] xl:mt-7 text-blue-600 sm:text-[14px] sm:mt-5 text-center md:mt-10">BACKGROUND CHECKS: 
              </p>
              <p className="xl:mt-2 sm:text-[13px] xl:text-[15px]">
               Our Verification process helps you to take trust that you are hiring the 
               right workforce. Whether you are an employer looking to verify applicants
               before you hire or an individual looking to vet domestic staff, 
               our screening solutions
               are tailored to meet your needs.<br /> We carry out the following background checks;
              </p>
              <or 
                 className="xl:mt-5 xl:text-[30px] text-start  font-normal text-blue-600"
                 data-aos="fade-right"
              >
                {/* <li className="xl:mt-4">Locum (Contract hires)</li> */}
                <li>Address Verification</li>
                <li>Guarantor Verification </li>
                <li>Employment Reference Checks</li>
              </or>
             </div>
             
        </div>
    )
}