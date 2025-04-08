import CheckoutUpdateForm from "@/components/CheckoutUpdateForm/CheckoutUpdateForm";
import { headers } from "next/headers";

const CheckoutUpdate = async ({ params }) => {
    const p = await params;
    const res = await fetch(`https://car-doctor-hazel.vercel.app/api/checkout/${p.id}`, {
        headers: await headers()
    });
    const checkInfo = await res.json();
    // console.log(checkInfo)

    return (
        <div>
            <CheckoutUpdateForm checkInfo={checkInfo} />
        </div>
    );
};

export default CheckoutUpdate;