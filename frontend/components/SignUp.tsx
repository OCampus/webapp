import Image from 'next/image'

const SignUp = () => {
  return (
    <section className='h-[80vh] overflow-hidden mx-7 bg-white shadow items-center py-2 justify-center text-neutral-700 w-full sm:border md:w-fit rounded-lg font-manrope'>
        <div className='border-b py-2 font-bold text-lg grid place-items-center pb-3'>
            Sign Up
        </div>
        <div className='py-5 h-[80vh] px-5 overflow-scroll'>
            <form action="" className='mt-7'>

                {/* first name */}
                <label className='my-3'>
                    <span className=''>First name</span>
                </label>
                <input type="name" 
                    className='py-3 mb-4 md:py-2.5 border px-2 outline-none border-[#d9d9d9] rounded-xl w-full' 
                    placeholder='Enter your first name' name="" id=""
                />

                {/* second name */}
                <label className='my-3'>
                    <span className=''>Second name</span>
                </label>
                <input type="name" 
                    className='py-3 mb-4 md:py-2.5 border px-2 outline-none border-[#d9d9d9] rounded-xl w-full' 
                    placeholder='Enter your second name' name="" id=""
                />

                {/* Mail */}
                <label className='my-3'>
                    <span className=''>Email address</span>
                </label>
                <input type="mail" 
                    className='py-3 mb-4 md:py-2.5 border px-2 outline-none border-[#d9d9d9] rounded-xl w-full' 
                    placeholder='Enter your email address' name="" id=""
                />
                
                {/* Password */}
                <label className='my-3'>
                    <span className=''>Password</span>
                </label>
                <input type="password" 
                    className='py-3 md:py-2.5 border px-2 outline-none border-[#d9d9d9] rounded-xl w-full' 
                    placeholder='Enter your password' name="" id=""
                />
                
                <p className='text-md my-2 font-manrope font-semibold text-primary-1'>
                    Forget Password
                </p>


                <input type="submit" className='mt-4 px-3 rounded-lg py-3 md:py-4 bg-primary-1 w-full font-semibold' value="Signup" />
            </form>



            <div className='flex justify-center py-3 md:py-4 px-2 border mt-3 mb-8 gap-2 items-center rounded-xl'>
                <Image
                    src="/google.svg"
                    alt="google"
                    width="20"
                    height="20"
                    loading="lazy"
                    // placeholder="blur"
                />

                <p className='font-semibold text-content-1'>Sign up with Google</p>

            </div>

        </div>
    </section>
  )
}

export default SignUp