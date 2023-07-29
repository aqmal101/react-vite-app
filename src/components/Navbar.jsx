import React from 'react'
import { Link as LinkRoute } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="flex flex-row justify-between bg-teal-600 sm:justify-center space-x-4 w-full fixed z-10">
            <div className='px-6 w-full h-20 flex flex-row justify-between'>
                <div className='m-6 flex flex-col justify-center'>
                <LinkRoute to={"/"} className=' hover:decoration-none'>
                    <h1 className='text-2xl text-bold text-white'>Logo</h1>
                </LinkRoute>   
                </div>

                <div className='flex flex-row items-center justify-end w-2/6 pr-8 gap-x-2'>
                        {[ ['Home', '/home'], ['Post', '/post'], ['About', '/about']].map(([title, url]) =>(
                        <a href={url} className="rounded-lg px-2 py-1 text-white font-medium hover:bg-teal-700 hover:text-white">
                        {title}</a>))}
                    <div className='bg-orange-500 rounded-lg py-2 px-3 hover:scale-110'>
                      <LinkRoute to={"/login"}>
                        <h1 className='font-bold text-white'>Login</h1>
                      </LinkRoute>
                    </div>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar