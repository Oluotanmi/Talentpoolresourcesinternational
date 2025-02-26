import React from "react";
import { Pricing } from "../Common/Pricing";

export const CV = () => {
    return (
        <div>
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