import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

const Intro = () => {
    return (
        <div className="flex flex-col w-full h-[60vh] flex-grow justify-around items-center bg-orange-400">
            <div className="flex flex-col justify-center items-center gap-10">
                <div>
                    <h2 className="w-full text-center text-[2rem] text-white font-semibold">You create a cake</h2>
                    <h3 className="w-full text-center text-[1.5rem] font-semibold">We make it real</h3>
                </div>

                <button className=" w-fit py-2 px-4 bg-white rounded-xl shadow-xl">Get Started</button>
            </div>

            <BsChevronCompactDown className="text-[2rem]" />
        </div>
    );
};

export default Intro;
