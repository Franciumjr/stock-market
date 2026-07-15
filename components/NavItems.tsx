"use client"

import { usePathname } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import {navitem} from '@/lib/constants'


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
        <ul className='flex flex-col sm:flex-row sm:gap-10 p-2 gap-3 justify-center font-medium'>
            {navitem.map((item) => (
                <Link href = {item.href} key = {item.id} className={`hover:text-violet-500 transition-colors ${isActive(item.href) ? 'text-white' : 'text-zinc-500'}`}>
                    {item.label}
                </Link>
            ))}
        </ul>
    )
}

export default NavItems