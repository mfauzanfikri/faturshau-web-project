"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

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

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
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
    <div className="fixed left-0 top-0 z-50 w-full">
      <nav ref={navRef} className="relative bg-zinc-950 shadow-lg">
        <div className="text-light mx-auto flex items-center justify-between px-5 py-2 md:px-10 xl:px-16 2xl:px-28">
          {/* Logo */}
          <Link href="/" as={"image"}>
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-32 md:w-36 xl:w-40"
            />
          </Link>
          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button
              className="hover:cursor-pointer"
              onClick={handleClickToggle}
            >
              {isShown ? (
                <svg
                  className=" w-5 fill-white"
                  aria-hidden="true"
                  role="presentation"
                  viewBox="0 0 1000 1000"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
                </svg>
              ) : (
                <svg
                  className=" w-5 fill-white"
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
            <ul className="flex gap-4 text-zinc-400">
              <li>
                <Link
                  href="/blog"
                  className="cursor-default"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="cursor-default"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Coppywriting
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="cursor-default"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="cursor-default"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Mobile Nav Items */}
        <ul
          className={`bg-light absolute z-[-1] w-full shadow-lg md:hidden ${
            !isShown ? "-top-10 opacity-0" : "top-[52.5px] opacity-100"
          } text-zinc-400 transition-all duration-300 ease-in`}
        >
          <li>
            <Link
              href="/blog"
              className="inline-block w-full cursor-default px-5 py-2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Blog
            </Link>
            <hr className="mx-3" />
          </li>
          <li>
            <Link
              href="#"
              className="inline-block w-full cursor-default px-5 py-2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Coppywriting
            </Link>
            <hr className="mx-3" />
          </li>
          <li>
            <Link
              href="#"
              className="inline-block w-full cursor-default px-5 py-2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Portfolio
            </Link>
            <hr className="mx-3" />
          </li>
          <li>
            <Link
              href="#"
              className="inline-block w-full cursor-default px-5 py-2"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
