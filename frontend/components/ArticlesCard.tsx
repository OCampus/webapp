import React from 'react'
import Image from 'next/image'
import { AnyMxRecord } from 'dns'

const ArticlesCard = ({title, content, authorUserName, totalArticles, authorPic, type} : any) => {
  return (
    <div className='border rounded-xl py-9 px-5 text-content-1 shadow'>
      
        <div className='rgb w-10 h-10 flex justify-center items-center rounded-full'>
            <Image src={`/${type}`} alt='book outline' width='20' height='15'/>
        </div>
        <div className='my-[10px] text-content-1 text-3xl font-semibold'>
          {title}
        </div>
        <p className='text-content-1 font-normal text-[16px]'>
          {content}
        </p>
        <div className='flex mt-10 items-center gap-2'>
          <div className='bg-content-1 h-11 w-11 flex justify-center items-center rounded-full p-2'>
            <Image src={`/${authorPic}`} alt='authors profile image' width='20' height='20' className='object-contain'/>
          </div>
          <p>
            {authorUserName}
          </p>
          <span className='bg-content-1 p-1 rounded-full h-2 w-2'>.</span>
          <p>
            {totalArticles} articles
          </p>
        </div>
    </div>
  )
}

export default ArticlesCard