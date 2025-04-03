import React, { useState } from "react";
import Logo from "../assets/logojelly.png";
export const BlackBox = () => {
    const [clicked, setClicked] = useState(false);

    const handleClickOnBox = () => {
        setClicked((prev) => !prev);
    };
    return (
        <div
            onClick={handleClickOnBox}
            className={`flex rounded-md w-40 h-40
                justify-center items-center bg-black 
                ${
                    clicked ? "scale-[6]" : "hover:scale-x-115"
                } transition-scale duration-200 transition-transform duration-200 ease-in-out cursor-pointer`}
        >
            <img src={Logo} alt="Logo Jelly" className="w-[85%]" />
        </div>
    );
};
