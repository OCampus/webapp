import Image from "next/image"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, } from 'recoil';
import axios from 'axios';

interface LoginForm {
    email: string;
    password: string;
}

const loginState = atom({
    key: 'loginState',
    default: {
      email: '',
      password: '',
      error: null,
    },
  });

const Signin = () => {
    const [loginData, setLoginData] = useRecoilState(loginState);
    const { register, handleSubmit, errors} = useForm<LoginForm>()
    
    const onSubmit = async (data: LoginForm) => {
        try {
          const response = await axios.post(
            `https://webapp-3oci.onrender.com/login`,
            {
              email: data.email,
              password: data.password,
            }
          );
          // Login successful, update the login state
          setLoginData({ ...data, error: null });
        } catch (error : any) {
          // Login failed, update the login state with an error message
          setLoginData({ ...data, error: error.response.data.message });
        }
      };
    
    return (
        <>
            <section className='modal'>
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)} method="POST" className=''>

                        <label className='my-3'>
                            <span className=''>Email address</span>
                        </label>
                        <input 
                            type="mail" 
                            className='modal-input' 
                            placeholder='Enter your email address'
                            {...register('email')}
                            value={loginData.email}
                        />
                        {errors?.email && <div>{errors.email.message}</div>}

                        <label className='my-3'>
                            <span className=''>Password</span>
                        </label>
                        <input 
                            type="password" 
                            className='modal-input' 
                            placeholder='Enter your password'
                            onChange={()=> setLoginData(value)}
                            {...register('password')}
                            value={loginData.password}
                        />
                        {errors?.password && <div>{errors.password.message}</div>}
                        
                        <p className='text-[0.8rem] my-1.5 md:my-2 font-semibold text-primary-1'>
                            Forget Password
                        </p>

                        <div className="my-2 flex gap-2">
                            <input type="checkbox" disabled name="" className="rounded-sm bg-primary-1 text-primary-1" id="" />
                            <p className="text-[0.66rem] md:text-[0.8rem]">
                                I agree to Ocampus’s <Link href='/' className="text-primary-1 font-bold">Terms of Service. </Link>
                            </p>
                        </div>


                        <button type="submit" className='modal-btn bg-primary-1'> Login </button>
            
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
                            <p className='font-semibold text-content-1 ml-2'>Login with Google</p>

                    </div>

                    <div className="flex-center text-[0.7rem] mt-4 mb-1">
                        Dont have an account? <span className="ml-1 text-primary-1">Sign up</span>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Signin