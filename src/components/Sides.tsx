import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Left from "./Left";

interface Props {
    setLeft: React.Dispatch<React.SetStateAction<string | null | undefined>>;
    setRight: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

const Sides: React.FC<Props> = (props) => {
    const handleLeftClicked = () => {
        props.setLeft("0");
        props.setRight("100vw");
    };

    const handleRightClicked = () => {
        props.setLeft("-100vw");
        props.setRight("0");
    };

    useEffect(() => {
        console.log("Rendered");
    }, []);

    return (
        <div className="flex flex-col w-screen overflow-x-hidden py-10">
            <div className="relative w-full h-full flex justify-evenly">
                <div className="w-32 h-32 bg-cover bg-[url('/public/assets/sides/create.jpeg')] rounded-xl">
                    <div onClick={handleLeftClicked} className="w-full h-full bg-red-700/50 rounded-xl flex justify-center items-center">
                        <span className="text-xl font-bold text-white ">CREATE</span>
                    </div>
                </div>
                <div className="w-32 h-32 bg-cover bg-[url('/public/assets/sides/select.jpeg')] rounded-xl">
                    <div onClick={handleRightClicked} className="w-full h-full bg-blue-700/50 rounded-xl flex justify-center items-center">
                        <span className="text-xl font-bold text-white ">SELECT</span>
                    </div>
                </div>{" "}
            </div>
        </div>
    );
};

export default Sides;
