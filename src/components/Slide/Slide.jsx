import Image from "next/image";
import Link from "next/link";

const Slide = ({ image }) => {
    return (
        <div className="relative w-full h-[500px]">
            <Image
                src={image}
                alt="Background"
                fill
                className="object-cover w-full h-full"
                priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            {/* Content */}
            <div className="relative flex items-center justify-center w-full h-full">
                <div className="text-center text-white">
                    <h1 className="text-3xl font-semibold lg:text-4xl">
                        Affordable Price For Car Servicing
                    </h1>
                    <p className="text-gray-300">
                        There are many variations of passages available, but the majority
                        have suffered alteration in some form.
                    </p>
                    <br />
                    <div>
                        <Link
                            href="/services"
                            className="btn bg-transparent mt-2 mr-4 text-sm font-medium text-white border-2 border-red-600 rounded-lg hover:bg-red-600"
                        >
                            Discover More
                        </Link>
                        <Link
                            href="/about"
                            className="btn bg-transparent mt-2 text-sm font-medium text-white border-2 border-red-600 rounded-lg hover:bg-red-600"
                        >
                            Latest Project
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;