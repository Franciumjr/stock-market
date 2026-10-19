import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import UserDropdown from '@/components/Dropdown'



const Header = () => {
  return (
    <header className='sticky top-0 header shadow-md'>
      <div className='container header-wrapper px-4 sm:px-6'>
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white tracking-tight">
          <span className="text-yellow-400">Brade</span>
        </Link>
        <nav className='hidden sm:flex items-center'>
          <NavItems />
        </nav>
        <div className="flex items-center gap-4">
          <UserDropdown />
        </div>
      </div>
    </header>
  )
}

export default Header