"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import {NAV_ITEMS} from '@/lib/constants'


const NavItems = () => {
    // returns the current path name
    const pathName = usePathname(); 

    const isActive = (path: string) => {
        // BASE CASE: if its on home page just return /
        if (path === "/") return pathName === "/"
        // returns true if pathName is a subset of path 
        return pathName.startsWith(path);
    }
    

    return (
        <ul className='flex flex-col sm:flex-row sm:gap-8 p-2 gap-3 justify-center font-medium'>
            {NAV_ITEMS.map((item) => (
                <Link 
                    href={item.href} 
                    key={item.href} 
                    className={`hover:text-yellow-400 transition-colors ${isActive(item.href) ? 'text-yellow-400 font-semibold' : 'text-gray-400'}`}
                >
                    {item.label}
                </Link>
            ))}
        </ul>
    )
}

export default NavItems