import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export async function GET(res) {
    const data = await dbConnect(collectionNames.test_services).find().toArray();
    return NextResponse.json(data);
} 