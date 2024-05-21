import Image from "next/image"

const Signin = () => {
    // const [mail,useMail] = useState(false);
    
  return (
    <>
        <section className='mx-7 hidden my-5 bg-white shadow items-center py-2 justify-center text-neutral-700 w-full sm:border md:w-fit rounded-lg font-manrope'>
            <div className='border-b py-2 font-bold text-lg grid place-items-center pb-3'>
                Login
            </div>
            <div className='py-5 px-5'>
                <form action="" className='mt-7'>

                    <label className='my-3'>
                        <span className=''>Email address</span>
                    </label>
                    <input type="mail" 
                        className='py-3 mb-4 md:py-2.5 border px-2 outline-none border-[#d9d9d9] rounded-xl w-full' 
                        placeholder='Enter your email address' name="" id=""
                    />
                    
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


                    <input type="submit" className='mt-4 px-3 rounded-lg py-3 md:py-4 bg-primary-1 w-full font-semibold' value="Login" />
                </form>



                {/* google */}
                <div className='flex justify-center py-3 md:py-4 px-2 border my-3 gap-2 items-center rounded-xl'>
                    <Image
                        src="/google.svg"
                        alt="google"
                        width="20"
                        height="20"
                    />

                    {/* <p className='place-items-center'> */}
                        <p className='font-semibold text-content-1'>Login with Google</p>

                </div>

            </div>
        </section>

    </>
  )
}

export default Signin