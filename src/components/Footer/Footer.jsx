"use client";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logoPic from "../../../public/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6">
        {/* Logo & Description */}
        <div>
          <Image className="h-16 w-16 mb-3" src={logoPic} alt="CarDoctor Logo" />
          <p className="text-sm text-gray-400">
            CarDoctor is your trusted partner for expert car maintenance and repair services.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-lg cursor-pointer hover:text-red-500 transition duration-300" />
            <FaTwitter className="text-lg cursor-pointer hover:text-red-500 transition duration-300" />
            <FaInstagram className="text-lg cursor-pointer hover:text-red-500 transition duration-300" />
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h6 className="text-lg font-semibold mb-4">About</h6>
          <ul className="space-y-2">
            <li><a className="text-gray-400 text-sm hover:text-white transition duration-300" href="#">Home</a></li>
            <li><a className="text-gray-400 text-sm hover:text-white transition duration-300" href="/services">Services</a></li>
            <li><a className="text-gray-400 text-sm hover:text-white transition duration-300" href="/contact">Contact</a></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><a className="text-gray-400 hover:text-white transition duration-300 text-sm" href="#">Why CarDoctor</a></li>
            <li><a className="text-gray-400 hover:text-white transition duration-300 text-sm" href="#">About Us</a></li>
          </ul>
        </div>
        {/* Newsletter Subscription */}
        <div>
          <h6 className="text-lg font-semibold mb-4">Newsletter</h6>
          <p className="text-sm text-gray-400 mb-3">Subscribe to get the latest car maintenance tips!</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter email" 
              className="w-full p-2 rounded-l-md text-black"
            />
            <button className="bg-red-500 px-4 text-white rounded-r-md hover:bg-red-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="text-center mt-10 text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CarDoctor. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;