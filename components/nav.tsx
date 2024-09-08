// nav.tsx
"use client"

import { usePathname } from 'next/navigation';
import React from 'react';
import { FaDownload } from 'react-icons/fa'

const Nav = () => {
    const pathname = usePathname();
    const resumePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/files/Resume_Yuheng Chen_Purdue_ECE_PhD.pdf`

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
                    <li key={index} className={`text-gray-800 hover:text-black font-medium 
                        `}>
                        <a href={link.url} className={`${pathname === link.url ? 'text-sky-600 font-[600] underline decoration-sky-500 underline-offset-4' : ''
                            } text-sm uppercase tracking-wider`}>
                            {link.title}
                        </a>
                    </li>
                ))}
                <a
                    href={`${resumePath}`}
                    // download
                    target="_blank"        
                    rel="noopener noreferrer" 

                    className='flex items-center justify-center w-[5.5rem] h-[1.8rem] bg-gray-400 hover:bg-gray-600 text-white rounded-lg hover:bg-gray-700'
                >
                    {/* <FaDownload className='mr-2' /> */}
                    Resume
                </a>
            </ul>


        </nav>
    );
};

export default Nav;



