"use client"
import Image from 'next/image';
import loginPic from '../../../../public/assets/images/login/login.svg';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';
import { registerUser } from '@/app/actions/auth/registerUser';
import Swal from 'sweetalert2';
import SocialLogin from '@/components/SocialLogin/SocialLogin';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email format.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    photo: z.instanceof(File).optional(),
});

const image_key = process.env.NEXT_PUBLIC_IMAGE_KEY;

const Register = () => {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        if (!data.photo) {
            console.error("No photo selected!");
            return;
        }

        const formData = new FormData();
        formData.append("image", data.photo);
        // console.log("FormData:", [...formData.entries()][0][1].name);
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${image_key}`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Upload failed!");
        }

        const result = await response.json();
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            image: result.data.url,
            role: 'servicer'
        };

        console.log(userInfo)
        try {
            // console.log("Submitted Data:", data);
            const response = await registerUser(userInfo);
            if (response.error) {
                // alert("⚠️ " + response.error);
            } else {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "✅ Registration successful!",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    router.replace('/')
                });
            }
        }
        catch (error) {
            console.log("Error during login:", error);
        }
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/images/login/background.jpg')",
                backgroundAttachment: "fixed",
            }}>
            <div className="w-3/4 mx-auto py-10">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-full">
                        <Image
                            src={loginPic}
                            alt='Login Picture'
                            width={400}
                            height={400}
                            className="rounded-lg"
                            priority
                        />
                    </div>
                    <div className="w-full max-w-xl">
                        <h2 className='mb-5 font-bold text-center text-3xl'>Sign Up</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your email" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="photo"
                                    render={({ field: { onChange, ref, ...rest } }) => (
                                        <FormItem>
                                            <FormLabel>Upload Photo</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => onChange(e.target.files?.[0] || undefined)}
                                                    ref={ref}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your password" type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button variant="custom" type="submit">Sign Up</Button>
                            </form>
                        </Form>
                        <p className='text-center py-5 font-medium'>Or Sign Up with</p>
                        <div className='py-5'>
                            <SocialLogin></SocialLogin>
                        </div>
                        <p className='text-gray-600 text-xs text-center'>Already have an account? <span className='text-red-400 hover:underline'><Link href='/login'>Login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;