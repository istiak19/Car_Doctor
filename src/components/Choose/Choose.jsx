import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import pic1 from '../../../public/assets/icons/check.svg';
import pic2 from '../../../public/assets/icons/deliveryt.svg';
import pic4 from '../../../public/assets/icons/group.svg';
import pic5 from '../../../public/assets/icons/person.svg';
import pic6 from '../../../public/assets/icons/Wrench.svg';

const Choose = () => {
    return (
        <div className="pb-10">
            <SectionTitle subTitle={'Core Features'} title={'Why Choose Us'} description={"The majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. "}></SectionTitle>
            <div className="flex flex-wrap justify-center gap-4 px-3">
                <div className="flex flex-col justify-center items-center border border-red-300 p-3 rounded-md hover:bg-red-600 *:hover:text-white hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
                    <Image src={pic1} alt="check" />
                    <h2 className="font-bold text-gray-600">100% Guaranty</h2>
                </div>
                <div className="flex flex-col justify-center items-center border border-red-300 p-3 rounded-md hover:bg-red-600 *:hover:text-white hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
                    <Image src={pic2} alt="check" />
                    <h2 className="font-bold text-gray-600">Timely Delivery</h2>
                </div>
                <div className="flex flex-col justify-center items-center border border-red-300 p-3 rounded-md hover:bg-red-600 *:hover:text-white hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
                    <Image src={pic5} alt="check" />
                    <h2 className="font-bold text-gray-600">24/7 Support</h2>
                </div>
                <div className="flex flex-col justify-center items-center border border-red-300 p-3 rounded-md hover:bg-red-600 *:hover:text-white hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
                    <Image src={pic6} alt="check" />
                    <h2 className="font-bold text-gray-600">Best Equipment</h2>
                </div>
                <div className="flex flex-col justify-center items-center border border-red-300 p-3 rounded-md hover:bg-red-600 *:hover:text-white hover:shadow-xl w-full sm:w-1/2 md:w-1/4">
                    <Image src={pic4} alt="check" />
                    <h2 className="font-bold text-gray-600">Expert Team</h2>
                </div>
            </div>
        </div>
    );
};

export default Choose;