import React from 'react'
import exampleImg from './exampleImg.jpg'
import { FcGoogle } from "react-icons/fc";

const Login1 = () => {
  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute top-[20%] left-[10%] flex flex-col'>
                <h1 className='text-4xl font-bold my-4'>Turn Your Ideas into reality</h1>
                <p className='text-xl font-normal'>Start for free and get attractive offers from the community</p>
            </div>
            <img src={exampleImg} className='w-full h-full' />
        </div>

        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-12 justify-between items-center'>

            <div className='w-full flex flex-col max-w-[500px]'>
                {/* login title */}
                <div className='w-full flex flex-col mb-2'>
                    <h3 className='text-3xl font-semibold mb-2'>Login</h3>
                    <p className='text-base mb-2'>Welcome Back! Please enter your details.</p>
                </div>

                {/* input box */}
                <div className='w-full flex flex-col'>
                    <input type="email" placeholder='Email'
                    className='w-full text-black py-2 my-2 bg-transparent border-b border-black/40 outline-none focus:outline-none' />

                    <input type="password" placeholder='Password'
                    className='w-full text-black py-2 my-2 bg-transparent border-b border-black/40 outline-none focus:outline-none' />
                </div>

                {/* remember me */}
                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex items-center'>
                        <input type="checkbox" className='w-4 h-4 mr-2'/>
                        <p className='text-sm'>Remember me for 30 days</p>
                    </div>

                    <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot Password?</p>
                </div>

                {/* button */}
                <div className='w-full flex flex-col my-4'>
                    <button className='cursor-pointer w-full my-1 text-white bg-[#060606] rounded-md p-3 text-center flex items-center justify-center'>Log in</button>
                    <button className='cursor-pointer w-full my-1 text-[#060606] bg-white border-2 rounded-md p-3 text-center flex items-center justify-center'>Register</button>
                </div>
               
                {/* or */}
                <div className='w-full flex items-center justify-center relative py-2'>
                    <div className='w-full h-[1px] bg-black/40'></div>
                    <p className='absolute text-black/80 bg-[#f5f5f5] text-lg px-2'>or</p>
                </div>

                {/* google */}
                <div className='cursor-pointer w-full my-2 text-[#060606] bg-white border-2 rounded-md p-3 text-center flex items-center justify-center gap-2'>
                    <FcGoogle />
                    Sign In with Google
                </div>
            </div>

             


            <div className='w-full flex items-center justify-center gap-3'>
                <p className='text-sm font-normal text-[#060606]'>
                    Don't have a account? 
                    <span className='font-semibold underline underline-offset-2 cursor-pointer ml-3'>Sign up for free</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login1