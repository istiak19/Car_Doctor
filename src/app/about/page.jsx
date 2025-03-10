"use client";
import Team from "@/components/Team/Team";
import pic from '../../../public/assets/images/about_us/parts.jpg'
import Image from "next/image";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const AboutPage = () => {
    return (
        <div className="py-12">
            {/* About Us Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-black">
                    <Typewriter
                        words={['About Us', 'Who We Are?', 'Meet Our Team']}
                        loop={false}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <p className="text-gray-600 mt-2">
                    Meet our expert team dedicated to providing the best car services.
                </p>
            </div>
            {/* Company Overview */}
            <div className="flex flex-col lg:flex-row items-center gap-10 w-11/12 mx-auto">
                <motion.div
                    className="lg:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <Image
                        src={pic}
                        alt="About Us"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </motion.div>
                <motion.div
                    className="lg:w-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl font-semibold text-gray-700">Who We Are?</h2>
                    <p className="text-gray-600 mt-4">
                        We are a team of professionals offering top-notch car servicing solutions. Our experienced experts ensure high-quality service to keep your vehicle in top condition.
                    </p>
                </motion.div>
            </div>
            {/* Team Section */}
            <div className="mt-16">
                <Team />
            </div>
            {/* Our Mission, Vision & Values */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
                {/* Mission */}
                <motion.div
                    className="p-6 border border-red-500 bg-gray-100 rounded-lg text-center shadow-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
                    <p className="text-gray-600 mt-3">
                        To deliver high-quality and affordable car servicing, ensuring customer satisfaction and vehicle safety.
                    </p>
                </motion.div>
                {/* Vision */}
                <motion.div
                    className="p-6 border border-red-500 bg-gray-100 rounded-lg text-center shadow-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
                    <p className="text-gray-600 mt-3">
                        To become the most trusted and innovative car service provider in the industry.
                    </p>
                </motion.div>
                {/* Values */}
                <motion.div
                    className="p-6 border border-red-500 bg-gray-100 rounded-lg text-center shadow-md"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
                    <p className="text-gray-600 mt-3">
                        Quality, Integrity, Customer Satisfaction, and Innovation drive everything we do.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;