import React from 'react'
import Image from 'next/image'

const Download = () => {
  return (
    <div className='bg-primary section pt-20'>
        <h2 className='text-center text-2xl'>
            Your Gateway to Hassle-free Student Living
        </h2>

        <div className='flex justify-around items-center mt-12 overflow-hidden'>


            {/* ANDROID APPS */}
            <div className='download absolute left-0 lg:relative'>
                <div className='hidden lg:block'>
                    <h3 >For Android</h3>
                    <p className='text-xs'>Android 10.6+</p>

                    <button className='btn my-7 bg-white rounded-lg text-primary'>
                        Download
                    </button>
                </div>

                <div className='grid place-items-center '>
                    <Image 
                        src="/android.svg"
                        alt='apple '
                        width={40}
                        height={40}
                    />
                </div>
            </div>


            <Image
                src="/download_app.png"
                alt='download'
                width={500}
                height={400}
                className='mx-auto'
            />


            {/* IOS APP */}
            <div className='download absolute right-0  lg:relative'>
                <div className='hidden lg:block'>
                    <h3>For Ios </h3>
                    <p className='text-xs'>Ios 15.6+</p>

                    <button className='btn my-7 bg-white rounded-lg text-primary'>
                        Download
                    </button>
                </div>

                <div className='grid place-items-center'>
                    <Image 
                        src="/apple.svg"
                        alt='apple '
                        width={40}
                        height={60}
                        className=''
                    />
                </div>
            </div>
            

            <div></div>

        </div>

        {/* smaller devices */}
        {/* <div className='sm:hidden my-7 flex w-full justify-evenly'>
            <div className='download'>
                <h3>For Ios </h3>
                <p className='text-xs'>Ios 15.6+</p>

                <button className='btn my-7 bg-white rounded-lg text-primary'>
                    Download
                </button>

                <div className='grid place-items-center'>
                    <Image 
                        src="/apple.svg"
                        alt='apple '
                        width={60}
                        height={60}
                    />
                </div>
            </div>

            <div className='download '>
                <h3>For Android</h3>
                <p className='text-xs'>Android 10.6+</p>

                <button className='btn my-7 bg-white rounded-lg text-primary'>
                    Download
                </button>

                <div className='grid place-items-center '>
                    <Image 
                        src="/android.svg"
                        alt='apple '
                        width={60}
                        height={60}
                    />
                </div>
            </div>
        </div> */}
        
    </div>
  )
}

export default Download