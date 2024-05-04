import React from 'react'
import Image from 'next/image'
import { StudentProps } from './constants'

const Student = () => {
    const {head,sub} =  StudentProps;
  return (
    <div className='section bg-primary py-[5rem] items-center'>
        <div className='md:grid grid-cols-2 md:gap-10 lg:gap-20 items-center'>
            <div className='col-span-1 grid place-items-center'>

                <Image
                    src="/student2.png"
                    alt='Student image'
                    width='500'
                    height='500'
                    className='w-full'
                />

            </div>
            <div className='col-span-1 mt-10 md:mt-0'>
                <h3 className='text-3xl'>
                    {head}
                </h3>

                <div className='my-5 text-opac-light'>
                    {sub}
                </div>

                <button className='bg-white btn text-primary'>
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Student