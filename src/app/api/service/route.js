import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req) {
    const data = await dbConnect(collectionNames.test_services).find().toArray();
    return NextResponse.json(data);
}