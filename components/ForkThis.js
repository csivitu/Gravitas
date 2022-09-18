import React from 'react'
import Button from './Button'

import Lottie from "lottie-react";
import globeAnimation from "../public/images/forkThis.json";

function ForkThis() {
    return (
        <div id="LaserTag" className="flex h-screen justify-center items-center">
            <div className="flex justify-around px-40">
                <div className="flex flex-col">
                    <div className='flex flex-col items-end justify-end'>
                        <p className='font-bold mr-2'>🤩 EVENT 2</p>
                        <p className='font-inter text-6xl'>Forkthis</p>
                    </div>
                    <div className="flex mt-16 items-center gap-20">
                        
                        <div className='flex flex-col items-end w-1/2'>
                            <p className='font-light text-lg mb-5 text-right'>
                                CSI-VIT presents ForkThis, a workshop where you learn and contribute to the world of open-source with zero prerequisites. Resolve issues and eliminate errors to win exciting prizes. Collaborate with developers, learn new skills, and take Hacktoberfest by storm!
                            </p>
                            <p className='font-medium mb-12'>
                                For there is only do or do not, there is no try.
                            </p>
                            <br />
                            <Button text={"Coming Soon!"} />
                        </div>
                        <div className='w-1/2'>
                            <Lottie animationData={globeAnimation} style={{height: "100%"}} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForkThis