import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import type {UserArrayData, User}from '../data/posts';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [userModal, setUserModal] = useState<boolean>(false);
    const [menuModal, setMenuModal] = useState<boolean>(false);
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [userArray, setUserArray] = useState<UserArrayData[]>(() => {
        const saved = localStorage.getItem('userArray');
        return saved ? JSON.parse(saved) : [];
    });
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const saved = localStorage.getItem('currentUser');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }, [currentUser]);
    useEffect(() => {
        localStorage.setItem('userArray', JSON.stringify(userArray));
    }, [userArray]);

    return (
        <AuthContext.Provider
            value={{
                setLoginModal,
                loginModal,
                menuModal,
                setMenuModal,
                userModal,
                setUserModal,
                currentUser,
                setCurrentUser,
                userArray,
                setUserArray,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
