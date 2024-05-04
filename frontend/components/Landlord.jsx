import React from 'react'
import Image from 'next/image'
import { LandlordProps } from './constants'

const Landlord = () => {
    const {head,sub} =  LandlordProps;
  return (
    <div className='section bg-tertiary-2 py-[5rem]'>
        <div className='md:flex md:flex-row-reverse place-items-center md:gap-10 lg:gap-20 items-center'>

            {/* medium screen  */}
            
            <div className='md:w-1/2 grid place-items-center'>
                <Image
                    src="/landlord.png"
                    alt='Student image'
                    width='500'
                    height='500'
                    className='w-full'
                />
            </div>

            <div className='md:w-1/2 col-span-1 mt-10 md:mt-0'>
                <h3 className='text-3xl'>
                    {head}
                </h3>

                <div className='my-5 text-opac-dark'>
                    {sub}
                </div>

                <button className='btn bg-primary text-white'>
                    Explore
                </button>
            </div>

        </div>
    </div>
  )
}

export default Landlord