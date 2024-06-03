'use client';
import { ButtonProps } from '@/types/props';
import React from 'react'

const Button = ({ title, className, handleClick, btnType }: ButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`${className} w-fit rounded-full font-semibold tracking-tighter leading-none active:scale-95 hover:scale-105 text-lg md:text-xl`}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}

export default Button