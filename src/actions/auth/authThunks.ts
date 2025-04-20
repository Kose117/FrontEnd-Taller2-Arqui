import { authApi } from '@/lib/api/authApi';
import { AppDispatcher } from '@/dispatcher/AppDispatcher';
import { authReq, authOk, authErr, logoutA } from './authActions';
import type { User, LoginInput } from '@/types';

// Normaliza backend.userType → type
const norm = (u: any): User => {
    const { userType, ...rest } = u;
    return { ...rest, type: userType };
};

// Carga usuario desde cookie una sola vez
export const loadUser = async () => {
    AppDispatcher.dispatch(authReq());
    try {
        const { data } = await authApi.get<User>('/auth/me');
        AppDispatcher.dispatch(authOk(norm(data)));
    } catch (e) {
        AppDispatcher.dispatch(authErr((e as Error).message));
    }
};

export const login = async (cred: LoginInput) => {
    AppDispatcher.dispatch(authReq());
    try {
        await authApi.post('/auth/login', cred);
    } catch (e) {
        AppDispatcher.dispatch(authErr((e as Error).message));
    }
};

export const logout = async () => {
    await authApi.post('/auth/logout');
    AppDispatcher.dispatch(logoutA());
};

export const register = async (payload: { email: string; password: string }) => {
    await authApi.post<User>('/auth/register', payload);
    await login({ email: payload.email, password: payload.password });
};
