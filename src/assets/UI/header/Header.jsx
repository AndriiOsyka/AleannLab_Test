import React from "react";

const Header = ({children}) => {
    return (
        <h1 className="border-b-2 py-2.5 w-full font-bold text-3xl text-grey-title mb-6">{children}</h1>
    )
}

export default Header