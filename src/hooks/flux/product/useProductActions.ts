import {
    loadUserProducts,
    updateProduct,
    deleteProduct,
} from '@/actions/product/productThunks';

export const useProductActions = () => ({
    loadUserProducts,
    updateProduct,
    deleteProduct,
});