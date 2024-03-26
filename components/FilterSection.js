"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FilterSection = ({ price,
    setPrice,
    handlePrice,
    setCheckedList,
    minValue,
    maxValue }) => {
    const [list, setList] = useState([]);

    const fetchFacilities = async () => {
        try {
            const { data } = await axios.get(`/api/facilities`);
            if (data?.facilities) {
                setList(data.facilities);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleCheckList = async (e) => {
        let newList = [];
        if (e.target.checked) {
            newList.push(e.target.value);
            setCheckedList(newList);
            return;
        }
        newList = newList.filter((i) => i !== e.target.value);
        setCheckedList(newList);
    };

    const priceChangeHandler = (e) => {
        setPrice(e.target.value)
        handlePrice()
    }

    useEffect(() => {
        fetchFacilities();
    }, []);

    return (
        <div className='col-span-2 flex flex-col gap-2 p-6 min-h-screen overflow-y-scroll'>
            <div className=''>
                <h2 className='font-semibold text-2xl text-gray-800'>Filters</h2>
                <p className='text-sm font-semibold'>Popular locations in Delhi, India</p>
                <input type="text" className='my-6 w-full h-8 outline-none text-xs p-2 text-black placeholder:text-gray-300 border-gray-500 border-[1px]' placeholder='Search..' />
            </div>
            <hr className='bg-gray-400 h-[1px]' />
            <div className='flex flex-col my-4'>
                <label className='text-sm font-semibold mb-4'>Price</label>
                <p className='text-sm font-semibold mb-4'>₹{price}</p>
                <input type="range" value={price} min={minValue} max={maxValue} onChange={priceChangeHandler} className="appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-2 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500 cursor-pointer" />
            </div>
            <hr className='bg-gray-400 h-[1px]' />
            <div className='flex flex-col'>
                <h4 className='text-sm font-semibold my-4'>Hotel Facilities</h4>
                {list?.map((curElem) => {
                    return <div className='flex items-center gap-2 h-full my-2' key={curElem.slice(0,2)}>
                        <input htmlFor="checkbox" name='checkbox' id='checkbox' type='checkbox' value={curElem} onChange={handleCheckList} />
                        <label className='text-sm'>{curElem}</label>
                    </div>
                })}
            </div>
        </div>
    )
}

export default FilterSection
