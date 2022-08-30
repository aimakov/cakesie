import React from "react";
import Navbar from "../components/ Navbar";
import Intro from "../components/Intro";
import Sides from "../components/Sides";
import Staff from "../components/Staff";
import ContactUs from "../components/ContactUs";

const Main = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <Sides />
            <Staff />
            <ContactUs />
        </div>
    );
};

export default Main;
