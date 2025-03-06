import Link from "next/link";

const Blog = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-6">CarDoctor Blog</h1>
                <p className="text-lg mb-4 text-gray-700">Welcome to our blog! Here you will find the latest tips, tutorials, and advice for taking care of your car.</p>
            </div>
            <div className="blog-posts">
                <div className="blog-post">
                    <h2 className="text-2xl font-semibold">How to Maintain Your Car's Engine</h2>
                    <p className="text-gray-600">Regular maintenance of your engine is crucial to ensure your car runs smoothly. In this article, we cover the best practices for engine care...</p>
                    <Link href="/blog/maintain" className="text-red-500">
                        Read more
                    </Link>
                </div>
                <div className="blog-post">
                    <h2 className="text-2xl font-semibold">Signs Your Car Needs Brake Repair</h2>
                    <p className="text-gray-600">Brakes are one of the most important safety features of your car. Learn the signs that your brakes may need repair and how to spot issues early...</p>
                    <Link href="/blog/signs" className="text-red-500">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;