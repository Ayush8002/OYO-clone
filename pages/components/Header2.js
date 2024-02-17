import React from 'react'
import Wrapper from '../layouts/Wrapper'
import { headerCities } from '../data/data'
import { VscChevronDown } from "react-icons/vsc";

const Header2 = () => {
    return (
        <div className='bg-gray-100 h-10'>
            <Wrapper>
                <div className='flex items-center gap-6 h-10'>
                    {headerCities.map(({ name }) => {
                        return <div className='hover:bg-white cursor-pointer h-full flex justify-center items-center group' key={name}>
                            <div className='flex justify-center items-center text-sm px-4 gap-1'>
                                <p className='text-sm text-gray-700'>{name} </p>
                                <VscChevronDown className='text-base group-hover:rotate-180 transition-all duration-300' />
                            </div>
                        </div>
                    })}
                </div>
            </Wrapper>
        </div>
    )
}

export default Header2
