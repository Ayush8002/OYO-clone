import React from 'react'
import Image from 'next/image'
import Wrapper from '../pages/layouts/Wrapper.jsx'

const Header4 = () => {
    return (
        <>
            <div className='my-10'>
                <Wrapper>
                    <Image
                        alt='banner'
                        src={"https://assets.oyoroomscdn.com/cmsMedia/6e9d9804-9c6f-4b18-a5d5-5e9a8f9815e5.jpg"}
                        width={1500}
                        height={900}
                    />
                </Wrapper>
            </div>
            <div className='my-10'>
                <Wrapper>
                    <Image
                        alt='banner'
                        src={"https://assets.oyoroomscdn.com/cmsMedia/b4462e5e-fd6b-44e4-99d7-fc83767ed892.png"}
                        width={1500}
                        height={900}
                    />
                </Wrapper>
            </div>
        </>
    )
}

export default Header4
