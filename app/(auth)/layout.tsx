import React from "react";

export default function ( {children}:
    {
        children: React.ReactNode
    }
) {
   return (
    <>
        <div className="p-1 text-center border-b"> 28% off for next few days </div>
        {children}
    </>
   )
   
}
