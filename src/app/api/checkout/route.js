import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const db = await dbConnect();
export async function GET(req) {
    const session = await getServerSession(authOptions);
    if (session) {
        const email = session?.user?.email;
        const result = await db.collection(collectionNames.checkout).find({ email }).toArray();
        return NextResponse.json(result);
    }
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
}
export async function POST(req) {
    const checkoutInfo = await req.json();
    const result = await db.collection(collectionNames.checkout).insertOne(checkoutInfo);
    return NextResponse.json(result);
};