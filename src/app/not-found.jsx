import Image from 'next/image'
import Link from 'next/link'
import errorPic from '../../public/assets/error.png'

export default function NotFound() {
    return (
        <div className='flex justify-center items-center mt-16'>
            <div className='space-y-5'>
                <h2 className='text-3xl font-bold text-red-400'>Not Found</h2>
                <p className='text-xl text-red-400 font-semibold'>Could not find requested resource</p>
                <Link className='btn border-red-500 hover:bg-red-500 text-red-500 hover:text-white hover:border-none border-b-4' href="/">Return Home</Link>
            </div>
            <div>
                <Image width={500} height={550} src={errorPic} alt='error page' />
            </div>
        </div>
    )
}