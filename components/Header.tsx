import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import UserDropdown from '@/components/Dropdown'



const Header = () => {
  return (
    <header className='sticky top-0 header flex flex-col'>
      <div className='container flex justify-between sm:px-5 px-10'>
        <Link href ="/">
          
          Signalist
        </Link>
        <nav className='hidden sm:block'>
          <NavItems></NavItems>
        </nav>
        
        <UserDropdown></UserDropdown>
      </div>
    </header>
  )
}

export default Header