import React from 'react'
import Verify from '@/components/Verify'
import Footer  from "@/components/Footer";

const page = () => {
  return (
    <div className='grid mx-0 place-items-center min-h-screen'>
        <Verify/>

        <div className='sm:hidden -mt-8'>
          <Footer />
        </div>

    </div>
  )
}

export default page