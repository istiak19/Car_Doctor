import dbConnect, { collectionNames } from "@/lib/dbConnect";

export async function GET() {
    const data = await dbConnect(collectionNames.test_services).find().toArray();
    return Response.json(data);
}