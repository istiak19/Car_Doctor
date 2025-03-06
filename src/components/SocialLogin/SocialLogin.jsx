"use client";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SocialLogin() {
    const session = useSession();
    const router = useRouter();

    const handleSocialLogin = async (providerName) => {
        // console.log(providerName);
        await signIn(providerName);
    };

    useEffect(() => {
        if (session.status === 'authenticated') {
            router.push('/')
        }
    }, [session.status])

    return (
        <div className="flex space-x-6 justify-center">
            {/* Google */}
            <button
                type="button"
                onClick={() => handleSocialLogin("google")}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-md hover:shadow-lg transition">
                <FcGoogle className="text-2xl" />
            </button>
            {/* GitHub */}
            <button
                type="button"
                onClick={() => handleSocialLogin("github")}
                className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 shadow-md hover:shadow-lg transition">
                <FaGithub className="text-black text-2xl" />
            </button>
        </div>
    );
};