import React from 'react'
import Image from 'next/image'
import { Feature } from './constants'

const Features = () => {
  return (
    <div className="section py-20 px-44">
        <div className='text-center text-4xl mb-10'>
            What sets us apart
        </div>

        <div className='md:grid md:grid-cols-3 gap-7 mt-20 w-full  my-10'>
          {Feature.map((feature) => (
            <div key={feature.head} className="my-5 grid place-items-center w-full border rounded-xl dropShadow py-8 px-4">
              
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
            </div>
          ))}
        </div>
    </div>
  )
}

export default Features