import React from 'react'
import Navbar from '../components/Navbar'
import AvatarWithBadge from '../components/AvatarWithBadge'

function About() {
  return (
      <div>
        <Navbar></Navbar>
        <div className='flex flex-col h-screen w-full'>
          <div className='flex flex-col justify-start items-center w-auto h-screen mt-20 py-6'>
            <div className='flex flex-col justify-center items-center gap-y-3 h-auto w-auto'>
              <AvatarWithBadge size="xl" 
                            bg="green.500"
                            boxSize="0.75em">
                            
              </AvatarWithBadge>
              <h1 className='text-xl text-teal-600 font-bold tracking-widest'>Aqmalmh101</h1>
              <div className='w-96 h-60 px-4 text-justify'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non deleniti ad neque eum nobis earum at sequi quos. Quod nostrum suscipit magni corrupti quae nihil doloremque molestiae ea voluptatem qui. Modi nobis commodi ipsam vitae enim assumenda voluptate doloremque voluptatibus.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About