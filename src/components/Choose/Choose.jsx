"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle/SectionTitle";
import pic1 from '../../../public/assets/icons/check.svg';
import pic2 from '../../../public/assets/icons/deliveryt.svg';
import pic4 from '../../../public/assets/icons/group.svg';
import pic5 from '../../../public/assets/icons/person.svg';
import pic6 from '../../../public/assets/icons/Wrench.svg';

const Choose = () => {
    const features = [
        { img: pic1, title: "100% Guaranty" },
        { img: pic2, title: "Timely Delivery" },
        { img: pic5, title: "24/7 Support" },
        { img: pic6, title: "Best Equipment" },
        { img: pic4, title: "Expert Team" }
    ];

    return (
        <div className="pb-10">
            <SectionTitle subTitle={'Core Features'} title={'Why Choose Us'}
                description={"The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable."}
            />

            <div className="flex flex-wrap justify-center gap-4 px-3">
                {
                    features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }} // Start small and invisible
                            animate={{ opacity: 1, scale: 1 }} // Animate to full size
                            transition={{ duration: 0.5, delay: index * 0.2 }} // Add delay effect
                            whileHover={{ scale: 1.1 }} // Hover effect
                            className="flex flex-col justify-center items-center border border-red-300 p-3 rounded-md hover:bg-red-600 hover:text-white hover:shadow-xl w-full sm:w-1/2 md:w-1/4"
                        >
                            <Image src={feature.img} alt={feature.title} />
                            <h2 className="font-bold text-gray-600">{feature.title}</h2>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default Choose;