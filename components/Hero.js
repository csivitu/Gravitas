import React from 'react'
import Button from './Button'
import Lottie from "lottie-react";
import globeAnimation from "./globe.json";

function Hero() {
    return (
        <div id="Hero" className="flex h-full justify-center items-center">
            <Lottie animationData={globeAnimation} style={{ height: 623, opacity: "20%" }} />
            <div className="absolute text-center m-auto">
                <p className='font-inter text-8xl text-bold'>CSI x Gravitas '22</p>
                <p className="mt-2 text-xl">When we build, it matters</p>
                <br/>
                <Button text={"Explore Our Events"} section="LaserTag" />
            </div>
        </div>
    )
}

export const DownArroe = () => {
    return <svg width="9" height="20" viewBox="0 0 9 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.00004 1C5.00004 0.723858 4.77618 0.5 4.50004 0.5C4.2239 0.5 4.00004 0.723858 4.00004 1L5.00004 1ZM4.00004 1L4.00004 18.575L5.00004 18.575L5.00004 1L4.00004 1ZM9 13.9839C6.14823 13.9839 4 16.7774 4 20L5 20C5 17.1297 6.88121 14.9839 9 14.9839L9 13.9839ZM5 20C5 16.7774 2.85178 13.9837 3.86137e-07 13.9837L3.42426e-07 14.9837C2.11878 14.9837 4 17.1297 4 20L5 20Z" fill="white"/>
    </svg>    
}

export default Hero