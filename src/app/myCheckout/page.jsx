"use client";

import { useEffect, useState } from "react";

const MyCheckout = () => {
    const [checkInfo, setCheckInfo] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/checkout");
                const data = await res.json();
                setCheckInfo(data);
            } catch (error) {
                console.error("Error fetching checkout data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>

        </div>
    );
};

export default MyCheckout;