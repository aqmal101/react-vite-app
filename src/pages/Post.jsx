import React from 'react'
import Navbar from '../components/Navbar'


function Post() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <h1 className='text-xl'>Post</h1>
      </div>
    </div>
  )
}

export default Post