import React from "react";
import { Pricing } from "../Common/Pricing";

export const Services = () => {
    return (
        <div>
           <div className="text-center sm:text-center" >
             <h1 data-aos="fade-right" className="xl:text-[40px] font-bold text-blue-600"> Our Services</h1>
             {/* <p>RECRUITMENT AND HEAD HUNTING SERVICES</p> */}
           </div>

           <div className="xl:m-10 xl:flex xl:justify-between sm:justify-center">
             <div className="md:flex md:justify-center ">
               <img 
                 src="photo-1573497491208-6b1acb260507.avif"
                 className="sm:rounded-full sm:w-[340px] xl:w-[600px] sm:mt-10 sm:m-5"
               />
               {/* <img 
                 src="photo-1590650516494-0c8e4a4dd67e.avif"
                 className="sm:hidden xl:block absolute xl:left-[300px] xl:w-[400px] xl:bottom-[0px]  xl:rounded-full"
               /> */}
             </div>

           </div>

           <div className="xl:m-10 xl:flex justify-between xl:mt- sm:m-5">

           <div className="xl: xl:w-[700px]">
              <p className="font-extrabold xl:text-[35px] xl:mt-7 text-blue-600 sm:text-[14px] md:text-center md:mt-10">BACKGROUND CHECKS: 
              </p>
              <p className="xl:mt-2 sm:text-[13px]">
               Our Verification process helps you to take trust that you are hiring the 
               right workforce. Whether you are an employer looking to verify applicants
               before you hire or an individual looking to vet domestic staff, 
               our screening solutions
               are tailored to meet your needs.<br /> We carry out the following background checks;
              </p>
              <or 
                 className="xl:mt-5 xl:text-[30px] sm:text-center font-normal text-blue-600"
                 data-aos="fade-right"
              >
                {/* <li className="xl:mt-4">Locum (Contract hires)</li> */}
                <li>Address Verification</li>
                <li>Guarantor Verification </li>
                <li>Employment Reference Checks</li>
              </or>
             </div>

             <div>
               <img 
                 src="photo-1577962917302-cd874c4e31d2.avif"
                 className="sm:rounded-md sm:mt-8"
               />
             </div>

            
           </div>         
              <p 
                className="font-extrabold xl:text-[35px] xl:mt-40 text-blue-600 text-center">
                  HUMAN RESOURCES ADVISORY SERVICES: 
              </p>
              <p className="xl:mt-2 xl:text-center sm:m-3 sm:text-[13px]">
              Our HR Advisory Services provide expert guidance to businesses seeking to optimize their human resource functions. 
              We support organizations by offering strategic advice, ensuring compliance, 
              and implementing HR best practices to foster a productive workforce. 
              Our HR advisory solutions include:

              </p>
              <or 
                 className="xl:mt-5 xl:text-[25px] text-center font-normal  text-blue-600"
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

             
              <div className="xl:flex m-10 sm:justify-center xl:justify-around xl:mt-40">
                <div>
                  <p className="font-extrabold xl:text-[35px] xl:mt-40 text-blue-600 text-center">CV REVAMP SERVICES:</p> 
                  <p className="xl:mt-2 xl:text-center sm:text-[13px] sm:text-center"> 
                    Are you tired of applying and not getting contacted by employers, Need your cv in 24hrs, express charges applies.
                    revamp your cv now.
                  </p>
                </div>
                <div className="justify-center xl:ms-5 md:w-full md:flex md:justify-between ">
                    <Pricing 
                      state1="starter"
                      state2="Graduate tranees(Fresh Graduates)"
                      state3="8000"
                      state4="Coverage"
                      state5="7 working days"
                      state6="Custom Design templates"
                      state7="Consultation for review"              
                    />

                  <Pricing 
                      state1="Basic"
                      state2="Experienced Hires "
                      state3="17,000"
                      state4="Coverage"
                      state5="7 working days"
                      state6="Custom Design templates"
                      state7="Consultation for review" 
                      state8="Cover letter"             
                    />

                  <Pricing 
                      state1="Pro"
                      state2="Executive Hires"
                      state3="30,000"
                      state4="Coverage"
                      state5="7 working days"
                      state6="Custom Design templates"
                      state7="Consultation for review"
                      state8="Cover letter"       
                      state9="Linkedin Optimization"      
                    />
                </div>
              </div>

        </div>
    )
}