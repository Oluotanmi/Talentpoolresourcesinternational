import React from "react";
import { SideTab } from "../../Common/SideTab";
import { Input } from "../../Common/Input";
import { EHeader } from "./EHeader";

export const EmployersPage = ({ state,type }) => {
    return (
        <div>
            <EHeader />
            
             <div className="xl:flex">
               
                <SideTab />
                
                <div className="xl:ms-[100px]">
                    <p className="text-[30px] sm:text-center sm:mt-10 font-bold">Create Company Profile</p>  
                    <p className="text-sm text-blue-300 text-center sm:m-5">This information will not be published on your job posts
                         and will not be seen by website visitors</p>  
                     <div className="border border-b-slate-200 w-full xl:mt-7"></div>
                    
                    <div className="xl:ms-[100px] xl:mt-10 xl:flex justify-between xl:w-[1000px]">
                        <div className="sm:m-5 xl:w-[500px] xl:mt-10">
                            <div>
                                <p className="xl:ms-[20px] font-bold">Company Name</p>
                                <Input
                                placeholder="ABC Limited"
                                />
                            </div>
                            
                            <div>
                                <p  className="xl:ms-[20px] font-bold sm:mt-5">Position Title</p>
                                <Input 
                                
                                />
                            </div>

                            <div>
                                <p  className="xl:ms-[20px] font-bold  sm:mt-5">Job Field</p>
                                <Input />
                            </div>
                        </div>

                        <div className="sm:m-5 xl:w-[500px]">
                            <div>
                                <p className="xl:ms-[20px] font-bold  sm:mt-5">Qualification</p>
                                <Input
                                placeholder="ABC Limited"
                                />
                            </div>
                            
                            <div>
                                <p  className="xl:ms-[20px] font-bold  sm:mt-5">Employment Type</p>
                                <Input 
                                
                                />
                            </div>

                            <div>
                                <p  className="xl:ms-[20px] font-bold  sm:mt-5">Company Job Field</p>
                                <Input />
                            </div> 
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}