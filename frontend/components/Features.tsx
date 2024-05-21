'use client';
import React from 'react'
import Image from 'next/image'
import { Feature } from '../utils/constants'
import { Tilt } from 'react-tilt'

const Features = () => {
  return (
    <div className="section py-20 px-44">
        <div className='text-center text-4xl mb-10'>
            What sets us apart
        </div>

        <div className='md:grid md:grid-cols-3 gap-7 mt-20 w-full  my-10'>
          {Feature.map((feature) => (
            <Tilt key={feature.head} className="my-5 bg-white grid place-items-center w-full shadow rounded-xl dropShadow py-8 px-4">
              
              <div className='my-5 bg-[#F6F3FD] place-items-center grid rounded-full w-10 h-10  p-2'>
                
                <Image
                  src={`/${feature.imgName}`}
                  alt={`${feature.imgName}`}
                  width={500}
                  height={500}
                  className='mx-auto mb-5'
                />
                
              </div>
              
              <h2 className='font-bold my-3 text-center'>{feature.head}</h2>
              
              <div className='text-sm text-center text-opac-dark'>
                {feature.subHead}
              </div>
            </Tilt>
          ))}
        </div>
    </div>
  )
}

export default Features