import React from "react";

export const Button = ({ state,type }) => {
    return (
        <div>
            <button
               type={type}
               className="w-full shadow-lg bg-blue-500 rounded-lg xl:text-[14px] font-bold p-2 text-white hover:bg-white hover:text-blue-600">
                 {state}
            </button>
        </div>
    )
}