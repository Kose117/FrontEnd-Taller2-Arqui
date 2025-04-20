import { axiosApi as axios } from '@/lib/api/axios';
import { AppDispatcher } from '@/dispatcher/AppDispatcher';
import {
    usersReq, usersOk, usersErr,
    userAddReq, userAddOk, userAddErr,
} from './userActions';
import type { CreateUserInput, UpdateUserInput } from '@/types';

export const loadUsers = async () => {
    AppDispatcher.dispatch(usersReq());
    try {
        const { data } = await axios.get('/user');
        AppDispatcher.dispatch(usersOk(data));
    } catch (e) {
        AppDispatcher.dispatch(usersErr((e as Error).message));
    }
};

export const createUser = async (payload: CreateUserInput) => {
    AppDispatcher.dispatch(userAddReq());
    try {
        const { data } = await axios.post('/user/investigador', payload);
        AppDispatcher.dispatch(userAddOk(data));
        await loadUsers();                    // refresca lista
    } catch (e) {
        AppDispatcher.dispatch(userAddErr((e as Error).message));
    }
};

export const updateUser = async (id: string, upd: UpdateUserInput) => {
    await axios.patch(`/user/${id}`, upd);
    await loadUsers();
};

export const deleteUser = async (id: string) => {
    await axios.delete(`/user/${id}`);
    await loadUsers();
};

export const getUserById = async (id: string) => axios.get(`/user/${id}`).then(r => r.data);
