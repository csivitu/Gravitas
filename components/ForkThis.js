import React from 'react'
import Button from './Button'

import Lottie from "lottie-react";
import forkThisAnimation from "../lottie/forkThis.json";

function ForkThis() {
    return (
        <div id="ForkThis" className="flex min-h-screen justify-center items-center px-6 md:px-20 lg:px-40 py-20">
            <div className="flex justify-around ">
                <div className="flex flex-col gap-10">
                    <div className='flex flex-col w-full md:items-end'>
                        <p className='font-bold text-base md:text-xl pr-2'>🤩 EVENT 2</p>
                        <p className="font-semibold font-inter text-5xl md:text-7xl mt-2 tracking-wide">ForkThis</p>
                    </div>
                    <div className="flex md:flex-row flex-col-reverse md:items-center gap-5 md:gap-20">
                        <div className='md:w-1/2 flex flex-col items-start md:items-end md:text-xl'>
                            <p className='font-light mb-14 md:text-right'>
                                CSI-VIT presents ForkThis, a workshop where you learn and contribute to the world of open-source with zero prerequisites. Resolve issues, eliminate errors, and stand a chance to win exciting prizes. Collaborate with developers, learn new skills, and take Hacktoberfest by storm!
                            </p>
                            <Button text={"Coming Soon!"} />
                        </div>
                        <Lottie animationData={forkThisAnimation} className="w-full sm:w-3/5 md:w-1/2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForkThis