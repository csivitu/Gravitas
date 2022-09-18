import React from 'react'
import Button from './Button'

import Lottie from "lottie-react";
import forkThisAnimation from "./forkThis.json";

function ForkThis() {
    return (
        <div id="LaserTag" className="flex h-screen justify-center items-center ">
            <div className="flex justify-around px-40">
                <div className="flex flex-col">
                    <div className='flex flex-col w-full items-end'>
                        <p className='font-bold text-2xl'>🤩 EVENT 2</p>
                        <p className="font-bold font-inter text-5xl">FORKTHIS</p>
                        {/* <img src="images/lasertagLogo.svg" className='h-16' /> */}
                    </div>
                    <div className="flex items-center gap-20">
                        <div className='flex flex-col items-start text-xl'>
                            <p className='font-light text-lg mb-5'>
                                CSI-VIT presents ForkThis, a workshop where you learn and contribute to the world of open-source with zero prerequisites. Resolve issues and eliminate errors to win exciting prizes. Collaborate with developers, learn new skills, and take Hacktoberfest by storm!
                            </p>
                            <p className='font-medium mb-12'>
                                For there is only do or do not, there is no try.
                            </p>
                            <br />
                            <Button text={"Coming Soon!"} />
                        </div>
                        <Lottie animationData={forkThisAnimation} style={{ width: "100%" }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForkThis