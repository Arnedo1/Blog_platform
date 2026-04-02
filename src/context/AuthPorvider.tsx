/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, type ReactNode } from 'react';
import { AuthContext } from './AuthContext';
import type { UserArrayData, User } from '../data/types';

const API = 'https://blog-platform-vdyb.onrender.com';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [userModal, setUserModal] = useState<boolean>(false);
    const [menuModal, setMenuModal] = useState<boolean>(false);
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [currentUser, setCurrentUser] = useState<User | null>(() => {
        const saved = localStorage.getItem('currentUser');
        return saved ? JSON.parse(saved) : null;
    });

    const register = async (userData: UserArrayData) => {
        try {
            const res = await fetch(`${API}/users`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            const newUser = await res.json();
            setCurrentUser(newUser);
        } catch (error) {
            setError('Er is iets misgegaan, probeer opnieuw.');
        }
    };

    const login = async (password: string, email: string) => {
        try {
            const res = await fetch(`${API}/users/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password, email }),
            });
            const user = await res.json();
            setCurrentUser(user);
            setLoginModal(false);
        } catch (error) {
            setError('Er is iets misgegaan, probeer opnieuw.');
        }
    };

    const logout = async () => {
        try {
            setCurrentUser(null);
            localStorage.removeItem('currentUser');
            setUserModal(false);
        } catch (error) {
            setError('Er is iets misgegaan, probeer opnieuw.');
        }
    };

    useEffect(() => {
        if (currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }, [currentUser]);

    const updateUser = async (name: string, username: string, email: string, avatar: string) => {
        try {
            const res = await fetch(`${API}/users/${currentUser?.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, username, email, avatar }),
            });
            const updatedUser = await res.json();
            setCurrentUser(updatedUser);
        } catch (_error) {
            setError('Er is iets misgegaan, probeer opnieuw.');
        }
    };
    const uploadAvatar = async (file: File): Promise<string> => {
        const formData = new FormData()
        formData.append('avatar', file)
        
        const res = await fetch('https://blog-platform-vdyb.onrender.com/upload', {
            method: 'POST',
            body: formData,
        })
        const data = await res.json()
        return data.url
    }

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
                register,
                login,
                logout,
                error,
                setError,
                updateUser,
                uploadAvatar
            }}>
            {children}
        </AuthContext.Provider>
    );
};