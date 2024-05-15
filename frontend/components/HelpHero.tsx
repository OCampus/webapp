import React from 'react'
import { SearchIcon } from 'lucide-react'

const HelpHero = () => {
  return (
    <div className='helpHero py-20'>
        <div className=''>
            <div className='text-content-1 w-full font-semibold text-center items-center text-[1.6rem] md:text-[2rem] lg:text-[2.5rem]'>
                Advice and answers from Ocampus team
            </div>

            <div className=' w-[80w] px-4 sm:w-[60vw] md:w-[42vw] mt-3  mx-auto'>
                <div className='md:1/2 flex py-1 px-2 bg-white shadow rounded-full'>
                    <input className='flex-grow  py-3 pl-7 bg-transparent outline-none' placeholder='What do you need help with?'/>
                    <button className='rounded-full p-3 bg-primary-1 text-white'>
                        <SearchIcon className='text-sm'/>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpHero