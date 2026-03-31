export interface Author {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    date: string;
  }
  
  export interface BlogComment {
    id: number;
    blog_id: number;
    users_id: number;
    content: string;
    created: string;
    name: string;
    avatar: string;
}

  export interface User {
    name?: string;
    username?: string;
    email?: string;
    avatar?: string;
    posts?:BlogPost[];
    id:number
}

export interface UserArrayData {
    id?: number;
    name?: string;
    usersname?: string;
    email?: string;
    avatar?: string;
    password?: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    content: string;
    user_id: number;
    read_time: number;
    tags: string[];
    created: string;
    name: string;
    username: string;
    avatar: string;
    liked_by: number[] | null
    like_count: number
    comment_count:number
}
  
  