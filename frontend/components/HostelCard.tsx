import React from 'react'
import Image from 'next/image'
import { MapPin, Share2Icon, Star, Heart } from 'lucide-react'

const HostelCard = () => {
  return (
    <div className='relative rounded-2xl text-content-input-text'>
      <Image src='/hostel.png' alt='hostel' width={1000} height={100} className='rounded-2xl w-full object-cover' />
      
      <div className="my-1 flex font-semibold justify-between text-content-1">
        <div>
          Kings Lodge
        </div>
        <div>
          # 200,000
        </div>
      </div>

      <div className='my-1 flex justify-between'>
        <div className='flex text-sm items-center gap-1'>
          <MapPin className='text-primary-1' size={15}/>
          Apatapiti Layout
        </div>
         <span className='text-xs text-content-input-text'>per year</span>
      </div>

      <div className="my-1 flex justify-between text-xs">
        <span>Room and Parlour</span>
        <Share2Icon size={18}/>
      </div>

      <div className="my-1 text-[#555] flex justify-between text-sm">
        <div className='flex items-center'>
          <Image src='/trek.svg' alt='trek icon' width={100} height={100} className='w-4 h-3.5' />
          <span>2 mins</span>
        </div>
        <div className='flex items-center '>
          <Image src='/star.png' alt='rating icon' width={100} height={100} className='w-4 h-4 mr-0.5' />
          <span>4.1</span>
        </div>
      </div>
      <Heart className='top-3 right-3 absolute text-white'/>
    </div>
  )
}

export default HostelCard