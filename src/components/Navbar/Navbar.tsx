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
    <div className="fixed w-full top-0 left-0">
      <nav ref={navRef} className="bg-black relative shadow-lg">
        <div className="mx-auto px-5 md:px-10 py-2 flex justify-between items-center text-white">
          {/* Logo */}
          <div>
            <a href="/">
              <Image
                src="/images/logo.png"
                width={130}
                height={130}
                alt="logo"
                className="w-32 md:w-36 xl:w-40"
              />
            </a>
          </div>
          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="hover:cursor-pointer"
              onClick={handleClickToggle}
            >
              {isShown ? (
                <svg
                  className=" fill-white w-5"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                </svg>
              ) : (
                <svg
                  className=" fill-white w-5"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
                </svg>
              )}
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
            !isShown ? 'opacity-0 -top-10' : 'opacity-100 top-[52.5px]'
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
              Coppywriting
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
