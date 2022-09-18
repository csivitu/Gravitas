import React from 'react'
import Button from './Button'

function ForkThis() {
    return (
        <div id="ForkThis" className="flex h-screen justify-center items-center">
            <div className="flex justify-around ">
                <div className='flex flex-col'>
                    <p className='font-bold'>🤩 EVENT 2</p>
                    <p className='my-2 font-inter font-semibold text-6xl'>FORK THIS</p>
                    <div className="flex mt-16 items-center gap-20">
                        <div className='flex flex-col items-end'>
                            <p className='font-light text-lg mb-5 text-right'>
                                A great disturbance in the force can be felt again. Is it the rise of a skywalker or the rise of a phantom menace?
                                Come join CSI-VIT in a battle of ForkThis lightsabers to help restore balance to the force.
                            </p>
                            <p className='font-medium mb-12 text-right'>
                                For there is only do or do not, there is no try.
                            </p>
                            <Button text={"Coming Soon!"} />
                        </div>
                        <img src="/images/Logo.png" className='w-1/2' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForkThis