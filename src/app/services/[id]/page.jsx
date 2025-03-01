import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import logoPic from "../../../../public/assets/logo.svg";

const ServiceDetails = async ({ params }) => {
    const { id } = await params;
    const data = await dbConnect(collectionNames.test_services).findOne({ _id: new ObjectId(id) });
    const services = await dbConnect(collectionNames.test_services).find().toArray();

    return (
        <div className="w-11/12 mx-auto">
            {/* Hero Section */}
            <div
                className="hero mt-5 rounded-lg overflow-hidden h-48 md:h-64 lg:h-80"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/V0trpS4Q/checkout.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-white text-center py-10 md:py-16">
                    <h1 className="mb-3 text-2xl md:text-4xl font-bold">Service Details</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                {/* Left Section - Service Details */}
                <div className="py-10 col-span-8">
                    <Image
                        className="rounded-lg w-full h-auto md:h-80 object-cover"
                        src={data?.img}
                        width={850}
                        height={400}
                        alt="Service image"
                    />
                    <div className="space-y-4 mt-4">
                        <h1 className="font-bold text-2xl md:text-3xl">{data?.title}</h1>
                        <p className="text-gray-500 text-justify">{data?.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data?.facility?.map((f, idx) => (
                                <div
                                    className="bg-red-200 p-6 md:p-8 space-y-2 rounded-md border-t-4 border-t-red-400 shadow-md hover:shadow-xl"
                                    key={idx}
                                >
                                    <h2 className="text-lg md:text-xl font-bold">{f?.name}</h2>
                                    <p className="text-gray-600 text-justify">{f?.details}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="col-span-4 py-10">
                    {/* Services List */}
                    <div className="rounded-lg bg-red-200 p-5">
                        <h1 className="font-bold text-xl md:text-2xl">Services</h1>
                        {services?.map((service) => (
                            <Link key={service._id} href={`/services/${service?._id}`}>
                                <div className="bg-white/50 flex p-3 rounded-md mt-2 justify-between items-center hover:bg-red-500 hover:text-white *:font-semibold">
                                    <h2>{service?.title}</h2>
                                    <p>
                                        <FaArrowRightLong />
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Download Section */}
                    <div className="bg-black p-6 rounded-lg mt-7">
                        <h2 className="text-white text-lg font-semibold mb-4">Download</h2>
                        <div className="space-y-4">
                            {["Our Brochure", "Company Details"].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <FaFileAlt className="text-white text-xl" />
                                        <div>
                                            <p className="text-white font-medium">{item}</p>
                                            <p className="text-gray-400 text-sm">Download</p>
                                        </div>
                                    </div>
                                    <button className="bg-red-600 p-3 rounded-lg text-white">
                                        <HiOutlineArrowRight className="text-lg" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Special Offer */}
                    <div className="bg-black p-6 md:p-10 rounded-lg mt-7 text-center">
                        <div className="flex justify-center mb-3">
                            <Image width={120} height={100} src={logoPic} alt="logo" />
                        </div>
                        <p className="text-gray-300 text-sm mt-1">Need Help? We Are Here To Help You</p>
                        <div className="relative mx-auto w-full max-w-[260px] bg-white py-6 px-4 rounded-lg mt-4">
                            <p className="text-black font-semibold">
                                <span className="text-red-600">Car Doctor</span> Special
                            </p>
                            <p className="text-gray-500 text-sm">
                                Save up to <span className="text-red-600 font-bold">60% off</span>
                            </p>
                            <button className="bg-red-600 absolute left-1/2 -translate-x-1/2 -bottom-6 text-white px-4 py-2 rounded-lg font-semibold shadow-md">
                                Get A Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;