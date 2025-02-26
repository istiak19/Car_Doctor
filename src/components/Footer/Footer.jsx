import Image from "next/image";
import logoPic from '../../../public/assets//logo.svg'

const Footer = () => {
    return (
        <footer className="flex flex-wrap justify-between px-6 py-10 bg-black text-white">
            <aside className="w-full sm:w-1/4 mb-6 sm:mb-0">
                <Image className="h-14 w-14" src={logoPic} alt="footer pic" />
                <p className="mt-2">
                    Istiak is a software and web technologies <br /> engineer, a life coach trainer who is also a serial .
                </p>
            </aside>
            <nav className="flex flex-col w-full sm:w-1/4 mb-6 sm:mb-0">
                <h6 className="footer-title">About</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Service</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav className="flex flex-col w-full sm:w-1/4 mb-6 sm:mb-0">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">Why Car Doctor</a>
                <a className="link link-hover">About</a>
            </nav>
            <nav className="flex flex-col w-full sm:w-1/4">
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Support Center</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Accessibility</a>
            </nav>
        </footer>
    );
};

export default Footer;