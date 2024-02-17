import React from 'react'
import { PiSuitcaseSimpleThin } from "react-icons/pi";

const BlockHeader1 = ({ icon, heading, description }) => {
    return (
        <div className='flex justify-between items-center gap-3 px-4 border-l-[1.2px] h-full'>
            <div className='text-3xl'>{icon}</div>
            <div>
                <h3 className='text-sm font-semibold'>{heading}</h3>
                <p className='text-[10px] text-slate-600'>{description}</p>
            </div>
        </div>
    )
}

export default BlockHeader1
