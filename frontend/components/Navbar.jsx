import React from 'react'
import Image from 'next/image';
const Navbar = () => {
  return (
    <div className="bg-white section py-5">
        <div className='md:flex justify-between items-center'>

            {/* nav brand */}
            <div className='logo bg-gradient-to-b'>
                <Image src="/logo.png" alt='logo image' width={600} height={600}
                    layout='responsive'
                    className=""
                    priority
                />
            </div>

            <div className='px-4'>
                <ul className='flex gap-8 text-[1.1rem] font-inter'>
                    <li className='dropShadow'>Home</li>
                    <li className='dropShadow unactive'>Services</li>
                    <li className='dropShadow unactive'>Features</li>
                    <li className='dropShadow unactive'>Contact</li>
                </ul>
            </div>

            <div className=''>
                <button className=' btn bg-primary'>
                    Login
                </button>
                <button className='ml-7 btn bg-white outline outline-1 text-primary outline-primary'>
                    Signup
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar