import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Lottie from "lottie-react";
import globeAnimation from "../public/images/laserTag.json";

const Navbar = () => {
    return (
        <nav className="top-0 sm:px-4 py-2.5 w-full z-50">
            <div className="mx-10 flex text-gray-200 relative justify-center sm:justify-around items-center whitespace-nowrap">
                <ScrollLink to="Hero" smooth={true} duration={500} spy={true} exact="true" offset={-20}>
                    <img src="../images/Logo.png" className="border-none self-center cursor-pointer whitespace-nowrap font-bold flex items-center gap-2 h-6" />
                </ScrollLink>
                <div className="h-16 hidden md:flex content-center items-center">
                    <ScrollLink to="Home" smooth={true} duration={500} spy={true} exact="true" offset={-20} className="transition ease-linear hover:text-ds-blue font-light  cursor-pointer bg-transparent my-3 mx-5 hover:underline ">
                        Home
                    </ScrollLink>
                    <ScrollLink to="LaserTag" smooth={true} duration={500} spy={true} exact="true" offset={-20} className="transition ease-linear hover:text-ds-blue font-light  cursor-pointer bg-transparent my-3 mx-5 hover:underline ">
                        Events
                    </ScrollLink>
                    <ScrollLink to="FAQs" smooth={true} duration={500} spy={true} exact="true" offset={-20} className="hover:text-ds-blue font-light transition cursor-pointer ease-linear bg-transparent my-3 mx-5 hover:underline ">
                        FAQ's
                    </ScrollLink>
                    <ScrollLink to="ContactUs" smooth={true} duration={500} spy={true} exact="true" offset={-20} className="hover:text-ds-blue font-light transition cursor-pointer ease-linear bg-transparent my-3 mx-5 hover:underline ">
                        Contact Us
                    </ScrollLink>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;