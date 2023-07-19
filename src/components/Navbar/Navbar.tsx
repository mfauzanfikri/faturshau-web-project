'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const node: any = navRef.current;

    const handleClickOutside = (event: MouseEvent) => {
      if (node && !node.contains(event.target)) {
        if (isShown) {
          setIsShown(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, [navRef, isShown]);

  const handleClickToggle = () => {
    if (isShown) {
      setIsShown(false);
      return;
    }

    setIsShown(true);
  };
  return (
    <div className="fixed w-full">
      <nav ref={navRef} className="bg-black relative shadow-lg">
        <div className="mx-auto px-5 md:px-10 py-2 flex justify-between items-center text-white">
          {/* Logo */}
          <div>
            <a href="/">
              <Image
                src="/images/logo.png"
                width={150}
                height={150}
                alt="logo"
                className=""
              />
            </a>
          </div>
          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="hover:cursor-pointer"
              onClick={handleClickToggle}
            >
              <svg
                aria-hidden="true"
                role="presentation"
                className=" fill-white w-5"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
              </svg>
            </button>
          </div>
          {/* Desktop Nav Items */}
          <div className="hidden md:block">
            <ul className="flex gap-4">
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Coppywriting</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Nav Items */}
        <ul
          className={`w-full bg-white shadow-lg md:hidden absolute z-[-1] ${
            !isShown ? 'opacity-0 -top-10' : 'opacity-100 top-[58.84px]'
          } transition-all duration-300 ease-in`}
        >
          <li>
            <a href="#" className="inline-block w-full px-5 py-2 mo">
              Blog
            </a>
            <hr className="mx-3" />
          </li>
          <li>
            <a href="#" className="inline-block w-full px-5 py-2">
              Copywriting
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
