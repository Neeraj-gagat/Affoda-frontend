"use client"
// import { Poppins } from 'next/font/google';
import React from 'react';
import Link  from 'next/link';
import { Menu, X, Globe, User, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { IoIosPaperPlane } from "react-icons/io";


export const AppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`bg-white shadow-sm fixed w-screen top-0 z-50`}>
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <span className="relative text-3xl font-[400] text-affoda-blue z-20">affoda</span>
              <div className="absolute -top-3 -right-8 w-8 h-8">
                <div className="absolute inset-0 transform animate-float">
                  {/* <div className="w-5 h-5 bg-affoda-yellow transform -rotate-120 -translate-x-12" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div> */}
                  <div className="w-5 h-5 transform rotate-12 -translate-x-5">
                  <IoIosPaperPlane size={20} color='#f9e12a' />
                  </div>
                </div>
              </div>
              <div className="absolute top-[17px] right-[26px] w-2.5 h-2.5 bg-affoda-light-blue rounded-full z-0"></div>
            </div>
            <span className=" text-affoda-blue text-sm hidden sm:block font-[400] translate-y-5 -translate-x-24">travel for less</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-18 uppercase text-[14px]">
            <Link href="/" className="text-gray-700 hover:text-affoda-blue font-medium">Hotels</Link>
            <Link href="/about" className="text-gray-700 hover:text-affoda-blue font-medium">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-affoda-blue font-medium">Contact</Link>
          </nav>

          {/* User Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center text-gray-700">
              <Globe className="h-4 w-4 mr-1" />
              <span>EN</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="ghost" className="flex items-center text-gray-700">
              <span>USD</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
            <Button variant="outline" className="flex items-center border-affoda-blue text-affoda-blue hover:bg-affoda-blue/5">
              <User className="h-4 w-4 mr-2" />
              <span>Sign in</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-affoda-blue">Hotels</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-affoda-blue">About</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-affoda-blue">Contact</Link>
            <hr className="my-2" />
            <Button variant="outline" className="w-full justify-center border-affoda-blue text-affoda-blue hover:bg-affoda-blue/5">
              <User className="h-4 w-4 mr-2" />
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
