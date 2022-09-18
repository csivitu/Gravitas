import React from 'react'
import Button from './Button'

import Lottie from "lottie-react";
import globeAnimation from "../public/images/laserTag.json";

function ForkThis() {
    return (
        <div id="LaserTag" className="flex h-screen justify-center items-center">
            <div className="flex justify-around px-40">
                <div className="flex flex-col">
                    <div className='flex flex-col w-full items-start'>
                        <p className='font-bold'>🤩 EVENT 1</p>
                        <img src="images/lasertagLogo.svg" className='h-16'/>
                    </div>
                    <div className="flex mt-16 items-center gap-20">
                    <Lottie animationData={globeAnimation} style={{ height: 800 }} />
                        <div className='flex flex-col items-start'>
                            <p className='font-light text-lg mb-5'>
                                A great disturbance in the force can be felt again. Is it the rise of a skywalker or the rise of a phantom menace?
                                Come join CSI-VIT in a battle of lasertag lightsabers to help restore balance to the force.
                            </p>
                            <p className='font-medium mb-12'>
                                For there is only do or do not, there is no try.
                            </p>
                            <br/>
                            <Button text={"Coming Soon!"}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForkThis