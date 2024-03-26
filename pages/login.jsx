"use client";

import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react'
import { LuBadgePercent } from "react-icons/lu";
const fetchedImgSrc = "https://assets.oyoroomscdn.com/cmsMedia/b3c9905c-31d1-4349-8594-c07deae6b36d.jpg;"
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';

const login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [login, setLogin] = useState(false)

    const router = useRouter();

    const handleSignup = async () => {
        try {
            const { res } = await axios.post(`/api/user/register`, {
                name,
                email,
                password,
            });
            if (res?.data) {
                Cookies.set("user", res.data.token, { expires: 7 });
                alert(res.data.msg);
                router.back();
            }
        } catch (error) {
            alert(error.response.data.msg);
        }
    };

    const handleToggle = () => {
        setLogin(!login);
    };

    const handleLogin = async () => {
        try {
            const res = await axios.post(`/api/user/login`, {
                email,
                password,
            });
            if (res?.data) {
                Cookies.set("user", res.data.token, { expires: 7 });
                alert(res.data.msg);
                router.back();
            }
        } catch (error) {
            alert(error.response.data.msg);
        }
    };

    return (
        <div>
            <Head>
                <title>OYO-login !</title>
                <link rel="icon" href="" />
            </Head>
            <div className='relative flex justify-center items-center h-screen' style={{
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${fetchedImgSrc})`
            }}>
                <div className='absolute top-6 mx-28 left-0 font-bold flex gap-4'>
                    <Image src={"/oyo_logo_icon.png"} style={{}} alt='logo' width={80} height={40} className='text-gray-400' />
                    <p className='text-white'>Hotels and homes across 800 cities, 24+ countries</p>
                </div>
                <div className='grid grid-cols-2 gap-10 mx-40'>
                    <div className='flex flex-col gap-3 text-white'>
                        <h1 className='text-5xl font-bold'>There’s a smarter way to OYO around</h1>
                        <p className='font-semibold'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
                    </div>
                    <div className='bg-white h-full w-4/5'>
                        <div className='flex items-center px-6 py-2 gap-2 bg-gradient-to-r from-[#ed2925] to-[#d2154e] text-white'>
                            <LuBadgePercent />
                            <p className='text-sm font-semibold'>Sign up & Get ₹500 OYO Money</p>
                        </div>
                        <div className='mx-6 my-6'>
                            <h2 className='text-3xl font-bold text-gray-800 my-6'>Login / Signup</h2>
                            <p>Please enter your phone number to continue</p>
                            <div className="flex flex-col gap-4 my-5 w-full">
                                {login ? "" : (<input type="text" placeholder='Your name' className='p-3 outline-none rounded-md'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />)}

                                <input type="email" placeholder='Your email' className='p-3 outline-none rounded-md' required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                                <input type="password" placeholder='Your password' className='p-3 outline-none rounded-md'

                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                                <button className='px-12 py-3 bg-green-500 rounded-md text-white font-semibold' onClick={login ? handleLogin : handleSignup}>{login ? "Login" : "SignUp"}</button>
                            </div>
                            <div className='my-4 text-sm w-full font-semibold text-gray-800'>
                                <span className=''>Prefer to Sign in with password instead?
                                </span>
                                <span href="" className='text-red-700 cursor-pointer' onClick={handleToggle}> Click here</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
