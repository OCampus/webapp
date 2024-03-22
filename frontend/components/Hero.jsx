import React from 'react'
import { HeroProps } from './constants'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='section py-4 bg-white'>

        <div className='sm:flex sm:flex-1 w-full gap-3 mt-4 md:mt-14 sm:items-center'>

            {/* Hero Text */}
            <div className='w-3/5 flex-grow'>
                <div className='heroText'>
                    <h1>
                        {HeroProps.heroText}
                    </h1>
                </div>

                <div className='heroSubText'>
                    {HeroProps.heroSubText}
                </div>

                <button className='btn bg-primary my-2.5'>
                    Get Started
                </button>
            </div>

            {/* Hero image */}
            <div className='w-2/6'>
                <Image
                    src={`/${HeroProps.heroImg}`}
                    alt='Hero image'
                    width={350}
                    height={350}
                    className='w-full'
                />
            </div>
        </div>
    </div>
  )
}

export default Hero