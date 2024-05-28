'use client';
import React from 'react'
import Image from 'next/image'
import { Feature } from '../utils/constants'
import { Tilt } from 'react-tilt'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const Features = () => {
  return (
    <div className="section py-14 md:py-20 px-44">
        <div className='text-center text-3xl md:text-4xl font-semibold mb-1 md:mb-7'>
            What sets us apart
        </div>

        <div className='md:grid md:grid-cols-3 gap-7 md:mt-20 w-full  my-10'>
          {Feature.map((feature) => (
            <CardContainer key={feature.head} className="gap-6 border max-sm:my-3 bg-white grid place-items-center w-full shadow rounded-xl dropShadow py-10 px-4">
              <CardBody>
                <CardItem translateX='10' translateY='10' translateZ='70' className='mt-7 mx-auto mb-5 bg-[#F6F3FD] place-items-center grid rounded-full w-10 h-10  p-2'>
                  
                  <Image
                    src={`/${feature.imgName}`}
                    alt={`${feature.imgName}`}
                    width={500}
                    height={500}
                    className='mx-auto '
                  />
                  
                </CardItem>
                
                <CardItem as='p' translateZ='67' className=' w-full text-center font-bold my-1 md:my-3'>
                  {feature.head}
                </CardItem>
                
                <CardItem translateZ='90' className='text-sm mb-10 text-center text-opac-dark'>
                  {feature.subHead}
                </CardItem >
              </CardBody>
            </CardContainer>
          ))}
        </div>
    </div>
  )
}

export default Features