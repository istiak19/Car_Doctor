import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

const Signs = () => {
    return (
        <div className="container mx-auto p-6">
            <Link href='/blog' className="text-red-500 text-2xl"><FaArrowLeft /></Link>
            <h1 className="text-4xl font-bold mb-6">Signs Your Car Needs Brake Repair</h1>
            <p className="text-lg mb-6">
                Brakes are one of the most important safety features of your car. If you're noticing any of the following signs, it's time to have your brakes checked.
            </p>
            <p className="text-gray-700 mb-4">
                Look out for strange noises, vibrations, or slow braking. Here’s how to address brake issues:
                <ul className="list-disc pl-6">
                    <li>Grinding or squealing noises when braking.</li>
                    <li>Vibrations or pulling while pressing the brake pedal.</li>
                    <li>Brake warning light on the dashboard.</li>
                    <li>Difficulty stopping or taking longer to stop.</li>
                </ul>
            </p>
        </div>
    );
};

export default Signs;