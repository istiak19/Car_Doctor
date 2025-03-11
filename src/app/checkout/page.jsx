"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { format } from "date-fns";
import { TiDelete } from "react-icons/ti";

const MyCheckout = () => {
    const [checkInfo, setCheckInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:3000/api/checkout");
            const data = await res.json();
            setCheckInfo(data);
        }
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:3000/api/checkout/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();
        console.log(data);
    }

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
                        checkInfo.map(info => <TableRow key={info._id}>
                            <TableCell>#</TableCell>
                            <TableCell className="font-medium">{info?.serviceName}</TableCell>
                            <TableCell>{info?.message}</TableCell>
                            <TableCell>{info?.date ? format(new Date(info.date), "dd MMM yyyy") : "N/A"}</TableCell>
                            <TableCell>${info?.price}</TableCell>
                            <TableCell className="text-right text-4xl">
                                <button onClick={() => handleDelete(info?._id)}>
                                    <TiDelete />
                                </button>
                            </TableCell>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default MyCheckout;