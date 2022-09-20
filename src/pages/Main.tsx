import React, { useState } from "react";
import Navbar from "../components/ Navbar";
import Intro from "../components/Intro";
import Sides from "../components/Sides";
import Staff from "../components/Staff";
import ContactUs from "../components/ContactUs";
import Left from "../components/Left";
import { Right } from "../components/Right";

const Main = () => {
    const [left, setLeft] = useState<string | null | undefined>("-100vw");
    const [right, setRight] = useState<string | null | undefined>("100vw");

    return (
        <div className="w-screen overflow-x-hidden">
            <Navbar />
            <Intro />
            <Sides setLeft={setLeft} setRight={setRight} />
            <Left className={`w-full  absolute bg-red-500 transition-all duration-500`} style={{ left: left }} />
            <Right className={`w-full  absolute bg-blue-500 transition-all duration-500`} style={{ left: right }} />
            <Staff />
            <ContactUs />
        </div>
    );
};

export default Main;
