import React from 'react'
import Button from '@/components/button'
import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
  return (
    <header className='fixed w-full px-5 py-2 flex items-center justify-between' >
       <Link href={"/"} >
        <Image src={"/logo.svg"} alt='Logo' width={100} height={100} ></Image>
       </Link>
       <Button title="sign in" className='bg-light text-accent p-3 w-fit rounded-full' />
    </header>
  )
}

export default Navbar