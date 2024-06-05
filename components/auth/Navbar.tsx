import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-white to-gray-800 shadow-lg">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <div className="text-2xl font-bold text-black">
                    <Link href="/">
                        <span className="text-gray-600">Stylish</span>
                        <span>Me</span>
                    </Link>
                </div>
                <ul className="flex space-x-8 font-semibold">
                    <li>
                        <Link
                            className="text-gray-700 hover:text-black transition duration-300"
                            href="/login"
                        >
                            Sign In
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-gray-700 hover:text-black transition duration-300"
                            href="/register"
                        >
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-gray-700 hover:text-black transition duration-300"
                            href="/admin/dashboard"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-gray-700 hover:text-black transition duration-300"
                            href="/admin/settings"
                        >
                            Settings
                        </Link>
                    </li>
                </ul>
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
