import React from 'react'
import Button from './Button'

function LaserTag() {
    return (
        <div id="LaserTag" className="flex h-screen justify-center items-center">
            <div className="flex justify-around ">
                <div className="flex flex-col">
                    <div className='flex flex-col w-full'>
                        <p className='font-bold'>EVENT 1</p>
                        <img src="images/lasertagLogo.svg" className='h-16'/>
                    </div>
                    <div className="flex mt-16">
                        <img src="/images/Logo.png" className='w-1/4' />
                        <div className='w-3/4'>
                            <p className='font-light'>
                                A great disturbance in the force can be felt again. Is it the <br />rise of a skywalker or the rise of a phantom menace?<br />
                                Come join CSI-VIT in a battle of lasertag lightsabers to help<br /> restore balance to the force.
                            </p>
                            <br />
                            <p className='font-medium'>
                                For there is only do or do not, there is no try.
                            </p>
                            <button className="py-4 px-6 font-inter font-semibold  bg-transparent focus:outline-none text-white rounded-full border-2 border-gray-200 hover:bg-white hover:text-black z-auto focus:z-10 focus:ring-4 focus:ring-gray-200 transition ease-linear cursor-pointer">
                                Coming Soon!
                            </button>
                            <Button text={"Coming Soon!"}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LaserTag