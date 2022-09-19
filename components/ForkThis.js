import React from 'react'
import Button from './Button'

import Lottie from "lottie-react";
import forkThisAnimation from "../lottie/forkThis.json";

function ForkThis() {
    return (
        <div id="ForkThis" className="flex min-h-screen justify-center items-center px-6 md:px-40 mb-10">
            <div className="flex justify-around ">
                <div className="flex flex-col gap-10">
                    <div className='flex flex-col w-full md:items-end'>
                        <p className='font-bold text-base md:text-xl pr-2'>🤩 EVENT 2</p>
                        <p className="font-semibold font-inter text-4xl md:text-7xl mt-2 tracking-wide">Forkthis</p>
                    </div>
                    <div className="flex md:flex-row flex-col-reverse md:items-center gap-20">
                        <div className='w-1/2 flex flex-col items-end md:text-xl'>
                            <p className='font-light mb-14 text-right'>
                                CSI-VIT presents ForkThis, a workshop where you learn and contribute to the world of open-source with zero prerequisites. Resolve issues, eliminate errors, and stand a chance to win exciting prizes. Collaborate with developers, learn new skills, and take Hacktoberfest by storm!
                            </p>
                            <Button text={"Coming Soon!"} />
                        </div>
                        <Lottie animationData={forkThisAnimation} style={{ width: "50%" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForkThis