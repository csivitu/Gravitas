import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

    return (
        <nav className="fixed top-0  sm:px-4 py-2.5 w-full bg-gray-dark z-50 " style={{ backgroundColor: "#16191B" }}>
            <div className="mx-10 flex text-gray-700 relative justify-center sm:justify-between items-center whitespace-nowrap">
                <ScrollLink to="Hero" smooth={true} duration={500} spy={true} exact="true" offset={0}>
                    <img src="../images/Logo.png" className="border-none self-center cursor-pointer text-4xl whitespace-nowrap font-bold flex items-center gap-2" />
                </ScrollLink>
                <div className="h-16 hidden md:flex content-center items-center">
                    <ScrollLink to="AboutDevspace" smooth={true} duration={500} spy={true} exact="true" offset={-50} className="transition ease-linear hover:text-ds-blue font-light  cursor-pointer bg-transparent my-3 mx-5 hover:underline ">
                        Home
                    </ScrollLink>
                    <ScrollLink to="Prizes" smooth={true} duration={500} spy={true} exact="true" offset={-60} className="transition ease-linear hover:text-ds-blue font-light  cursor-pointer bg-transparent my-3 mx-5 hover:underline ">
                        Event
                    </ScrollLink>
                    <ScrollLink to="Sponsors" smooth={true} duration={500} spy={true} exact="true" offset={-60} className="hover:text-ds-blue font-light transition cursor-pointer ease-linear bg-transparent my-3 mx-5 hover:underline ">
                        FAQ's
                    </ScrollLink>
                    <ScrollLink to="ContactUs" smooth={true} duration={500} spy={true} exact="true" offset={0} className="hover:text-ds-blue font-light transition cursor-pointer ease-linear bg-transparent my-3 mx-5 hover:underline ">
                        Contact Us
                    </ScrollLink>
                </div>
                <a id="mlh-trust-badge" className="block md:hidden" style={{ maxWidth: '100px', minWidth: '60px', position: 'absolute', right: '1%', top: 0, width: '10%', zIndex: 10000 }} href="https://mlh.io/seasons/2022/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white" target="_blank" rel="noreferrer">
                    <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg" alt="Major League Hacking 2022 Hackathon Season" style={{ width: '100%' }} />
                </a>

            </div>
        </nav>
    );
};

export default Navbar;