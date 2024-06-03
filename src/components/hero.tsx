'use client';
import { neueMachina } from '@/app/fonts'
import React from 'react'
import Button from './button'
import Image from 'next/image';

const Hero = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <div className='hero w-full min-h-dvh' >
            <div className='flex flex-col gap-5 pt-36 md:w-1/2 px-10'>
                <h1 className={`${neueMachina.className} font-bold hero-title text-4xl md:text-7xl leading-none tracking-tighter`}>
                    Find, book or rent a car - quickly & easily!
                </h1>
                <p className='text-xl tracking-tighter leading-none' >Streamline your car rental experience with our effortless booking process.</p>
                <Button btnType='button' title="Explore cars" handleClick={handleScroll} className='bg-accent text-light p-3' />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>

                <div className="hero__image-overlay" />
            </div>
        </div>
    )
}

export default Hero