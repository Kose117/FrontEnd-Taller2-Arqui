import { useSyncExternalStore } from 'react';
import { productStatsStore } from '@/stores/ProductStatsStore';

export const useProductStatsStore = () =>
    useSyncExternalStore(
        (cb) => {
            productStatsStore.on('change', cb);
            return () => productStatsStore.off('change', cb);
        },
        () => productStatsStore.getState()
    );