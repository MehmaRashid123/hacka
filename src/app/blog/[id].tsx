import { useRouter } from "next/router";

const BlogDetails = () => {
    const router = useRouter();
    const { id } = router.query; // This retrieves the dynamic part of the URL

    return (
        <div className="p-10 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Blog Post {id}</h1>
            <p className="text-gray-700 text-lg">
                This is the detailed content for Blog Post {id}. Replace this
                placeholder with your actual content or dynamically fetched
                data.
            </p>
        </div>
    );
};

export default BlogDetails;
