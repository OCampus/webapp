import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='section pt-20 pb-8'>

        <div className='flex flex-wrap justify-between gap-4 mt-2 mb-6'>

            <div className='socials w-full mdf:w-fit'>
                <Image src="/logo.png" alt='logo image' width={139} height={500}/>
                <div className="flex gap-1 my-3">
                    <Image
                        src="/x.svg"
                        alt="socials"
                        width="20"
                        height="20"
                    />
                    <Image
                        src="/facebook.svg"
                        alt="socials"
                        width="20"
                        height="20"
                    />
                    <Image
                        src="/linkedin.svg"
                        alt="socials"
                        width="20"
                        height="20"
                    />
                    <Image
                        src="/instagram.svg"
                        alt="socials"
                        width="20"
                        height="20"
                    />
                    <Image
                        src="/tiktok.svg"
                        alt="socials"
                        width="20"
                        height="20"
                    />
                </div>
            </div>

            <div>
                <h3 className=' mb-2 font-semibold text-lg'>Support</h3>
                <ul className='text-opac-dark text-sm'>
                    <li>About Us</li>
                    <li>Help & Support</li>
                    <li>Feedback</li>
                </ul>
            </div>

            <div>
                <h3 className=' mb-2 font-semibold text-lg'>Legal</h3>
                <ul className='text-opac-dark text-sm'>
                    <li>Privacy policy</li>
                    <li>Terms of use</li>
                </ul>
            </div>

            <div>
                <h3 className=' mb-2 font-semibold text-lg'>Join Us</h3>
                <ul className='text-opac-dark text-sm'>
                    <li>Careers</li>
                    <li>Be an OCampus Agent</li>
                    <li>Be a host</li>
                </ul>
            </div>

            {/* search for updates */}
            <div className='w-full mdf:w-fit'>
                <h3 className='font-semibold text-xl'>Suscribe for updates</h3>
                <div className='bg-tertiary-2  border-2 flex p-1 rounded-xl justify-between'>
                    

                    <input type="text" 
                        placeholder='Your email or phone number please'
                        className='text-sm outline-none bg-transparent'
                    />

                    <button className='bg-primary px-2 py-1 rounded-lg right'>
                        
                        <Image 
                            src='/arrow.svg'
                            alt='arrow'
                            width='18'
                            height='18'
                        />
                    </button>
                </div>
            </div>  

            
        </div>

        <hr />

        <div className='grid place-items-center mt-6'>
            &copy; OCampus 2024
        </div>

    </div>
  )
}

export default Footer