import React, { useEffect, useState } from 'react'
import { MdOutlineLocationSearching } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import { PiUserCircle } from 'react-icons/pi'
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const TopHeader = ({ show = false }) => {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const key = Cookies.get("user");
        if (key) {
            setAuth(true);
            return;
        }
        setAuth(false);
    }, [auth]);

    const router = useRouter();

    const handleLogout = () => {
        Cookies.remove("user");
        setAuth(false);
        router.push("/");
    };

    return (
        <div className={`${show && "translate-y-[-60px]"} `}
        >
            <div className='px-8 w-full bg-white flex justify-between items-center'>
                <Link href={"/"} className=''>
                    <Image src={"/oyo_logo_icon.png"} alt='logo' width={80} height={40} />
                </Link>
                <div className='w-[75%] bg-white mx-10 my-2 rounded-sm border-[1px]'>
                    <div className='h-full flex justify-between'>
                        <div className='h-full flex justify-between items-center w-full'>
                            <input type="text" className='h-8 w-full outline-none px-4 placeholder-white focus:placeholder-gray-600' placeholder='search' />
                            <div className='bg-gray-100 px-1 m-4 rounded-full text-sm flex justify-center items-center gap-1 cursor-pointer min-w-28'>
                                <MdOutlineLocationSearching className='text-base' />
                                <button className='text-sm font-medium'>Near me</button>
                            </div>
                        </div>
                        <div className='flex '>
                            <div className='h-full min-w-64 flex items-center justify-center border-x-[1.5px] px-4'>
                                <p>Thu, 15 Feb - Fri, 16 Feb</p>
                            </div>
                            <div className='h-full min-w-64 flex items-center justify-center px-4'>
                                <p>Thu, 15 Feb - Fri, 16 Feb</p>
                            </div>
                            <Link href={"./hotels"} className='w-36'>
                                <button className='bg-green-600 w-full h-full font-semibold text-white rounded-sm'>
                                    Search
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full border-r-[1px] px-4'>
                    <BsGlobe2 className='text-2xl text-slate-800' />
                </div>
                {auth ? (<div className='p-4 flex items-center gap-2 hover:bg-gray-200 h-full' onClick={handleLogout}>
                    <PiUserCircle className='text-2xl' />
                    <div className='text-sm font-semibold'>Logout</div>
                </div>) : (<div className='p-4 flex items-center gap-2 hover:bg-gray-200 h-full'>
                    <PiUserCircle className='text-2xl' />
                    <Link href={"/login"} className='text-sm font-semibold'>Login/SignUp</Link>
                </div>)}
            </div>
        </div>
    )
}

export default TopHeader
