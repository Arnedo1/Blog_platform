import { useState } from "react";
import type { BlogPost } from "../data/posts";
import CommentCard from "./CommentCard";

const CommentList = ({blog} : {blog : BlogPost}) => {
    const [newComment, setNewComment] = useState('')
    return (
        <div>
            <div className="flex justify-between border-t border-gray-100 pt-4 items-center px-4">
                <div className="text-xl font-semibold">Reacties<span className="ml-1">({blog.comments.length})</span></div>
                <button className="px-6 py-2 rounded font-light shadow shadow-black/20 ">Wordt lid</button>
            </div>
            <div className="flex px-4 my-4 gap-2 items-start">
            <img
                            src={blog.author.avatar}
                            alt='Logo'
                            className='w-10 rounded-full'
                        />
                <textarea 
            onChange={(e)=> setNewComment(e.target.value)}
            value={newComment}
            placeholder="Schijf hier je reactie"
            className="border p-2 outline-none h-20 w-full border-gray-300 resize-y rounded"></textarea></div>
            <div>{blog.comments.map((comment)=> <CommentCard key={comment.id} comment={comment}/>)}</div>
        </div>
    );
};

export default CommentList;
