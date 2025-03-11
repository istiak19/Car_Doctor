"use client";

import { useState } from "react";
import DatePicker from "react-date-picker";
import { useSession } from "next-auth/react";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const CheckoutForm = ({ data }) => {
    const router = useRouter();
    const { data: session } = useSession();
    const [value, setValue] = useState(new Date());

    const handleCheckout = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const phone = form.get("phone");
        const email = form.get("email");
        const message = form.get("message");
        const price = data?.price;
        const serviceId = data?._id;
        const serviceName = data?.title;
        const checkInfo = { serviceId, serviceName, customerName: name, phone, email, message, date: value, price };

        const res = await fetch('http://localhost:3000/api/checkout', {
            method: 'POST',
            body: JSON.stringify(checkInfo)
        });
        const postedResponse = await res.json();
        // console.log(postedResponse)
        if (postedResponse.insertedId) {
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Your checkout successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            router.push('/services')
        }
    };

    return (
        <div className="max-w-7xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleCheckout}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={session?.user?.name}
                        readOnly
                        placeholder="Your Name"
                        className="p-3 border rounded-md w-full"
                    />
                    <div className="relative">
                        <DatePicker
                            onChange={setValue}
                            value={value}
                            readOnly
                            className="w-full p-3 border rounded-md focus:outline-red-500 bg-white text-gray-700"
                            calendarClassName="rounded-lg shadow-lg p-3"
                            format="dd/MM/y"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        className="p-3 border rounded-md w-full focus:outline-red-500"
                    />
                    <input
                        type="email"
                        name="email"
                        value={session?.user?.email}
                        readOnly
                        placeholder="Your Email"
                        className="p-3 border rounded-md w-full"
                    />
                </div>
                <textarea
                    placeholder="Your Message"
                    name="message"
                    className="p-3 border rounded-md w-full h-32 focus:outline-red-500"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition duration-300"
                >
                    Order Confirm
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;