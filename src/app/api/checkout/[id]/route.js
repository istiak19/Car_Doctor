"use server";

import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const p = await params;
        const query = { _id: new ObjectId(p.id) };
        const session = await getServerSession(authOptions);
        const result = await dbConnect(collectionNames.checkout).findOne(query);
        const isUserOk = session?.user?.email === result?.email;
        if (isUserOk) {
            return NextResponse.json(result);
        }
        else {
            return NextResponse.json({ message: 'Forbidden access' });
        }
    } catch {
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(req, { params }) {
    try {
        const p = await params;
        const filter = { _id: new ObjectId(p.id) };
        const session = await getServerSession(authOptions);
        const singleCheckout = await dbConnect(collectionNames.checkout).findOne(filter);
        const isUserOk = session?.user?.email === singleCheckout?.email;
        if (isUserOk) {
            const checkInfo = await req.json();
            const updateDoc = {
                $set: {
                    phone: checkInfo.phone,
                    message: checkInfo.message,
                    date: checkInfo.date
                },
            };
            const result = await dbConnect(collectionNames.checkout).updateOne(filter, updateDoc, { upsert: true });
            return NextResponse.json(result);
        }
        else {
            return NextResponse.json({ message: 'Forbidden access' });
        }
    } catch (error) {
        console.error("PATCH Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(req, { params }) {
    const p = await params;
    const query = { _id: new ObjectId(p.id) };
    const session = await getServerSession(authOptions);
    // console.log('session----delete>', session)
    const currentCheckout = await dbConnect(collectionNames.checkout).findOne(query);
    // console.log('currentCheckout-----delete>', currentCheckout)
    const isUserOk = session?.user?.email === currentCheckout?.email;
    if (isUserOk) {
        const result = await dbConnect(collectionNames.checkout).deleteOne(query);
        return NextResponse.json(result);
    }
    else {
        return NextResponse.json({ message: 'Forbidden access' });
    }
}