import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

function Button({ text, section }) {
    return (
        <ScrollLink to={section} smooth={true} duration={500} spy={true} exact="true" offset={-25} className="py-4 px-6 font-inter font-semibold  bg-transparent focus:outline-none text-white rounded-full border-2 border-gray-200 hover:bg-white hover:text-black z-auto focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-linear cursor-pointer">
            {text}
        </ScrollLink>
        // <div style={{ borderRadius: "48px" }}>
        //     <ScrollLink to="Events" smooth={true} duration={500} spy={true} exact="true" offset={-50} className="transition ease-linear  font-light  cursor-pointer bg-transparent my-3 mx-5 hover:underline border-2 outline-8 outline-white border-white outline outline-offset-2 ">
        //         Testing
        //     </ScrollLink>
        // </div>
    )
}

export default Button