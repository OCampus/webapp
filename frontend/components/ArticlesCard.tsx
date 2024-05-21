import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Meteors } from "@/components/ui/meteors";
// import Link from "next/link";
// import { Tilt } from 'react-tilt'

const ArticlesCard = ({title, content, authorUserName, totalArticles, authorPic, type} : any) => {
  return (
    // <Tilt className='border rounded-xl py-9 px-5 text-content-1 shadow'>
      <CardContainer className="inter-var shadow-lg rounded-xl">
        <CardBody className='border rounded-xl py-9 px-5 text-content-1 shadow'>
          <CardItem translateZ='50' className='rgb w-10 h-10 flex justify-center items-center rounded-full'>
              <Image src={`/${type}`} alt='book outline' width='20' height='15'/>
          </CardItem>
          <CardItem translateZ='100' className='my-[10px] text-content-1 text-3xl font-semibold'>
            {title}
          </CardItem>
          <CardItem as='p' translateZ='20' className='text-content-1 font-normal text-[16px]'>
            {content}
          </CardItem>
          <CardItem translateZ='15' className='flex mt-10 items-center gap-2'>
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
          </CardItem>
        </CardBody>
      </CardContainer>
  )
}

export default ArticlesCard