import React from 'react'
import Wrapper from '../layouts/Wrapper'
import Image from 'next/image'

const Header5 = () => {
    return (
        <div>
            <Wrapper>
                <div className='flex justify-between items-center border-[1px] border-gray-300 rounded-md h-24 px-6 my-10'>
                    <div className='flex gap-6'>
                        <Image
                            src={"/Fireicon03.svg.png"}
                            width={20}
                            height={20}
                            className='bg-orange-200 w-12 h-12 p-2 rounded-full'
                        />
                        <div className=''>
                            <h4 className='text-lg font-semibold'>Get access to exclusive deals</h4>
                            <p className='text-sm text-gray-600'>Only the best deals reach your inbox</p>
                        </div>
                    </div>
                    <div className='relative flex gap-6'>
                        <input type="email" className='border-[1px] outline-none p-2 rounded-md w-72' placeholder='e.g. john@gmail.com' />
                        <label
                            className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[12px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Your Email
                        </label>
                        <button className='h-12 w-32 bg-[#ee2a24] text-white rounded-md text-sm font-medium'>Notify me</button>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Header5
