import { useSyncExternalStore } from 'react';
import { productStore } from '@/stores/ProductStatsStore';

export const useProductStatsStore = () =>
    useSyncExternalStore(
        (cb) => {
            productStore.addChangeListener(cb);
            return () => productStore.removeChangeListener(cb);
        },
        () => productStore.getState()
    );
