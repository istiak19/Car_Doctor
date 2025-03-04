"use server"
import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
    const userCollection =await dbConnect(collectionNames.test_users);
    const user = await userCollection.findOne({ email: payload.email });
    if (!user) {
        const result = await userCollection.insertOne(payload);
        return result;
    }
    return null;
};