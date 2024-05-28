
'use client';
import { useState } from 'react';
import { Navbar, HelpHero, HelpArticles, PopularArticlesAccordion } from '@/components/index';
import { ArticlesCategory, PopularArticlesExamples } from '@/utils/constants';

const page = () => {
  const [active,setActive] : any = useState('student');
  return (
    <div className='w-full relative bg-white py-14 -mt-[2vh]'>

        {/* <HelpHero/> */}

        <div className="section bg-white relative">

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

          <div className='popular-articles-wrap'>
            <p className='popular-articles-text'>Popular Articles</p>

            <div className='mt-6'>
              <PopularArticlesAccordion />
            </div>

          </div>
        </div>
    </div>
  )
}

export default page