
import React from 'react';
import Link  from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, CreditCard, Shield } from 'lucide-react';
import { IoIosPaperPlane } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-affoda-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative mb-4 flex">
              <span className="relative text-3xl font-[400] text-white z-20">affoda</span>
              <div className="absolute -top-3 -right-8 w-8 h-8">
                <div className="absolute inset-0 transform animate-float">
                  <div className="w-5 h-5  transform rotate-12 -translate-x-[275px] md:-translate-x-[195px]" >
                    <IoIosPaperPlane size={20} color='#08B5F3' className='' />
                  </div>
                </div>
              </div>
              <div className='-translate-x-[1px]'>
              <div className="absolute top-[33px] right-[5px] w-2.5 h-2.5 bg-[#FD79BC] rounded-full z-0"></div>
              <div className="absolute top-[33px] right-[26px] w-2.5 h-2.5 bg-[#FEA952] rounded-full z-0"></div>
              <div className="absolute top-[33px] right-[46px] w-2.5 h-2.5 bg-[#42E442] rounded-full z-0"></div>
              <div className="absolute top-[33px] right-[66px] w-2.5 h-2.5 bg-[#38D1F0] rounded-full z-0"></div>
              <div className="absolute top-[33px] right-[86px] w-2.5 h-2.5 bg-[#FFFF51] rounded-full z-0"></div>
              </div>
              {/* <div className="-translate-x-[262px] md:-translate-x-[180px] absolute top-[17px] right-[26px] w-2.5 h-2.5 bg-affoda-light-blue rounded-full z-0"></div> */}
            </div>
            <p className="text-gray-300 mb-4">
              Book accommodations around the world at affordable prices. 
              Find the perfect stay for your next trip.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-affoda-yellow">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-affoda-yellow">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-affoda-yellow">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-affoda-yellow">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">New York</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">London</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Paris</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Tokyo</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Dubai</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Singapore</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Booking Conditions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Cancellation Policy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">About Us</Link></li>
              {/* <li><Link href="#" className="text-gray-300 hover:text-white">Privacy Policy</Link></li> */}
              {/* <li><Link href="#" className="text-gray-300 hover:text-white">Terms of Service</Link></li> */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-affoda-yellow" />
                <span className="text-gray-300">support@affoda.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-affoda-yellow" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              {/* <li className="flex items-start">
                <Smartphone className="h-5 w-5 mr-2 mt-0.5 text-affoda-yellow" />
                <span className="text-gray-300">Download our mobile app</span>
              </li> */}
            </ul>
            {/* <div className="mt-4 flex space-x-2">
              <div className="bg-white p-1 rounded-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-8" />
              </div>
              <div className="bg-white p-1 rounded-md">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-8" />
              </div>
            </div> */}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Affoda. All rights reserved.
            </div>
            <div className="flex space-x-6 items-center">
              <div className="flex items-center text-gray-300 text-sm">
                <Shield className="h-4 w-4 mr-1 text-affoda-yellow" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-gray-300" />
                <img src="https://cdn.worldvectorlogo.com/logos/visa-10.svg" alt="Visa" className="h-3 md:h-6" />
                <img src="mscard.svg" alt="MasterCard" className="h-3 md:h-6" />
                <img src="https://cdn.worldvectorlogo.com/logos/paypal-4.svg" alt="PayPal" className="h-6 md:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;