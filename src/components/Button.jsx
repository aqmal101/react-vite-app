import React, { Children } from 'react'
import { Link } from 'react-router-dom'

function Button({title, className, children}) {

  return (
    <button style={{padding: '3px 10px', 
                    cursor: 'pointer', 
                    borderRadius: '5px',
                    outline: 'none',
                    border: 'none',
                    color: 'white'
    }} className= {className} >
    {children}
    {/* childern menjadi title dari tombol*/}
    </button>
  )
}

export default Button