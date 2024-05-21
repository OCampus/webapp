'use client';
import React from 'react'
import { AboutProps } from '../utils/constants'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '@/utils/motion';

const About = () => {
    let {head,sub} = AboutProps[0];
    let {headSecond,subSecond} = AboutProps[1];
    const image = [`image1.png`,,`image2.png`,`image3.png`,`image4.png`];
  return (
    <div className='section bg-tertiary-2 py-[5rem]'>

        {/* used flex because of row-reverse PS: I love grid */}
        <div className='md:flex flex-row-reverse gap-8  items-center'>

            <div className='md:w-1/2'>
                <div className='text-3xl mb-2'>
                    {head}
                </div>
                <div className='mt-3 text-opac-dark'>
                    {sub}
                </div>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.75 }} 
                className='md:w-1/2 grid place-items-center mt-8 md:mt-0'
            >
                <Image
                    src="/frame1.png"
                    alt= "Images"
                    width = {500}
                    height = {500}
                    className="w-full"
                />
            </motion.div>
        </div>

        <div className='md:grid grid-cols-2 my-5 sm:mt-20 md:mt-32 gap-8  items-center'>

            <div className='col-span-1'>
                <motion.p variants={textVariant(8)} className='text-3xl mb-2'>
                    {headSecond}
                </motion.p>
                <div className='mt-3 text-opac-dark'>
                    {subSecond}
                </div>
            </div>

            <div className='col-span-1 grid place-items-center mt-8 md:mt-0'>
                    <Image
                        src="/frame2.png"
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

export default About