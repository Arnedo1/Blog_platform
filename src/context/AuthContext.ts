import type { User, UserArrayData } from "../data/posts";
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
    userArray: UserArrayData[];
    setUserArray:(value:UserArrayData[])=>void
}
export const AuthContext = createContext<AuthContextType|undefined>(undefined)

