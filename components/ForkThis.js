import React from 'react'
import Button from './Button'

function ForkThis() {
    return (
        <div id="ForkThis" className="flex h-screen justify-center items-center">
            <div className="flex justify-around ">
                <div className="flex flex-col">
                    <div className='flex flex-col'>
                        <p className='font-bold'> EVENT 2</p>
                        <p className='my-2'>FORK THIS</p>
                    </div>
                    <div className="flex mt-16">
                        <img src="/images/Logo.png" className='w-1/4' />
                        <div className='w-3/4'>
                            <p className='font-light'>
                                A great disturbance in the force can be felt again. Is it the <br />rise of a skywalker or the rise of a phantom menace?<br />
                                Come join CSI-VIT in a battle of ForkThis lightsabers to help<br /> restore balance to the force.
                            </p>
                            <br />
                            <p className='font-medium'>
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

export default ForkThis