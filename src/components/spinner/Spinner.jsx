import React from "react";
import '../.././assets/main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Spinner = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <FontAwesomeIcon className="animate-spin h-20 w-20 text-green-400"  icon="fa-solid fa-circle-notch" />
        </div>
    )
}

export default Spinner