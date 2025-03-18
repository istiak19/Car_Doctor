"use client";
import Image from 'next/image';
import logoPic from '../../../public/assets//logo.svg';
import Link from 'next/link';
import profile from '../../../public/assets/profile.png';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
    const { data: session, status } = useSession();

    const links = <>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/services'>Services</Link></li>
        <li><Link href='/addService'>Add Service</Link></li>
        <li><Link href='/blog'>Blog</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
    </>;

    return (
        <div className="navbar bg-gray-300 px-12 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href='/' className="text-xl">
                    <Image
                        src={logoPic}
                        alt='Website logo'
                        width={80}
                        height={48}
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    status === 'authenticated' ? (
                        <div className='flex justify-center items-center'>
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                    src={session?.user?.image}
                                    alt="User Image"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                            </div>
                            <button onClick={() => signOut()} className='btn text-red-500 border-2 hover:bg-red-500 hover:text-white border-red-500 mr-3'>Logout</button>
                            <Link href='/checkout' className="btn text-red-500 border-2 hover:bg-red-500 hover:text-white border-red-500">Appointment</Link>
                        </div>
                    ) : (
                        <div className='flex justify-center items-center'>
                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                                <Image
                                    src={profile}
                                    alt="User Image"
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                            </div>
                            <Link href='/login' className='btn text-red-500 border-2 hover:bg-red-500 hover:text-white border-red-500 mr-3'>Login</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;