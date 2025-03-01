import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    const p = await params;
    const data = await dbConnect(collectionNames.test_services).findOne({ _id: new ObjectId(p.id) });
    return Response.json(data);
}