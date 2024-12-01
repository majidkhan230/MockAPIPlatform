import React from 'react'

function Header() {
  return (
    <div className='flex items-center justify-between h-20 '>
        <div className="logo text-xl font-bold">
            JsonPlaceholder
        </div>
        <ul className='space-x-5 hidden md:flex '>
            <li>Guide</li>
            <li>Sponsor this project</li>
            <li>Blog</li>
            <li>My Json Server</li>
        </ul>
    </div>
  )
}

export default Header