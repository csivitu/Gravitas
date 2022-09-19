import React, { useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { PlusIcon } from './Icons';

function ForkThis() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div id="FAQs" className="min-h-screen px-6 md:px-20 lg:px-40 py-40">
            <div className="flex flex-col gap-20">
                <div className='flex flex-col w-full items-start gap-2'>
                    <p className='font-bold'>🤔 NEED HELP</p>
                    <h1 className='font-medium font-inter text-5xl md:text-6xl'>FAQs</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-10 md:gap-4'>
                    <div className='md:w-1/2 flex flex-col items-stretch gap-4'>
                        <h2 className='text-xl md:text-2xl font-inter font-bold ml-2'>Laser Tag</h2>
                        {FAQsLaserData.map((e, index) => <CustomAccordion question={e.question} answer={e.answer} index={index + 1} open={open === index + 1} handleOpen={handleOpen} key={index} />)}
                    </div>
                    <div className='md:w-1/2 flex flex-col items-stretch gap-4'>
                        <h2 className='text-xl md:text-2xl font-inter font-bold ml-2'>Forkthis</h2>
                        {FAQsForkData.map((e, index) => <CustomAccordion question={e.question} answer={e.answer} index={index + FAQsLaserData.length + 1} open={open === index + FAQsLaserData.length + 1} handleOpen={handleOpen} key={index} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const CustomAccordion = ({ question, answer, index, open, handleOpen }) => {
    return (<Accordion open={open} icon={<PlusIcon className={open ? "rotate-45" : "rotate-0" + " transition-transform"} />} className="bg-gra-gray px-4 rounded-lg" >
        <AccordionHeader onClick={() => handleOpen(index)} className="text-base md:text-xl text-left flex justify-between">
            {question}
        </AccordionHeader>
        <AccordionBody>
            {answer}
        </AccordionBody>
    </Accordion>)
}

export const FAQsLaserData = [
    {
        question: "Where do we register and what’s the fee?",
        answer: "You can register and pay online through VTOP.",
    },
    {
        question: "How long is the event?",
        answer: "Laser Tag will be open for 3 days from 8am till 4pm.",
    },
    {
        question: "Are there any prizes?",
        answer: "Apart from fame? Keep an eye on our socials!",
    },
    {
        question: "Can the other person get hurt?",
        answer: "Yes, emotionally.",
    },
]

export const FAQsForkData = [
    {
        question: "When is ForkThis?",
        answer: "ForkThis will start on the 30th of September and last for 3 days.",
    },
    {
        question: "Are there any prerequisites for ForkThis?",
        answer: "You need a Github account.",
    },
    {
        question: "I don't know the first thing about tech, can I still participate?",
        answer: "Yes! ForkThis is the perfect opportunity for you to learn and explore tech.",
    },
    {
        question: "Do the winners get recruited directly to CSI?",
        answer: "No, but yes.",
    },
]

export default ForkThis