import React from "react";

export const ScalerButton = ({ state }) => {
    return (
        <div>
            <button className="w-[150px] bg-white shadow-lg text-blue-600 rounded-lg xl:text-[14px] font-bold p-2 hover:bg-blue-600 hover:text-white">
                 {state}
            </button>
        </div>
    )
}