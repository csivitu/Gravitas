import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

function Button({ text, section }) {
    return (
        section ?
            <ScrollLink to={section} smooth={true} duration={500} spy={true} exact="true" offset={-25}>
                <div className="text-base sm:text-lg py-4 px-6 md:text-xl font-semibold  bg-transparent focus:outline-none text-white rounded-full border-2 border-gray-500 hover:border-white hover:bg-white hover:text-black z-auto focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-linear cursor-pointer">{text}</div>
            </ScrollLink> :
            <a href="https://events.vit.ac.in/events/gravitas2022/" target="_blank">
                <div className="text-base sm:text-lg py-4 px-6 md:text-xl font-semibold  bg-transparent focus:outline-none text-white rounded-full border-2 border-gray-500 hover:border-white hover:bg-white hover:text-black z-auto focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-linear cursor-pointer">{text}</div>
            </a>
    )
}

export default Button