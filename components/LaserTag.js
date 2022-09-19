import React from 'react'
import Button from './Button'

import Lottie from "lottie-react";
import Image from 'next/image';
import laserTagAnimation from '../lottie/laserTag.json'

function LaserTag() {
    return (
        <div id="LaserTag" className="flex min-h-screen py-20 justify-center items-center px-6 md:px-20 lg:px-40">
            <div className="flex flex-col gap-10">
                <div className='flex flex-col w-full items-start'>
                    <p className='font-bold text-base md:text-xl'>🤩 EVENT 1</p>
                    <Image src="/images/lasertagLogo.svg" height="96px" width="420px" />
                </div>
                <div className="flex items-center gap-20 mb-10">
                    <div className="flex flex-col md:flex-row items-center gap-5 md:gap-20 mb-10">
                        <Lottie animationData={laserTagAnimation} className="w-full sm:w-3/5 md:w-1/2" />
                        <div className='md:w-1/2 flex flex-col items-start md:text-xl'>
                            <p className='font-light mb-5'>
                            Whether you're a master marskman or your aim is as sloppy as a stormtrooper, you're definitely gonna have fun here. CSI-VIT presents LaserTag, an incredible experience with fun for you and all your friends.
                            </p>
                            <p className='font-medium mb-16 '>
                                For there is only do or do not, there is no try.
                            </p>
                            <Button text={"Coming Soon!"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LaserTag