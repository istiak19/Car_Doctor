import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsCalendar2WeekFill } from "react-icons/bs";

const InfoSection = () => {
    return (
        <div className="bg-black text-white p-10 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 w-11/12 mx-auto mb-10">
            {/* Opening Hours */}
            <div className="flex items-center gap-4">
                <BsCalendar2WeekFill className="text-red-500 text-2xl" />
                <div>
                    <p className="text-gray-300">We are open monday-friday</p>
                    <h3 className="text-lg font-semibold">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            {/* Phone Number */}
            <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-red-500 text-2xl" />
                <div>
                    <p className="text-gray-300">Have a question?</p>
                    <h3 className="text-lg font-semibold">+8801700011111</h3>
                </div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-4">
                <MdLocationOn className="text-red-500 text-2xl" />
                <div>
                    <p className="text-gray-300">Need a repair? our address</p>
                    <h3 className="text-lg font-semibold">Mirpur, Dhaka</h3>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;