import Image from 'next/image';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="top-0 sm:px-4 py-2.5 w-full z-50">
            <div className="mx-10 flex text-diff-gray relative justify-center sm:justify-around items-center whitespace-nowrap">
                <a href="https://csivit.com" target="_blank">
                    <Image src="/images/Logo.png" height="30" width="160" alt="CSI_logo" />
                </a>
                <div className="h-16 hidden md:flex text-2xl font-medium content-center items-center">
                    <ScrollLink to="Hero" smooth={true} duration={500} spy={true} exact="true" offset={1} className="transition ease-linear hover:text-white cursor-pointer bg-transparent my-3 mx-5 text-base font-normal text-stone-400">
                        Home
                    </ScrollLink>
                    <ScrollLink to="LaserTag" smooth={true} duration={500} spy={true} exact="true" offset={-20} className="transition ease-linear hover:text-white cursor-pointer bg-transparent my-3 mx-5 text-base font-normal text-stone-400">
                        Events
                    </ScrollLink>
                    <ScrollLink to="FAQs" smooth={true} duration={500} spy={true} exact="true" offset={-20} className="transition ease-linear hover:text-white cursor-pointer bg-transparent my-3 mx-5  text-base font-normal text-stone-400">
                        FAQ's
                    </ScrollLink>
                    <ScrollLink to="ContactUs" smooth={true} duration={500} spy={true} exact="true" offset={-20} className="transition ease-linear hover:text-white cursor-pointer bg-transparent my-3 mx-5 text-base font-normal text-stone-400">
                        Contact Us
                    </ScrollLink>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;