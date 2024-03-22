import React from 'react'
import Image from 'next/image'
import { LandlordProps } from './constants'

const Landlord = () => {
    const {head,sub} =  LandlordProps;
  return (
    <div className='section bg-tertiary-2 py-[5rem]'>
        <div className='grid grid-cols-2 gap-20 items-center'>
            <div className='col-span-1'>
                <Image
                    src="/landlord.png"
                    alt='Student image'
                    width='500'
                    height='500'
                    className=''
                />
            </div>
            <div className='col-span-1'>
                <h3 className='text-3xl'>
                    {head}
                </h3>

                <div className='my-5'>
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