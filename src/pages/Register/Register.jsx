import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='w-full flex justify-center items-center h-[70vh]'>
        <div className='flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]'>
            <h1 className='text-xl text-left font-bold'>
                Create an account
            </h1>
            <input type="text" className='w-full px-4 py-4 border-2 border-black outline-0' placeholder='Enter your username'/>
            <input type="text" className='w-full px-4 py-4 border-2 border-black outline-0' placeholder='Enter your email'/>
            <input type="password" className='w-full px-4 py-4 border-2 border-black outline-0' placeholder='Enter your password'/>

            <button className='w-full px-4 py-4 text-lg font-bold rounded-lg bg-black text-white hover:bg-gray-500'>Register</button>

            <div className='flex space-x-3 justify-center items-center'>
                <p>Already have an account?</p>
                <p><Link to='/login' className='text-gray-500 hover:text-black'>Login</Link></p>
            </div>
            
        </div>

    </div>
  )
}

export default Register