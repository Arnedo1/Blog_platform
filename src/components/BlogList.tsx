import BlogCard from "./BlogCard";
import TopFilter from "./TopFilter";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogList = () => {
    const blog = useContext(BlogContext)
    return (
        <div className='bg-gray-100'>
            <TopFilter/>
            {blog?.blogPostList.map((post)=><BlogCard key={post.id} post={post}/>)}
        </div>
    );
};

export default BlogList;