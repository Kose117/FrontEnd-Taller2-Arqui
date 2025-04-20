import React, { createContext, useContext } from 'react';
import { useAuthStore } from '@/hooks/flux/auth/useAuthStore';
import { useAuthActions } from '@/hooks/flux/auth/useAuthActions';

interface IAuthContext {
    user: ReturnType<typeof useAuthStore>['user'];
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    createAccount: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuthStore();
    const { login, logout, register } = useAuthActions();

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                createAccount: register,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuthContext must be inside AuthProvider');
    return ctx;
};
