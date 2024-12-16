import { useRouter } from "next/router";

const BlogDetails = () => {
    const router = useRouter();
    const { id } = router.query; // This retrieves the dynamic part of the URL

    return (
        <div className="p-4 sm:p-6 lg:p-10 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Blog Post {id}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
                This is the detailed content for Blog Post {id}. Replace this
                placeholder with your actual content or dynamically fetched
                data. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque vel velit at orci placerat tristique nec nec neque.
            </p>
        </div>
    );
};

export default BlogDetails;
