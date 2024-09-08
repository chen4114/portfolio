// nav.tsx
"use client"

import { usePathname } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import React from 'react';

const Nav = () => {
    // const router = useRouter();
    const pathname = usePathname();
    // console.log(router)

    const links = [
        { title: "Home", url: `${process.env.NEXT_PUBLIC_BASE_PATH}/` },
        { title: "Industrial Experience", url: `${process.env.NEXT_PUBLIC_BASE_PATH}/industrial-experience` },
        { title: "Research/Publications", url: `${process.env.NEXT_PUBLIC_BASE_PATH}/research-experience` },
        { title: "News", url: `${process.env.NEXT_PUBLIC_BASE_PATH}/news` }
    ];

    return (
        <nav className='bg-white py-4'>
            <ul className='flex justify-center space-x-10'>
                {links.map((link, index) => (
                    <li key={index} className={`text-gray-800 hover:text-black font-medium ${
                        pathname === link.url ? 'text-blue-500 underline decoration-sky-500 underline-offset-4' : ''
                    }`}>
                        <a href={link.url} className="text-sm uppercase tracking-wider">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;
