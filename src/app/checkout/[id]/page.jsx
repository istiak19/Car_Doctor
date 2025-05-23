import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";

export const metadata = {
    title: "Checkout | Car Doctor",
    description: "Generated by Checkout page"
}

const Checkout = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`https://car-doctor-hazel.vercel.app/api/service/${id}`)
    const data = await res.json();

    return (
        <div className="w-11/12 mx-auto">
            {/* Hero Section */}
            <div
                className="hero mt-5 rounded-lg overflow-hidden h-48 md:h-64 lg:h-80"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/V0trpS4Q/checkout.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-white text-center py-10 md:py-16">
                    <h1 className="mb-3 text-2xl md:text-4xl font-bold">Check Out : <span className="md:text-3xl text-gray-300">{data?.title}</span></h1>
                </div>
            </div>
            {/* Main content */}
            <div className="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-7xl my-14">
                {/* Form Inputs */}
                <CheckoutForm data={data}></CheckoutForm>
            </div>
        </div>
    );
};

export default Checkout;