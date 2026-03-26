import { createContext } from "react";
import type { BlogPost } from "../data/types";
import type { BlogComment } from "../data/types";

export interface BlogContextType {
    blogPostList: BlogPost[];
    setBlogPostList: (value: BlogPost[]) => void;
    tags:string[]
    setTags:(value:string[])=>void
    setTagModal:(value:boolean)=>void
    tagModal:boolean  
    titleNewBlog:string
    setTitleNewBlog:(value:string)=>void
    contentNewBlog:string
    setContentNewBlog:(value:string)=>void
    preview:boolean
    setPreview:(value:boolean)=>void
    postBlog:(title:string, content:string, tags:string[], user_id:number)=> void
    deleteBlog:(id:number)=>void
    handleEdit:(title:string, content:string, tags:string[], id:number)=>void
    postEdit:(title:string, content:string, tags:string[], id:number)=>void
    editId:(number)
    setEditId:(value:number)=>void
    addLike:(user_id:number, blog_id:number)=>void
    removeLike:(user_id:number, blog_id:number)=>void
    addComments:(user_id:number, blog_id:number, content:string)=>void
    deleteComments:(id:number, blog_id:number)=>void
    commentContent:string
    setCommentContent:(value:string)=>void
    comments:BlogComment[]
    setComments:(value:BlogComment[])=>void
    deleteModal:number | null
    setDeleteModal:(value:number | null)=>void
}

export const BlogContext = createContext<BlogContextType|undefined>(undefined)