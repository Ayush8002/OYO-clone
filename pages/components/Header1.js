import Wrapper from '@/pages/layouts/Wrapper'
import Image from 'next/image'
import React from 'react'
import BlockHeader1 from './BlockHeader1'
import { header1 } from '../data/data'
import { BsGlobe2 } from "react-icons/bs";
import { PiUserCircle } from 'react-icons/pi'

const Header1 = () => {
    return (
        <div className='border-b-2'>
            <Wrapper>
                <div className='flex justify-between items-center h-16'>
                    <Image src={"/oyo_logo_icon.png"} alt='logo' width={80} height={40} />
                    <div className='flex h-16'>
                        {header1.map(({ icon, heading, description }) => {
                            return <BlockHeader1 key={heading} icon={icon} heading={heading} description={description} />
                        })}
                        <div className='flex justify-center items-center h-full border-x-[1px] gap-1 px-6'>
                            <BsGlobe2 className='text-2xl text-slate-800' />
                            <h2 className='text-sm font-semibold'>English</h2>
                        </div>
                        <div className='px-4 flex items-center gap-2 hover:bg-gray-200'>
                            <PiUserCircle className='text-2xl' />
                            <button className='text-sm font-semibold'>Login/Signup</button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Header1
