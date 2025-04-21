import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const db = await dbConnect();
export async function GET(req, { params }) {
    const { id } = params;
    const data = await db.collection(collectionNames.test_services).findOne({ _id: new ObjectId(id) });
    return NextResponse.json(data);
} 