import CheckoutUpdateForm from "@/components/CheckoutUpdateForm/CheckoutUpdateForm";

const CheckoutUpdate = async ({ params }) => {
    const p = await params;
    const res = await fetch(`http://localhost:3000/api/checkout/${p.id}`);
    const checkInfo = await res.json();
    // console.log(checkInfo)

    return (
        <div>
            <CheckoutUpdateForm checkInfo={checkInfo} />
        </div>
    );
};

export default CheckoutUpdate;