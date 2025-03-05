// "user server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { compare } from "bcryptjs";

export const loginUser = async (payload) => {
    const { email, password } = payload;
    const userCollection = await dbConnect(collectionNames.test_users);
    const user = await userCollection.findOne({ email });
    if (!user) return null;

    // Await the comparison of the passwords
    const isPasswordOk = await compare(password, user.password);
    
    if (!isPasswordOk) {
        return null;
    }
    
    return user;
};