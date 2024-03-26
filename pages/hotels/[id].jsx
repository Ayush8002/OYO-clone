"use client";
import Image from 'next/image'
import TopHeader from '../../components/TopHeader'
import Head from "next/head";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleHotel = ({ hotel }) => {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const cookie = Cookies.get("user");
        if (cookie) {
            setAuth(true);
            return;
        }
        setAuth(false);
    }, []);

    return (
        <>
            <Head>
                <title>
                    {hotel.name}
                </title>
            </Head>
            <TopHeader />
            <div className='mx-60 mb-10'>
                <Image src={hotel?.banner} alt="Hotel image" width={450} height={200} className='h-96 w-full' />
                <div className='flex my-4 justify-between'>
                    <div>
                        <h3 className='text-3xl font-bold'>{hotel?.name}</h3>
                        <p className="text-gray-400">{hotel?.description}</p>
                    </div>
                    <div className='bg-gray-100 rounded-sm'>
                        <p className='bg-[#58ac00] py-1 text-center font-semibold text-white text-2xl rounded-sm'>4.3</p>
                        <p className='px-1 text-xs py-1'>81 ratings</p>
                    </div>
                </div>
                <div>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum sed! Iusto, incidunt, sequi numquam commodi voluptatum provident iure labore optio voluptas excepturi vel cumque! Officia libero pariatur voluptate tempore quam consequuntur laborum maxime.
                </div>
                <div className='my-8'>
                    <h2 className='text-xl font-semibold my-3'>Amenities</h2>
                    <div className='grid grid-cols-3 gap-3 font-normal text-sm'>
                        {hotel?.facilities.map((curElem) => {
                            return <div className='flex items-center gap-2'>
                                <Image src={curElem.img} height={15} width={30} />
                                <p> {curElem.name} </p>
                            </div>
                        })}
                    </div>
                </div>
                <div className='flex flex-col justify-between items-start gap-4'>
                    <p className='text-xl font-semibold'>₹{hotel?.price}/-</p>
                    {auth ? (
                        <Link href={`/payment/${hotel?._id}`}>
                            <button className='bg-[#58ac00] hover:bg-green-600 w-44 font-semibold text-white py-3 text-center rounded-sm text-lg'>Book Now</button>
                        </Link>
                    ) : (
                        <span className=" text-base">
                            Please{" "}
                            <Link href={"/login"} className=" text-red-500">
                                Log in
                            </Link>{" "}
                            to get new Offers !
                        </span>
                    )}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
    const data = await res.json();

    return {
        props: {
            hotel: data.hotel,
        },
    };
}


export default SingleHotel
