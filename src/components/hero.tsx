'use client';
import React from 'react'
import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='hero relative w-full overflow-hidden min-h-dvh flex flex-col md:flex-row justify-between' >
            <div className='flex flex-col gap-5 pt-36 md:w-1/2 px-10'>
                <h1 className={` font-bold hero-title text-4xl md:text-7xl leading-none tracking-tighter`}>
                    Find, book or rent a car - quickly & easily!
                </h1>
                <p className='text-xl tracking-tighter leading-none' >Streamline your car rental experience with our effortless booking process.</p>
                <Button onClick={handleScroll} >Explore cars</Button>
            </div>
            <div className="hero__image-container absolute bottom-20 right-0 ">
                <Image src="/hero-bg.png" alt="hero" width={500} height={500} className='float-right absolute -right-16 z-[-1]  w-[45rem]' />
                <Image src="/hero.png" alt="hero" width={500} height={500} className="object-contain z-10 float-right w-[19rem] md:w-[35rem]" />
            </div>
        </div>
    )
}

export default Hero;