import React from "react";
import { Button } from "../../Common/Button";

export const EHeader = ( ) => {
    return (
        <div className="xl:flex justify-between">
            <img src="talentpool.png" className="xl:h-[120px] xl:w-[220px] sm:h-[80px] sm:w-[100px]"/>
            <div className="xl:m-10 sm:p-5 border-r-white border-l-white flex justify-around sm:w-full xl:w-[700px]  border border-t-blue-600 border-b-blue-600">
                <Button 
                   state="Paid Job Post"
                />
            
                <Button 
                   state="Transactions"
                />
            </div>
        </div>
    )
}