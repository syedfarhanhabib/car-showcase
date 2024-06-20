"use client";
import React, { useEffect, useState } from "react";
import { IoClose, IoReorderTwoOutline } from "react-icons/io5";
import Link from "next/link"; // Ensure Link is correctly imported
import ThemeSwitch from "@/components/theme";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  // Ensure the initial state is the same on both the server and client
  useEffect(() => {
    // Any client-side specific code can go here
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: "-100%" }}
        whileInView={{ y: "0%" }}
        transition={{
          duration: 0.1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="header bg-background/5 text-primary fixed top-0 tracking-tighter backdrop-blur z-[999] w-full p-3 font-light flex md:items-center justify-between text-base d:text-lg leading-none"
      >
        <Link href="/" className="font-medium">
          carHub
        </Link>
        <div className="mid sm:flex hidden -ml-24 gap-2 leading-none">
          <div className="line mt-2 w-6 h-[1px] bg-primary"></div>
          <h3>
            Effortless <br />
            cars booking
          </h3>
        </div>
        <div className="icon md:hidden text-3xl transition-all duration-300" onClick={toggle}>
          {open ? <IoClose /> : <IoReorderTwoOutline />}
        </div>
        <div className="end items-center justify-between md:flex gap-5 hidden">
          <ThemeSwitch />
          <Button variant={"ghost"} >Explore</Button>
          <Button variant={"ghost"} >Explore</Button>
          <Button className="bg-blue-500" >Explore</Button>
        </div>
      </motion.header>
      {open && (
        <div className="fixed right-5 z-[70] top-16 md:hidden duration-300 items-center justify-between flex flex-col w-fit bg-background text-primary border border-muted shadow-lg rounded-lg p-5 gap-5">
          <ThemeSwitch />
          <Button variant={"ghost"} >Explore</Button>
          <Button variant={"ghost"} >Explore</Button>
          <Button className="bg-blue-500" >Explore</Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
