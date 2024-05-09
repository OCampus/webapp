"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { NavLinks } from './constants';

const Navbar = () => {

    const [active , setActive]= useState("explore");
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
    <div className="bg-white  py-5 font-manrope" id='nbar'>

        <div className='section flex justify-between items-center'>

            {/* nav brand */}
            <div className='logo bg-gradient-to-b'>
                <Image src="/logo.png" alt='logo image' width={100} height={100}
                    
                    className="min-w-[8rem]"
                    priority
                />
            </div>

            <div className='md:px-4 hidden md:flex justify-center'>
                <ul className='flex sm:gap-3 text-opac-dark md:gap-4 lg:gap-8 md:text-[0.9rem] mdf:text-[1rem] lg:text-[1.1rem]'>
    
                    {NavLinks.map(link => (
                        <Link href={link.id == "explore" ? `/`: `/${link.id}`} key="link" onClick={ () => setActive(link.id)}>
                            <li className={` ${link.id == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} `}>{link.title}</li>
                        </Link>
                    ))}

                </ul>
            </div>

            <div className='hidden md:flex right-0'>
                <Link href="/signin">
                    <button className=' nav-btn bg-primary-1'>
                        Login
                    </button>
                </Link>
                <button className='nav-btn bg-white  shadow-inner outline outline-1 text-primary-1 outline-primary-1'>
                    Signup
                </button>
            </div>

            {/* toggle icon */}
            <div className=' md:hidden'>
                <Image
                    
                    src={toggle ? '/close.svg' : '/toggle.svg'}
                    alt='toogle svg'
                    width={25}
                    height={25}

                    onClick={() => setToggle(!toggle)}
                    
                    
                />
            </div>
        </div>

        {/* mobile */}
        <div id='mobile' className={`
        ${toggle ? "flex" : "hidden" } bg-white section absolute z-50  w-full shadow md:hidden rounded-2xl right-0 mt-3 mx4 px8 py8`}>
            <ul className=' sm:gap-3 md:gap-x-4 lg:gap-8 text-[1.1rem]'>
                    
                {NavLinks.map(link => (
                    <Link href={link.id == "explore" ? `/`: `/${link.id}`} key="link" onClick={ () => setActive(link.id)}>
                        <li className={` ${link.id == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} my-2`}>{link.title}</li>
                    </Link>
                ))}

                <li className='my-1'>
                    <Link href="/signin">
                        {/* <button className=' w-full btn text-primary bg-primary-1'> */}
                            Login
                        {/* </button> */}
                    </Link>
                </li>
                <li className='mt-1'>
                    {/* <button className='md:ml-2 w-full lg:ml-4 btn bg-white  outline-1 text-primary-1 outline-primary-1'> */}
                        Signup
                    {/* </button> */}
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar