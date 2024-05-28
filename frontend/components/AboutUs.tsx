'use client';
import React from 'react'
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='section bg-tertiary-2 py-[3.6rem] md:py-[5rem]'>

        {/* used flex because of row-reverse PS: I love grid */}
        <div className='flex max-md:flex-col-reverse gap-10 items-center'>

            <div className='w-full md:w-1/2  md:my-5 '>
                <Image
                    src="/mission.png"
                    alt= "Images"
                    width = {500}
                    height = {500}
                    className="w-full"
                />
            </div>

            <div className='w-full md:w-1/2'>
                <div className='text-3xl max-md:text-center font-semibold mb-4 capitalize'>
                    Our Mission
                </div>
                <div className='mt-3 text-opac-dark'>
                    At Ocampus, our mission is simple yet transformative: to redefine the student living experience. We are dedicated to providing students with a seamless and stress-free journey in finding and securing the perfect accommodation.
                </div>
            </div>

        </div>

        <div className='flex max-md:flex-col mt-7 max-md:mt-14  gap-10  items-center'>

            <div className='w-full md:w-1/2'>
                <p className='text-3xl max-md:text-center font-semibold mb-4 capitalize'>
                    Who We are?
                </p>
                <div className=' mt-3 text-opac-dark'>
                    Born out of a passion for enhancing student living, Ocampus is not just a platform; it's a solution. We believe that finding the right place to live should be easy, transparent, and enjoyable.
                </div>
            </div>

            <div className='w-full md:w-1/2'>
                <Image
                    src="/whoWeAre.png"
                    alt= "Images"
                    width = {500}
                    height = {500}
                    className="w-full"
                />
            </div>
        </div>
    </div>
  )
}

export default AboutUs