"use client";
import React, { useState } from 'react'
import Image from 'next/image'

const Login = () => {
    const [mail,useMail] = useState(false);
  return (
    <div className='bg-white text-neutral-700 w-full sm:border px-5 md:w-fit rounded-lg font-manrope'>
        <div className='border-b font-bold text-lg grid place-items-center py-4'>Login or Signup</div>
        <div className='py-5'>
            <h3 className='text-2xl text-content-1 font-semibold my-2 font-manrope'>
                Welcome to OCampus
            </h3>
            <p className='text-xs text-[#515151] text-opacity-70 mt-2'>Get started to get the best hostel deals</p>

            <form action="" className='mt-7'>

                
                <input type="number" 
                    className='py-3 md:py-2.5 border px-2 outline-none border-[#d9d9d9] rounded-xl w-full' 
                    placeholder='Enter phone number' name="" id="" />
                <p className='text-[0.8rem] my-1 text-[#797979]'>You`ll get a verification code on the number</p>


                <input type="submit" className='mt-4 px-3 rounded-lg py-3 md:py-2.5 bg-primary w-full' value="Continue" />
            </form>


            <div className='grid place-items-center text-xs my-3'>
                or
            </div>

            {/* google */}
            <div className='py-1.5 px-4 h-10 w-full text-primary border rounded-lg flex border-primary'>
                <Image
                    src="/google.svg"
                    alt="google"
                    width="20"
                    height="20"
                />

                {/* <p className='place-items-center'> */}
                    <p className='mx-auto'>Continue with Google</p>

            </div>

            {/* apple */}
            <div className='my-4 py-1.5 px-4 h-10 w-full text-primary border rounded-lg flex border-primary'>
                <Image
                    src="/apple_2.svg"
                    alt="apple"
                    width="20"
                    height="20"
                />

                <p className='mx-auto'>Continue with Apple</p>

            </div>
            
            {/* Microsoft */}
            <div className='my-4 py-1.5 px-4 h-10 w-full text-primary border rounded-lg flex border-primary'>
                <Image
                    src="/microsoft.svg"
                    alt="microsoft"
                    width="20"
                    height="20"
                />

                <p className='mx-auto'>Continue with Microsoft</p>

            </div>

            {/* Email */}
            <div className='my-4 py-1.5 px-4 h-10 w-full text-primary border rounded-lg flex border-primary'>
                <Image
                    src="/apple_2.svg"
                    alt="apple"
                    width="20"
                    height="20"
                />

                <p className='mx-auto'>Continue with Email</p>

            </div>

        </div>
    </div>
  )
}

export default Login