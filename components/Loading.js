import React from 'react'

const Loading = () => {
    return (
        <div className="absolute h-screen w-screen top-0 bg-ds-gray flex justify-center items-center" style={{zIndex:"9999"}}>
            <div className="sk-chase ">`
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div>
    )
}

export default Loading