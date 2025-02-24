import React, { useState } from "react";


export const Input = ({ placeholder, type,onChange}) => {

  const [showList, setShowList] = useState(false)

    return (
        <div>   
            <input 
              className=" w-full p-5 mt-5 border border-blue-500 font-bold rounded-sm "
              type={type}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
            />  
            
          </div>        
    )
}