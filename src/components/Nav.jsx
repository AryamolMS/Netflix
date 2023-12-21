import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show,setShow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>600){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
  return (
    <div className={`${show && 'nav-bar'} nav`}>
        <img src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="no image" width={100}/>
    </div>
  )
}

export default Nav