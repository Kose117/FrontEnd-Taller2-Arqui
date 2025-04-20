// src/hooks/flux/auth/useAuthActions.ts
import {
    loadUser, login, logout, register
} from '@/actions/auth/authThunks';
import type { LoginInput } from '@/types';

export const useAuthActions = () => ({
    loadUser,
    login: (email: string, password: string) =>
        login({ email, password } as LoginInput),
    logout,
    register: (email: string, password: string) =>
        register({ email, password }),
});
