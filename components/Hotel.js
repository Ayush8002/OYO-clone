import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hotel = ({ curElem }) => {
  return (
    <div className='flex mx-3 h-72 w-full p-8 border-b-2 border-gray-200'>
      <div className='h-full w-2/3 flex gap-0.5'>
        <div className='w-full'>
          <Image src={curElem?.banner} alt="Hotel image" width={350} height={200} className='h-full w-full' />
        </div>
        <div className='grid grid-rows-4 gap-0.5 w-24' >
          {curElem?.gallery.map((curElemImg) => {
            return <div key={curElemImg}>
              <Image src={curElemImg} alt="Hotel image" width={330} height={20} className='h-full' />
            </div>
          })}

        </div>
      </div>
      <div className='h-full mx-3 flex flex-col justify-between gap-1 w-full'>
        <h3 className='text-lg font-semibold'>{curElem?.name}</h3>
        <p className='text-base'>{curElem?.description}</p>
        <div className='flex flex-col my-6 gap-2'>
          <div className='flex gap-2 text-xs '>
            <p className='bg-green-600 text-white px-1'>4.3</p>
            <p>(79 Ratings)</p>
            <p>.</p>
            <p>Very Good</p>
          </div>
          <div className='flex flex-wrap gap-8 text-sm'>
            {curElem.facilities?.map((curElem, index) => {
              return <div key={index} className='flex gap-1'>
                <Image src={curElem.img} width={30} height={20} alt='img' />
                <p>{curElem.name}</p>
              </div>
            })}
          </div>
        </div>
        <div className='flex w-full justify-between items-center'>
          <div>
            <div className='flex gap-2 justify-start items-center'>
              <p className='text-2xl font-semibold'>₹{curElem?.price}</p>
              <p className='font-normal text-gray-600'>₹2474</p>
              <p className='text-[#f5a627] font-medium'>76% off</p>
            </div>
            <p className='text-xs text-gray-600'>+ ₹98 taxes & fees · per room per night</p>
          </div>
          <div className='flex gap-2'>
            <Link href={`/hotels/${curElem?._id}`}>
              <button className='border-[1px] border-black w-32 font-semibold text-black p-2 text-center rounded-sm'>View Deatils</button>
            </Link>
            <Link href={`/payment/${curElem?._id}`}>
              <button className='bg-green-600 w-32 font-semibold text-white p-2 text-center rounded-sm'>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hotel
