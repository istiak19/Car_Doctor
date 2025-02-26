import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const TeamSlide = ({ image }) => {
    return (
        <div className="card hover:shadow-xl p-3 border border-red-500 mb-10 w-full sm:w-80 md:w-96">
            <figure className="w-full">
                <Image
                    src={image}
                    width={400}
                    height={400}
                    alt="Shoes"
                    className="w-full h-auto"
                />
            </figure>
            <div className="text-center">
                <h2 className="font-bold text-2xl">Car Engine Plug</h2>
                <p className="text-xl font-semibold text-gray-500">Engine Expert</p>
                <div className="lg:flex justify-center items-center space-x-4 text-3xl mt-4">
                    <p><FaFacebook /></p>
                    <p><FaInstagram /></p>
                    <p><FaLinkedin /></p>
                    <p><FaTwitter /></p>
                </div>
            </div>
        </div>
    );
};

export default TeamSlide;