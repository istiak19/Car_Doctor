"use client";
import { motion } from "framer-motion"; // Import framer-motion
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsCalendar2WeekFill } from "react-icons/bs";

const InfoSection = () => {
    return (
        <motion.div
            className="bg-black text-white p-10 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 w-11/12 mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }} // Start animation (fade-in)
            animate={{ opacity: 1, y: 0 }} // End animation
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        >
            {/* Opening Hours */}
            <motion.div
                className="flex items-center gap-4 p-4 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }} // Hover effect
            >
                <BsCalendar2WeekFill className="text-red-500 text-2xl" />
                <div>
                    <p className="text-gray-300">We are open Monday-Friday</p>
                    <h3 className="text-lg font-semibold">7:00 am - 9:00 pm</h3>
                </div>
            </motion.div>

            {/* Phone Number */}
            <motion.div
                className="flex items-center gap-4 p-4 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }} // Hover effect
            >
                <FaPhoneAlt className="text-red-500 text-2xl" />
                <div>
                    <p className="text-gray-300">Have a question?</p>
                    <h3 className="text-lg font-semibold">+8801700011111</h3>
                </div>
            </motion.div>

            {/* Address */}
            <motion.div
                className="flex items-center gap-4 p-4 rounded-lg"
                whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }} // Hover effect
            >
                <MdLocationOn className="text-red-500 text-2xl" />
                <div>
                    <p className="text-gray-300">Need a repair? Our address</p>
                    <h3 className="text-lg font-semibold">Mirpur, Dhaka</h3>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default InfoSection;