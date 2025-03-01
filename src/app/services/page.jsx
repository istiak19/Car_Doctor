import dbConnect, { collectionNames } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Services = async ({ services }) => {
    const data = await dbConnect(collectionNames.test_services).find().toArray();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto my-10">
            {
                data?.map(service => <div className="border border-red-400 p-3 rounded-md" key={service._id}>
                    <Image
                        src={service?.img}
                        width={500}
                        height={300}
                        style={{ width: "auto", height: "208px" }}
                        className="object-cover rounded-md"
                        alt="Service image"
                    />
                    <h2 className="text-xl font-semibold">{service?.title}</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-red-500">Price: {service?.price} $</p>
                        <Link className="text-red-500" href={`/services/${service?._id}`}><FaArrowUpRightFromSquare /></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Services;