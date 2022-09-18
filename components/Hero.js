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

export default Hero