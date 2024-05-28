import Image from 'next/image'
import Link from 'next/link'

const SignUp = () => {
  return (
    <section className='modal overflow-bar overflow-y-scroll'>
        <div className=''>
            <form action="" className='mt-7'>

                {/* first name */}
                <label className='my-3'>
                    <span className=''>First name</span>
                </label>
                <input type="name" 
                    className='modal-input' 
                    placeholder='Enter your first name' name="" id=""
                />

                {/* second name */}
                <label className='my-3'>
                    <span className=''>Second name</span>
                </label>
                <input type="name" 
                    className='modal-input' 
                    placeholder='Enter your second name' name="" id=""
                />

                {/* Mail */}
                <label className='my-3'>
                    <span className=''>Email address</span>
                </label>
                <input type="mail" 
                    className='modal-input' 
                    placeholder='Enter your email address' name="" id=""
                />

                {/* Institution */}
                <label className='my-3'>
                    <span className=''>Institution</span>
                </label>
                <input type="text" 
                    className='modal-input' 
                    placeholder='Enter your institutions name' name="" id=""
                />

                {/* Number */}
                <label className='my-3'>
                    <span className=''>Phone Number</span>
                </label>
                <input type="number" 
                    className='modal-input' 
                    placeholder='Enter your phone number' name="" id=""
                />
                
                {/* Password */}
                <label className='my-3'>
                    <span className=''>Password</span>
                </label>
                <input type="password" 
                    className='modal-input' 
                    placeholder='Enter your password' name="" id=""
                />

                {/* Confirm Password */}
                <label className='my-3'>
                    <span className=''>Confirm Password</span>
                </label>
                <input type="password" 
                    className='modal-input' 
                    placeholder='Confirm your password' name="" id=""
                />
                
                <div className="my-2 flex gap-2">
                    <input type="checkbox" name="" className="rounded-sm bg-primary-1 text-primary-1" id="" />
                    <p className="text-[0.66rem] md:text-[0.8rem]">
                        I agree to Ocampus’s <Link href='/' className="text-primary-1 font-bold">Terms of Service. </Link>
                    </p>
                </div>

                <input type="submit" className='mt-4 px-3 rounded-lg py-3 md:py-4 bg-primary-1 w-full font-semibold' value="Signup" />
            </form>



            {/* google */}
            <div className='flex modal-btn items-center justify-center border '>
                <Image
                    src="/google.svg"
                    alt="google"
                    width="20"
                    height="20"
                />

                {/* <p className='place-items-center'> */}
                <p className='font-semibold text-content-1 ml-2'>Sign up with Google</p>

            </div>

            <div className="flex-center text-[0.7rem] mt-4 mb-1">
                Already have an account? <span className="ml-1 text-primary-1">Login</span>
            </div>
        </div>
    </section>
  )
}

export default SignUp