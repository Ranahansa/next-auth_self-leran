import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <header className='bg-gray-400 text-white'>
            <nav className='flex justify-between items-center w-full px-10 py-4'>
                <h1>Logo</h1>
                <div className='flex gap-8'>
                    <Link href='/'>Home</Link>
                    <Link href = '/CreateUser'>Create User</Link>
                    <Link href = '/ClientMember'>Member</Link>
                    <Link href = '/Denied'>Denied</Link>
                    <Link href = '/Member'>Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default NavBar