import Link from 'next/link'; // Importing the Link component from Next.js
import React from 'react';

/**
 * Navbar component for the application.
 * 
 * @returns JSX.Element The rendered Navbar.
 */
const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-white to-gray-800 shadow-lg">
            {/* Container for the navigation bar */}
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-black">
                    <Link href="/">
                        <a>
                            {/* Link to the homepage */}
                            <span className="text-gray-600">Stylish</span>
                            <span>Me</span>
                        </a>
                    </Link>
                </div>
                {/* Navigation links */}
                <ul className="flex space-x-8 font-semibold">
                    <li>
                        <Link href="/login">
                            <a className="text-gray-700 hover:text-black transition duration-300">
                                Sign In
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/register">
                            <a className="text-gray-700 hover:text-black transition duration-300">
                                Register
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/dashboard">
                            <a className="text-gray-700 hover:text-black transition duration-300">
                                Dashboard
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/settings">
                            <a className="text-gray-700 hover:text-black transition duration-300">
                                Settings
                            </a>
                        </Link>
                    </li>
                </ul>
                {/* Logout button */}
                <form>
                    <button
                        type="submit"
                        className="px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-black transition duration-300"
                    >
                        Logout
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
