import React from 'react'

function Navbar() {
  return (
    <nav className='m-0'>
        <div className='flex gap-20 bg-black text-white justify-between w-[100vw] '>
            <div className='mx-10 py-2 cursor-pointer font-bold'>piyush</div>
            <div className='flex gap-10 py-2'>
              <span className='cursor-pointer font-bold'>home</span>
              <span className='cursor-pointer font-bold'>about</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
