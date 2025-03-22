"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import framer-motion
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamSlide = ({ image }) => {
    return (
        <motion.div
            className="card p-3 border border-red-500 mb-10 w-full bg-white"
            whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }} // Hover effect
            transition={{ type: "spring", stiffness: 200, damping: 10 }} // Smooth animation
        >
            <figure className="w-full">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt="Team Member"
                    className="w-full h-auto rounded-lg"
                />
            </figure>
            <div className="text-center mt-4">
                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                <p className="text-xl font-semibold text-gray-500">Engine Expert</p>
                <div className="flex justify-center items-center space-x-4 text-3xl mt-4">
                    <FaFacebook className="hover:text-blue-600 cursor-pointer transition-all duration-300" />
                    <FaInstagram className="hover:text-pink-500 cursor-pointer transition-all duration-300" />
                    <FaLinkedin className="hover:text-blue-700 cursor-pointer transition-all duration-300" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer transition-all duration-300" />
                </div>
            </div>
        </motion.div>
    );
};

export default TeamSlide;