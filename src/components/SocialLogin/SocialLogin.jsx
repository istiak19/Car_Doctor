import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
    return (
        <div>
            <form action="" className="flex space-x-6 justify-center">
                {/* Facebook */}
                <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-md hover:shadow-lg transition">
                    <FaFacebookF className="text-blue-600 text-2xl" />
                </button>

                {/* LinkedIn */}
                <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-md hover:shadow-lg transition">
                    <FaLinkedinIn className="text-blue-500 text-2xl" />
                </button>

                {/* Google */}
                <button className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-md hover:shadow-lg transition">
                    <FcGoogle className="text-2xl" />
                </button>
            </form>
        </div>
    );
};