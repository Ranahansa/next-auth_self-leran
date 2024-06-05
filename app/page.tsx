import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-white mb-8">
          Welcome to <span className="text-yellow-300">UserManage</span>
        </h1>
        <p className="text-xl text-gray-200 mb-12">
          Effortlessly manage your users with our powerful and intuitive platform.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/login">
            <p className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Sign In
            </p>
          </Link>
          <Link href="/register">
            <p className="bg-yellow-300 text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
              Get Started
            </p>
          </Link>
        </div>
      </div>
      <div className="mt-20">
        {/* <img src="/hero-image.svg" alt="Hero" className="w-full max-w-4xl" /> */}
      </div>
    </div>
  );
};

export default HomePage;
