import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { MdOutlineLocationSearching } from "react-icons/md";
const fetchedImgSrc = "https://assets.oyoroomscdn.com/cmsMedia/115d178d-ef59-4212-a6ed-953eb4ce8241.jpg"

const Header3 = () => {
    const router = useRouter()
    const [city, setCity] = useState("")

    const searchEnterHandler = (event) => {
        if (event.key === 'Enter') {
            router.push(`/hotels?city=${city}`)
        }
    }

    return (
        <div className='h-60 flex flex-col justify-center items-center gap-4'
            style={{ backgroundImage: `url(${fetchedImgSrc})` }}>
            <h2 className='text-3xl font-bold text-white px-28'>Over 174,000+ hotels and homes across 35+ countries</h2>
            <div className='w-[75%] bg-white mx-10 rounded-sm'>
                <div className='h-full flex justify-between'>
                    <div className='h-full flex justify-between items-center w-full'>
                        <input type="text" className='h-8 w-full outline-none px-4 placeholder-white focus:placeholder-gray-600'
                            value={city} placeholder='search' onChange={(e) => setCity(e.target.value)} onKeyDown={searchEnterHandler}/>
                        <div className='bg-gray-100 px-1 py-1 m-4 rounded-full text-sm flex justify-center items-center gap-1 cursor-pointer min-w-28'>
                            <MdOutlineLocationSearching className='text-base' />
                            <button className='text-sm font-medium'>Near me</button>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className='h-full min-w-64 flex items-center justify-center border-x-[1.5px] px-5'>
                            <p>Thu, 15 Feb - Fri, 16 Feb</p>
                        </div>
                        <div className='h-full min-w-64 flex items-center justify-center px-5'>
                            <p>Thu, 15 Feb - Fri, 16 Feb</p>
                        </div>
                        <Link href={`/hotels?city=${city}`} className='w-36'>
                            <button className='bg-green-600 w-full h-full font-semibold text-white rounded-sm'>
                                Search
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-[75%] text-white flex items-center gap-4'>
                <p className='text-base'>Continue for search</p>
                <button className='p-2 border-2 rounded-md text-sm font-semibold'>Bangalore 15 Feb - 16 Feb | Guests</button>
            </div>
        </div>
    )
}

export default Header3
