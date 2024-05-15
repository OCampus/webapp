"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState,useEffect } from 'react';
import { NavLinks } from './constants';

import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathname : any = usePathname();
    const [active , setActive]= useState("explore");
    const [toggle, setToggle] = useState(false);
    const [isSet,SetIsSet] = useState(false);
    const navbar = document.querySelector("#nbar");
  
    // Help and support section background
    useEffect(() => {
        if (pathname == '/help') {
            document.body.style.background = "url('/trademark.svg')";
            document.body.style.backgroundRepeat ='no-repeat';
            document.body.style.backgroundPosition = 'top';
            document.body.style.backgroundColor = '#f8f7fe';
        }
        else {
            document.body.style.background = "#fff";
        }
    },[pathname])
    // useEffect to close nav after a change in the state active
    useEffect(() => {
      const mobile = document.querySelector("#mobile");
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
          if (navbar && window.scrollY > 0) {
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
    // pathname == '/help' ? `py-6 bg-[#f8f7fe]`: `py-6 bg-inherit`}
    <div className={pathname == '/help' ? ` py-6` : `bg-white py-6`} id='nbar'>

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
                <button className='nav-btn bg-transparent  shadow-inner outline outline-1 text-primary-1 outline-primary-1'>
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
        ${toggle ? "flex" : "hidden" } bg-white section absolute z-50 py-4  w-full shadow md:hidden right-0 mt-3 mx4 px8 py8`}>
            <ul className=' sm:gap-3 md:gap-x-4 lg:gap-8 text-[1.1rem]'>
                    
                {NavLinks.map(link => (
                    <Link href={link.id == "explore" ? `/`: `/${link.id}`} key="link" onClick={ () => setActive(link.id)}>
                        <li className={` ${link.id == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} my-2`}>{link.title}</li>
                    </Link>
                ))}

                <li className={` ${"login" == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} my-2`}>
                    <Link href="/signin">
                        {/* <button className=' w-full btn text-primary bg-primary-1'> */}
                            Login
                        {/* </button> */}
                    </Link>
                </li>
                <li className={` ${"signup" == active ? 'text-primary-1' : 'dropshadow text-[#717171]'} my-2`}>
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