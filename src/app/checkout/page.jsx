"use client";

import { FaEdit } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import CheckoutDelete from "@/components/CheckoutDelete/CheckoutDelete";
import Link from "next/link";

const MyCheckout = () => {
    const [checkInfo, setCheckInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://car-doctor-hazel.vercel.app/api/checkout");
            const data = await res.json();
            setCheckInfo(data);
        }
        fetchData();
    }, []);

    return (
        <div className="w-11/12 mx-auto py-10">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Service Name</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        checkInfo.map((info, idx) => (
                            <TableRow key={info._id}>
                                <TableCell>{idx + 1}</TableCell>
                                <TableCell className="font-medium">{info?.serviceName}</TableCell>
                                <TableCell>{info?.message}</TableCell>
                                <TableCell>${info?.price}</TableCell>
                                <TableCell>{info?.date ? format(new Date(info.date), "dd MMM yyyy") : "N/A"}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex gap-3 justify-end items-center">
                                        {/* Edit Button */}
                                        <Link href={`/checkoutUpdate/${info?._id}`}>
                                            <FaEdit className="text-lg" />
                                        </Link>
                                        {/* Delete Button */}
                                        <CheckoutDelete setCheckInfo={setCheckInfo} info={info} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default MyCheckout;