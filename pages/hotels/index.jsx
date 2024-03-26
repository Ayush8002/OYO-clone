import React, { useEffect, useState } from 'react'
import Hotel from '../../components/Hotel'
import TopHeader from '../../components/TopHeader'
import FilterSection from '@/components/FilterSection'
import axios from 'axios'

const Hotels = ({ hotels }) => {

    const value = hotels.map((curElem) => {
        return curElem.price
    })

    const minValue = Math.min(...value)
    const maxValue = 1000

    const [price, setPrice] = useState(minValue);
    const [list, setList] = useState([]);
    const [checkedList, setCheckedList] = useState([]);

    const handleCheckList = async () => {
        const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
        if (data?.hotels) {
            setList(data.hotels);
        }
    };

    useEffect(() => {
        if (checkedList) {
            handleCheckList();
        }
    }, [checkedList])

    const handlePrice = async () => {
        const { data } = await axios.get(`/api/facilities/range?price=${price}`);
        if (data?.hotels) {
            setList(data.hotels);
        }
    };
    useEffect(() => {
        handlePrice()
    }, [price])
    return (
        <div>
            <TopHeader />
            <div className='grid grid-cols-10 h-screen'>
                <FilterSection price={price} setPrice={setPrice} list={list} setList={setList} handlePrice={handlePrice} minValue={minValue} maxValue={maxValue} setCheckedList={setCheckedList} />
                <div className='flex flex-col col-span-8 w-full overflow-y-scroll no-scrollbar border-l-[1px] border-gray-300'>
                    {list?.length > 0 ? list?.map((curElem) => {
                        return (
                            <div key={curElem?._id} className='w-full'>
                                <Hotel curElem={curElem} />
                            </div>
                        );
                    }) : hotels?.map((curElem) => {
                        return (
                            <div key={curElem?.id} className='w-full'>
                                <Hotel curElem={curElem} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(
        `${process.env.BASE_URL}/api/hotels?city=${ctx.query.city}`
    );
    const data = await res.json();
    return {
        props: {
            hotels: data.hotels ? data.hotels : data.allhotels,
        },
    };
}

export default Hotels
