"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';

const Navbar = () => {

    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
  
    // useEffect to close nav after a change in the state active
    useEffect(() => {
      const mobile = document.querySelector("#mobile");
      mobile?.classList.add("hidden");
      setToggle(false);
    }, [active]);

    useEffect(() => {
        const handleScroll = () => {
          // Your onScroll logic here
          // Example: Add a class to the navbar when scrolling down
          const navbar = document.querySelector("#nbar");
          if (navbar && window.scrollY > 0) {
            navbar?.classList.add("scrolled");
          } else {
            navbar?.classList.remove("scrolled");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <div className="bg-white section py-5" id='nbar'>
        <div className='flex justify-between items-center'>

            {/* nav brand */}
            <div className='logo bg-gradient-to-b'>
                <Image src="/logo.png" alt='logo image' width={100} height={500}
                    
                    className="min-w-[8rem]"
                    priority
                />
            </div>

            <div className='md:px-4 hidden md:flex'>
                <ul className='flex sm:gap-3 text-opac-dark md:gap-4 lg:gap-8 md:text-[0.9rem] mdf:text-[1rem] lg:text-[1.1rem]'>
                    <li className='dropShadow'>Home</li>
                    <li className='dropShadow unactive'>Services</li>
                    <li className='dropShadow unactive'>Features</li>
                    <li className='dropShadow unactive'>Contact</li>
                </ul>
            </div>

            <div className='hidden md:flex'>
                <Link href="/signin">
                    <button className=' btn bg-primary'>
                        Login
                    </button>
                </Link>
                <button className='md:ml-2 lg:ml-4 btn bg-white outline outline-1 text-primary outline-primary'>
                    Signup
                </button>
            </div>

            <div className=' sm:hidden'>
                <Image
                    
                    src={toggle ? '/close.svg' : '/toggle.svg'}
                    alt='toogle svg'
                    width={25}
                    height={25}

                    onClick={() => setToggle(!toggle)}
                    
                    
                />
            </div>
        {/* </div> */}

    {/* mobile */}
        <div id='mobile' className={`${
          toggle ? "flex" : "hidden" } bg-white absolute z-50 border  shadow md:hidden rounded-2xl top-20 right-0 mx-4 px-8 py-8`}>
                <ul className=' sm:gap-3 md:gap-x-4 lg:gap-8 text-[1.1rem]'>
                    <li className='dropShadow'>Home</li>
                    <li className='dropShadow unactive my-1'>Services</li>
                    <li className='dropShadow unactive my-1'>Features</li>
                    <li className='dropShadow unactive my-1'>Contact</li>
                    <li className='my-1'>
                        <Link href="/signin">
                            <button className=' w-full btn bg-primary'>
                                Login
                            </button>
                        </Link>
                    </li>
                    <li className='mt-1'>
                        <button className='md:ml-2 w-full lg:ml-4 btn bg-white outline outline-1 text-primary outline-primary'>
                            Signup
                        </button>
                    </li>
                </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar