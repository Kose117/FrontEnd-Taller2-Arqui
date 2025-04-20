import { axiosApi as axios } from '@/lib/api/axios';
import { AppDispatcher } from '@/dispatcher/AppDispatcher';
import {
    prodReq, prodOk, prodErr,
    prodUpdOk, prodDelOk,
} from './productActions';
import type { Product } from '@/types/productType';

/* GET /products/getAllByUser */
export const loadUserProducts = async () => {
    AppDispatcher.dispatch(prodReq());
    try {
        const { data } = await axios.get<Product[]>('/products/');
        AppDispatcher.dispatch(prodOk(data));
    } catch (e) {
        AppDispatcher.dispatch(prodErr((e as Error).message));
    }
};

/* PATCH /products/:id */
export const updateProduct = async (id: string, body: Partial<Product>) => {
    const { data } = await axios.patch<Product>(`/products/${id}`, body);
    AppDispatcher.dispatch(prodUpdOk(data));       // actualiza store
};

/* DELETE /products/:id */
export const deleteProduct = async (id: string) => {
    await axios.delete(`/products/${id}`);
    AppDispatcher.dispatch(prodDelOk(id));
};
