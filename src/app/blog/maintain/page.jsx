import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const Maintain = () => {
    return (
        <div className="container mx-auto p-6">
            <Link href='/blog' className="text-red-500 text-2xl"><FaArrowLeft /></Link>
            <h1 className="text-4xl font-bold mb-6">How to Maintain Your Car's Engine</h1>
            <p className="text-lg mb-6">
                Regular engine maintenance is essential to keep your vehicle running smoothly and to prevent costly repairs.
                A well-maintained engine not only ensures longevity but also enhances the overall driving experience.
            </p>
            <p className="text-gray-700 mb-4">
                Car engines are complex systems that need regular care. Here are some important tips on maintaining your car's engine:
                <ul className="list-disc pl-6">
                    <li>Check and replace the oil regularly.</li>
                    <li>Inspect and replace air filters.</li>
                    <li>Ensure the cooling system is functioning properly.</li>
                    <li>Check the timing belt and other essential components.</li>
                </ul>
            </p>
        </div>
    );
};

export default Maintain;