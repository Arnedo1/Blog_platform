import type { User, UserArrayData } from "../data/types";
import { createContext } from "react";

export interface AuthContextType {
    loginModal: boolean;
    setLoginModal: (value: boolean) => void;
    menuModal: boolean;
    setMenuModal: (value: boolean) => void;
    currentUser: User | null;
    setCurrentUser: (value: User | null) => void;
    userModal: boolean;
    setUserModal: (value: boolean) => void;
    register: (userData: UserArrayData) => Promise<void>
    login:(email:string, password:string)=>void
    logout:()=>void
    error:string | null
    setError:(value:string | null)=>void
    updateUser:(name:string, username:string, email:string, avatar:string)=>void

}
export const AuthContext = createContext<AuthContextType|undefined>(undefined)

