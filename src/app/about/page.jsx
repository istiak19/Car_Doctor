"use client";
import Team from "@/components/Team/Team";
import pic from '../../../public/assets/images/about_us/parts.jpg'
import Image from "next/image";
const AboutPage = () => {
    return (
        <div className="py-12">
            {/* About Us Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="text-gray-600 mt-2">
                    Meet our expert team dedicated to providing the best car services.
                </p>
            </div>
            {/* Company Overview */}
            <div className="flex flex-col lg:flex-row items-center gap-10 w-11/12 mx-auto">
                <div className="lg:w-1/2">
                    <Image
                        src={pic}
                        alt="About Us"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-semibold text-gray-700">Who We Are?</h2>
                    <p className="text-gray-600 mt-4">
                        We are a team of professionals offering top-notch car servicing solutions. Our experienced experts ensure high-quality service to keep your vehicle in top condition.
                    </p>
                </div>
            </div>
            {/* Team Section */}
            <div className="mt-16">
                <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Meet Our Team</h2>
                <Team></Team>
            </div>

            {/* Our Mission, Vision & Values */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
                {/* Mission */}
                <div className="p-6 bg-gray-100 rounded-lg text-center shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
                    <p className="text-gray-600 mt-3">
                        To deliver high-quality and affordable car servicing, ensuring customer satisfaction and vehicle safety.
                    </p>
                </div>
                {/* Vision */}
                <div className="p-6 bg-gray-100 rounded-lg text-center shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
                    <p className="text-gray-600 mt-3">
                        To become the most trusted and innovative car service provider in the industry.
                    </p>
                </div>
                {/* Values */}
                <div className="p-6 bg-gray-100 rounded-lg text-center shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
                    <p className="text-gray-600 mt-3">
                        Quality, Integrity, Customer Satisfaction, and Innovation drive everything we do.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;