"use client"
const CheckoutForm = () => {
    const handleCheckout = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const fName = form.get('fName');
        const lName = form.get('lName');
        const phone = form.get('phone');
        const email = form.get('email');
        const message = form.get('message');
        const checkInfo = { fName, lName, phone, email, message };
        console.log(checkInfo);
    };

    return (
        <div>
            <form className="space-y-4" onSubmit={handleCheckout}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="fName"
                        placeholder="First Name"
                        className="p-3 border rounded-md w-full focus:outline-red-500"
                    />
                    <input
                        type="text"
                        name="lName"
                        placeholder="Last Name"
                        className="p-3 border rounded-md w-full focus:outline-red-500"
                    />
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
                        placeholder="Your Email"
                        className="p-3 border rounded-md w-full focus:outline-red-500"
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