import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

function Button({ text, section }) {
    return (
        <ScrollLink to={section} smooth={true} duration={500} spy={true} exact="true" offset={-25} className="py-4 px-6 font-inter font-semibold  bg-transparent focus:outline-none text-white rounded-full border-2 border-gray-300 hover:bg-white hover:text-black z-auto focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-linear cursor-pointer">
            {text}
        </ScrollLink>
    )
}

export default Button