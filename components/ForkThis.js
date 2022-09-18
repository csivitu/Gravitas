import React from 'react'
import Button from './Button'

import Lottie from "lottie-react";
import forkThisAnimation from "../lottie/forkThis.json";

function ForkThis() {
    return (
        <div id="ForkThis" className="flex h-full justify-center items-center px-6 md:px-40 mb-10">
            <div className="flex justify-around ">
                <div className="flex flex-col">
                    <div className='flex flex-col w-full md:items-end'>
                        <p className='font-bold text-lg md:text-2xl'>🤩 EVENT 2</p>
                        <p className="font-bold font-inter text-4xl md:text-6xl mt-2">FORKTHIS</p>
                    </div>
                    <div className="flex md:flex-row flex-col-reverse md:items-center gap-20">
                        <div className='flex flex-col items-start md:text-xl'>
                            <p className='font-light mb-5'>
                                CSI-VIT presents ForkThis, a workshop where you learn and contribute to the world of open-source with zero prerequisites. Resolve issues, eliminate errors, and stand a chance to win exciting prizes. Collaborate with developers, learn new skills, and take Hacktoberfest by storm!
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