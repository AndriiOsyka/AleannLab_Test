import React from "react";

const Pill = ({children, style}) => {
    return(
        <div className={`max-w-220 py-4 px-6 rounded-lg font-bold text-base flex mr-2 items-center justify-center ${style}`}>
            {children}
        </div>
    )
}

export default Pill