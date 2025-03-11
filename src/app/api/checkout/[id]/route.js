import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    const p = await params;
    const query = { _id: new ObjectId(p.id) };
    const session =await getServerSession(authOptions);
    console.log('session---->', session)
    const currentCheckout = await dbConnect(collectionNames.checkout).findOne(query);
    console.log('currentCheckout----->', currentCheckout)
    const isUserOk = session?.user?.email === currentCheckout?.email;
    if (isUserOk) {
        const result = await dbConnect(collectionNames.checkout).deleteOne(query);
        return NextResponse.json(result);
    }
    else {
        return NextResponse.json({ message: 'Forbidden access' });
    }
}