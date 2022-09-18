import React from 'react'
import Button from './Button'

import Lottie from "lottie-react";
import globeAnimation from "../public/images/laserTag.json";

function ForkThis() {
    return (
        <div id="FAQs" className="h-screen">
            <div className="px-40">
                <div className='flex flex-col w-full items-start'>
                    <p className='font-bold'>🤔 NEED HELP</p>
                    <br />
                </div>
                <div className="grid grid-cols-[1fr_1fr] gap-20">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header mb-0 bg-red-900" id="headingOne">
                                <button class="
                                    accordion-button
                                    items-center
                                    py-4
                                    px-5
                                    transition
                                    focus:outline-none"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4 px-5">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default,
                                    until the collapse plugin adds the appropriate classes that we use to style each
                                    element. These classes control the overall appearance, as well as the showing and
                                    hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                                    our default variables. It's also worth noting that just about any HTML can go within
                                    the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForkThis