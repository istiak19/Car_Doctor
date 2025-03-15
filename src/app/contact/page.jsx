const Contact = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('/assets/images/login/background.jpg')",
                backgroundAttachment: "fixed",
            }}>
            <div className="bg-gray-100 p-5 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-4xl mx-auto my-10 border border-red-400">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Your Phone"
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                    <button className="w-full bg-red-500 text-white btn rounded-md font-semibold hover:bg-red-700 transition duration-300">
                        Contact
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;