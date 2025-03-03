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

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email format.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
});


const Login = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Submitted Data:", data);
    };

    return (
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
                    <div>
                        Social login
                    </div>
                    <p className='text-gray-600 text-xs text-center'>Already have an account? <span className='text-red-400 hover:underline'><Link href='/login'>Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;