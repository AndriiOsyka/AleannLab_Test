import React from "react";

const Btn = ({children, style, onclick}) => {
    return(
        <button onClick={onclick} className={style}>
            {children}
        </button>
    )
}

export default Btn