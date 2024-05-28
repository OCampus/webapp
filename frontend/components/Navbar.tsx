"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { NavLinks } from '@/utils/constants';

import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';



const Navbar = ({handleModal} : any) => {

    const variants = {
        true: {opacity: 1, x: 0},
        false: { opacity: 0, x: "-100%"}
    }

    const pathname : any = usePathname();
    const [active , setActive]= useState("explore");
    const [toggle, setToggle] = useState(false);
    const [isSet,SetIsSet] = useState(false);
    const navbar = document?.querySelector("#nbar");

    useEffect(() => {
      const mobile = document?.querySelector("#mobile");
      mobile?.classList.add("hidden");
      setToggle(false);
    }, [active]);

    useEffect(() => {

        if(pathname == '/about' ) {
            setActive('about');
            // document.body.style.backgroundColor = "#fff";
         } 
         else if (pathname == '/help') {
            const body = document.querySelector("body");
            setActive('help');
            // document.body.style.backgroundImage = "url('/trademark.svg')";
            // "url('/public/trademark.svg')";
        }
         else {
            setActive('explore');

         };


        const handleScroll = () => {
          // Your onScroll logic here
          // Example: Add a class to the navbar when scrolling down
          const navbar = document.querySelector("#nbar");
          if (navbar && window.scrollY > 0 && pathname !== '/help') {
            navbar?.classList.add("scrolled");
          } else {
            navbar?.classList.remove("scrolled");
          }

        
        }
        window.addEventListener("scroll", handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <>
        <div className={pathname == '/help' ? ` py-5 top-0` : ` py-5 bg-white shadow`} id='nbar'>

            <div className='section  items-center'>

                <div className="flex w-full justify-between items-center">
                                    {/* nav brand */}
                <div className='logo bg-gradient-to-b'>
                    <Image src="/logo.png" alt='logo image' width={100} height={100}
                        
                        className=""
                        priority
                    />
                </div>

                <div className='md:px-4 hidden md:flex justify-center'>
                    <ul className='flex sm:gap-3 text-opac-dark md:gap-4 lg:gap-8 md:text-[0.9rem] mdf:text-[1rem] lg:text-[1.1rem]'>

                        {NavLinks.map(link => (
                            <Link href={link.id == "explore" ? `/`: `/${link.id}`} key={link.id} onClick={ () => setActive(link.id)}>
                                <li className={` ${link.id == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} `}>{link.title}</li>
                            </Link>
                        ))}

                    </ul>
                </div>

                <div className='hidden md:flex right-0'>
                    <motion.button
                        whileHover={{ scale: 1.1}}
                        whileTap={{scale : 0.9}}
                        className=' nav-btn bg-primary-1'
                        onClick={() => handleModal(true)}
                    >
                            Login
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1}}
                        whileTap={{scale : 0.9}}
                        className='nav-btn bg-transparent  shadow-inner outline outline-1 text-primary-1 outline-primary-1'
                    >
                        Signup
                    </motion.button>
                </div>
                    {/* toggle icon */}
                <motion.nav
                    animate = {toggle ? true : false}
                    variants={variants}
                    className=' md:hidden'
                >
                    <Image
                        src={toggle ? '/close.svg' : '/toggle.svg'}
                        alt='toogle svg'
                        width={25}
                        height={25}
                        className=' z-auto w-auto h-auto'
                        onClick={() => setToggle(toggle => !toggle)}
                    />
                </motion.nav>
                </div>

                                            {/* mobile */}
        <div id='mobile' className={`
        ${toggle ? "flex" : "hidden" }  z-50 py-4  w-full md:hidden`}>
                
            <ul className=' sm:gap-3 md:gap-x-4 lg:gap-8 text-[1.1rem]'>
                                
                {NavLinks.map(link => (
                    <Link href={link.id == "explore" ? `/`: `/${link.id}`} key={link.id} onClick={ () => setActive(link.id)}>
                        <li className={` ${link.id == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} my-2`}>{link.title}</li>
                    </Link>
                    ))}

                <li
                    className={` ${"login" == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} my-2`}
                >
                    Login
                </li>
                <li className={` ${"signup" == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} my-2`}>                                    {/* <button className='md:ml-2 w-full lg:ml-4 btn bg-white  outline-1 text-primary-1 outline-primary-1'> */}
                    Signup
                </li>
            </ul>
                            
            {/* <Image src='/close.svg' height={40} width={40} alt='close icon'
                className='top-0 right-0 mt-4 mr-4 absolute'
                onClick={() => setToggle(toggle => !toggle)}
                priority
            /> */}
        </div>
            </div>
        </div>


    </>
    
  )
}

export default Navbar