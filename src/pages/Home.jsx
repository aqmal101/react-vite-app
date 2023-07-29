import React from "react";
import Navbar from "../components/Navbar";

function Home(){
    return (
        <div>
        <Navbar></Navbar>
        <div className='w-full h-screen flex flex-col justify-center items-center'>
          <h1 className='text-xl'>Home</h1>
        </div>
      </div>
    )
}

export default Home