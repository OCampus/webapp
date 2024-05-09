import React from 'react'
import Login from '@/components/Login'
import Footer  from "@/components/Footer";

const page = () => {
  return (
    <div className='grid mx-0 place-items-center min-h-screen'>
        <Login/>

        <div className='sm:hidden -mt-8'>
          <Footer />
        </div>

    </div>
  )
}

export default page