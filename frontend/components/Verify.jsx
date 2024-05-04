import React from 'react'
import Image from 'next/image'

const Verify = () => {
  return (
    <div className='bg-white text-neutral-700 w-full sm:border px-5 md:w-fit rounded-lg font-manrope'>
        <div className='border-b font-bold text-lg grid place-items-center py-4'>Login or Signup</div>
        <div className='py-5'>
            <h3 className='text-xl text-content-1 font-semibold my-2 font-manrope'>
                Enter Verification Code
            </h3>
            <p className='text-xs text-[#515151] text-opacity-70 mt-2'>
                Enter the code we sent to +234-806-450-07
            </p>

            <form action="" className='mt-7'>

            
                <input type="number" 
                    className='py-3 md:py-2.5 border px-2 outline-none border-[#a3a3a3] rounded-xl w-full' 
                    placeholder='Enter phone number' name="" id="" />
                <p className='text-[0.8rem] my-1 text-[#797979]'>
                    <span className='text-primary'>Resend Code</span> or <span className='text-primary'>Call me</span>
                </p>


                <input type="submit" className='mt-4 px-3 rounded-lg py-3 md:py-2.5 bg-primary w-full' value="Proceed" />
            </form>

        

        </div>
    </div>
  )
}

export default Verify