import type { Product } from '@/types/productType';

export const PROD_REQ = 'PROD_REQ' as const;
export const PROD_OK = 'PROD_OK' as const;
export const PROD_ERR = 'PROD_ERR' as const;

export const PROD_ADD_OK = 'PROD_ADD_OK' as const;
export const PROD_UPD_OK = 'PROD_UPD_OK' as const;
export const PROD_DEL_OK = 'PROD_DEL_OK' as const;

export const prodReq = () => ({ type: PROD_REQ });
export const prodOk = (p: Product[]) => ({ type: PROD_OK, payload: p });
export const prodErr = (e: string) => ({ type: PROD_ERR, error: e });

export const prodUpdOk = (p: Product) => ({ type: PROD_UPD_OK, payload: p });
export const prodDelOk = (id: string) => ({ type: PROD_DEL_OK, payload: id });
