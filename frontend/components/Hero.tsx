"use client"
import React from 'react'
import { HeroProps } from './constants'
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useState, useEffect } from 'react'

const Hero = () => {
    const [heroImg, setHeroImg] = useState(
        window.innerWidth < 460 ? 
        `/${HeroProps?.heroImg}` 
        : `/${HeroProps?.heroMdImg}`
    );

    const handleImgSrcSet = () => {
    if(window.innerWidth < 460) {
      setHeroImg(`/${HeroProps?.heroImg}` );
    } else {
      setHeroImg(`/${HeroProps?.heroMdImg}`);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleImgSrcSet);

    return () => {
      window.removeEventListener('reisze', handleImgSrcSet)
    }
  }, [])
    useGSAP(() => {
        gsap.to(".heroText", {
            opacity: 1 , delay: 0.5
        });
        gsap.to(".heroSubText", {
            opacity: 1 , delay: 0.5,stagger: 0.25
        });
    }, [])
    return (
        <div className='section h-4/6 mb-3 md:py-2 bg-white'>

            <div className=' w-full gap-3 my-5 md:my-16 sm:items-center'>

                {/* Hero Text */}
                <div className='text-balance md:text-center'>
                    <div className='heroText opacity-0'>
                        <h1 className='md:text-center'>
                            {HeroProps.heroText}
                        </h1>
                    </div>

                    <div className='heroSubText opacity-0'>
                        {HeroProps.heroSubText}
                    </div>

                    <button className='hero-btn bg-primary-1 text-white py-2  mb-2.5'>
                        Get Started
                    </button>
                </div>

                {/* Hero image */}
                <div className=' my-5'>
                    <Image
                        src={heroImg}
                        alt='Hero image'
                        width={100000000}
                        height={100000000}
                        key={heroImg}
                        className='hero-img md:w-full rounded-3xl object-cover object-center'
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero