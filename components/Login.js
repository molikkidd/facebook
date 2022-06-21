import Image from 'next/image'
import React from 'react'
import {signIn} from 'next-auth/react'

function Login() {
  return (
    <div className='grid place-items-center mt-20'>
        <Image
        src="https://links.papareact.com/5me"
        height={400}
        width={400}
        objectFit="contain"
        />
        <h1 
        onClick={signIn}
        className='p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer mt-10'>Login with Facebook</h1>
    </div>
  )
}

export default Login