'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { WalletSelector } from '../WalletSelector';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
 
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white dark:bg-gray-900 fixed -top-3 z-10">
        <div className="container flex flex-row flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-row md:flex-row">
            <Link href="/" className="flex items-center mb-5 font-medium text-gray-900 dark:text-gray-100 lg:w-auto lg:items-center lg:justify-center md:mb-0">
              <span className="mx-auto text-xl font-black leading-none text-gray-900 dark:text-gray-100 select-none">
                <Image src='/logo.png' alt='Logo' height={50} width={50} />
              </span>
            </Link>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200 dark:md:border-gray-700">
              <Link href="/" className="mr-5 font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                Home
              </Link>
              <a href="#feature-gigs" className="mr-5 font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                Explore Hacks
              </a>
              <Link href="" className="mr-5 font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                Bridge
              </Link>
              <Link href="" className="mr-5 font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                Extension
              </Link>
              <Link href="" className="mr-5 font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                SDK
              </Link>
              <a href="#faqs" className="mr-5 font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                FAQs
              </a>
              <Link href="https://quickest-reaction-568.notion.site/UniPay-Claim-Bounties-Across-any-chain-no-gas-no-hassle-127a260a8fdc808ebde3d55d93c326f6?pvs=4" target="_blank" className="mr-5 font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">
                Docs
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="mr-5 font-medium leading-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
   
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;