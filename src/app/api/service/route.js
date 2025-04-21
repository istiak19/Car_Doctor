import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

const db = await dbConnect();
export async function GET(req) {
    const data = await db.collection(collectionNames.test_services).find().toArray();
    return NextResponse.json(data);
}