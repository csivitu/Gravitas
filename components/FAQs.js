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
        <div id="FAQs" className="min-h-screen py-40">
            <div className="px-40 flex flex-col gap-20">
                <div className='flex flex-col w-full items-start gap-2'>
                    <p className='font-bold'>🤔 NEED HELP</p>
                    <h1 className='font-bold font-inter text-6xl'>FAQs</h1>
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className='md:w-1/2 flex flex-col items-stretch gap-4'>
                        {FAQsData.slice(0, 4).map((e, index) => <CustomAccordion question={e.question} answer={e.answer} index={index + 1} open={open === index + 1} handleOpen={handleOpen} />)}
                    </div>
                    <div className='md:w-1/2 flex flex-col items-stretch gap-4'>
                        {FAQsData.slice(4).map((e, index) => <CustomAccordion question={e.question} answer={e.answer} index={index + 5} open={open === index + 5} handleOpen={handleOpen} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

const CustomAccordion = ({ question, answer, index, open, handleOpen }) => {
    return (<Accordion open={open} icon={<PlusIcon className={open ? "rotate-45" : "rotate-0" + " transition-transform"}/>} className="bg-gra-gray px-4 rounded-lg" >
        <AccordionHeader onClick={() => handleOpen(index)} className="text-left">
            {question}
        </AccordionHeader>
        <AccordionBody>
            {answer}
        </AccordionBody>
    </Accordion>)
}

export const FAQsData = [
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    },
    {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    },
]

export default ForkThis