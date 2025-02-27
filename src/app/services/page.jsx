import dbConnect, { collectionNames } from "@/lib/dbConnect";

const Services = async () => {
    const data = await dbConnect(collectionNames.test_services).find().toArray();
    console.log(data)
    return (
        <div>

        </div>
    );
};

export default Services;