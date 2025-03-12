"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Form, FormControl, FormField, FormItem, FormMessage
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const AddService = () => {
    const form = useForm({
        defaultValues: {
            title: "",
            img: "",
            price: "",
            service_id: "",
            description: "",
        },
    });

    const onSubmit = (data) => {
        console.clear();
        // console.log('Submitted Form Data:', data)
        const facility = [
            { name: "Instant Car Services", details: "Quick and reliable service to get your car back on the road without delay." },
            { name: "24/7 Quality Service", details: "Available anytime to provide top-notch service for your vehicle's needs." },
            { name: "Easy Customer Service", details: "Friendly and hassle-free support to ensure a seamless experience." },
            { name: "Quality Cost Service", details: "Affordable and high-quality service to keep your car in top condition." }
        ];
        const serviceInfo = { title: data.title, img: data.img, price: data.price, service_id: data.service_id, description: data.description, facility };
        console.log(serviceInfo)

        form.reset({
            title: "",
            img: "",
            price: "",
            service_id: "",
            description: "",
        });
    };

    return (
        <div className="flex items-center justify-center py-10">
            <Card className="p-8 w-full max-w-4xl shadow-md bg-gray-50">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        {/* First Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Service Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="img"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Photo URL" type="link" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/* Second Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="service_id"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Service ID" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Service Price" type="number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        {/* Description */}
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea placeholder="Product Description" className="h-32" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                            Submit
                        </Button>
                    </form>
                </Form>
            </Card>
        </div>
    );
};

export default AddService;