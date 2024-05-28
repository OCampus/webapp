import React from 'react'
import Image from 'next/image'
import { StudentProps, LandlordProps } from '../utils/constants'

const WhyChooseUs = () => {
    const student =  StudentProps;
    const landlord = LandlordProps;
  return (
    <>
        <div className='section bg-white pt-3 pb-[5rem] items-center'>

            <div className='text-center font-semibold text-3xl md:text-4xl mb-10 md:mb-20 capitalize'>
                Why Choose us?
            </div>

            <div className='md:grid my-5 grid-cols-2 md:gap-10 lg:gap-20 items-center'>
                <div className='col-span-1 grid place-items-center'>

                    <Image
                        src="/student.png"
                        alt='Student image'
                        width='500'
                        height='500'
                        className='w-full'
                    />

                </div>
                <div className='col-span-1 mt-4 md:mt-0'>
                    <h3 className='text-3xl'>
                        {student.title}
                    </h3>

                    <div className='mb-5 mt-3 text-opac-dark'>
                        {student.content}
                    </div>

                    <button className='bg-primary-1 font-semibold btn text-white'>
                        Get Started
                    </button>
                </div>
            </div>

            {/*  */}
            <div className='md:flex mt-14 md:flex-row-reverse md:gap-10 lg:gap-20 items-center'>
                <div className='w-full md:w-1/2 grid place-items-center'>

                    <Image
                        src='/landlord.png'
                        alt='landlord image'
                        width='500'
                        height='500'
                        className='w-full'
                    />

                </div>
                <div className='w-full md:w-1/2 mt-10 md:mt-0'>
                    <h3 className='text-3xl'>
                        {landlord.title}
                    </h3>

                    <div className='mb-5 mt-3 text-opac-dark'>
                        {landlord.content}
                    </div>

                    <button className='bg-primary-1 btn font-semibold text-white'>
                        Explore Our Services
                    </button>
                </div>
            </div>
        </div>

        <div className='bg-hero h-[40vh] text-white flex-center text-center flex-col text-3xl section'>
            <h1 className='font-semibold text-2xl text-center text-pretty'>Embark on Your Student Living Adventure</h1>
            <p className='mt-3 text-sm text-light-opac'>
                Ready to discover a new way of student living? Explore our diverse accommodations and find your ideal home. At Ocampus, we're more than a platform; we're your partner in creating a memorable student living experience. “Your Future Home Awaits – Ocampus, Simplifying Student Living”.
            </p>
        </div>
    </>
  )
}

export default WhyChooseUs