import React from 'react'

function Header() {
  return (
    <div className='bg-[#f8e5e5] h-[5rem] w-screen fixed drop-shadow-lg md:px-8'>
        <div className='flex justify-between md:items-center h-full w-full'>
            <div className='sm: flex items-center'>
                <h1>Logo</h1>
            </div>
            <ul className='hidden md:flex space-between gap-[8rem] font-bold'>
                <li>Our Offerings</li>
                <li>Contact</li>
                <li>Blogs</li>
            </ul>
            <ul className='hidden absolute bg-[#f8e5e5] right-0 px-10 font-bold'>
                <li className='sm: my-8'>Our Offerings</li>
                <li className='sm: my-8'>Contact</li>
                <li className='sm: my-8'>Blogs</li>
            </ul>
        </div>
    </div>
  )
}

export default Header