
'use client';
import { useState } from 'react';
import { Navbar, HelpHero, HelpArticles, PopularArticles } from '@/components/index';
import { ArticlesCategory, PopularArticlesExamples } from '@/components/constants';

const page = () => {
  const [active,setActive] : any = useState('student');
  return (
    <div className='w-full'>
        {/* <div className=' helpTradeMarkSection'> */}
          {/* <div className='bg-ocampus-logo'>
            <Navbar/> */}
            <HelpHero/>
          {/* </div> */}
        {/* </div> */}

        <div className="section bg-white py-14">

          <div className='border-b flex' >
            {ArticlesCategory?.map((category) => (
              <button key={category.id} 
              onClick={
                () => setActive(category.id)
              }
              className={` {${category.id == active ? 'border border-b border-[#140227] text-[#140227]' : 'text-[#646464]'} text-[#646464] text-sm font-semibold py-0 px-2 md:px-4`}>
                {category.title}
              </button>
            ))}
          </div>
          <HelpArticles />

          <div className='mt-4 shadow-lg rounded-xl border px-4 py-5 md:px-10 md:py-9'>
            <p className='text-content-1 text-xl font-semibold'>Popular Articles</p>

            <div className='mt-6'>
              {PopularArticlesExamples.map(({title,content}) => (
                <PopularArticles key={title} trigger={title} content={content}/>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default page