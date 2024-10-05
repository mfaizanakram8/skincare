'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logoImage from "@/components/images/Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border border-solid border-customBrown w-full h-[79px] flex items-center bg-gradient-to-r from-white via-light-beige to-dark-beige">
      {/* Logo */}
      <div className="pl-8">
        <Image
          src={logoImage}
          alt="beauty.skin logo"
          width={272}
          height={43}
          className="object-contain"
        />
      </div>

      {/* Hamburger menu button for small screens */}
      <div className="lg:hidden ml-auto mr-8">
        <button
          onClick={toggleMenu}
          className="text-customBrown focus:outline-none focus:text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"} // Added aria-label
          title={isOpen ? "Close menu" : "Open menu"} // Added title attribute
        >
          <svg
            className="h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Links for large screens */}
      <div
        className={`flex-grow lg:flex items-center justify-center space-x-8 text-lg hidden ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <Link href="#" className="hover:text-customBrown">
          About
        </Link>
        <Link href="#" className="hover:text-customBrown">
          Catalog
        </Link>
        <Link href="#" className="hover:text-customBrown">
          Products
        </Link>
        <Link href="#" className="hover:text-customBrown">
          Blog
        </Link>
        <Link href="#" className="hover:text-customBrown">
          Contact
        </Link>
      </div>

      {/* Sign In button */}
      <Link
        href="#"
        className="hidden lg:block mr-8 border border-solid border-customBrown px-4 py-1 text-lg text-customBrown hover:bg-customBrown hover:text-white"
      >
        Sign In
      </Link>

      {/* Mobile menu (only visible when the menu is open) */}
      {isOpen && (
        <div className="lg:hidden absolute top-[79px] left-0 w-full bg-light-beige border-t border-customBrown">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="#" className="hover:text-customBrown">
              About
            </Link>
            <Link href="#" className="hover:text-customBrown">
              Catalog
            </Link>
            <Link href="#" className="hover:text-customBrown">
              Products
            </Link>
            <Link href="#" className="hover:text-customBrown">
              Blog
            </Link>
            <Link href="#" className="hover:text-customBrown">
              Contact
            </Link>
            <Link
              href="#"
              className="mt-4 border border-solid border-customBrown px-4 py-2 text-center text-customBrown hover:bg-customBrown hover:text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
