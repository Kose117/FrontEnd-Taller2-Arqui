import { AppDispatcher } from '@/dispatcher/AppDispatcher';
import {
    statsRequest,
    statsSuccess,
    statsFailure,
} from './productStatsActions';
import { statsApi } from '@/lib/api/statsApi'
import type { ProductStatsDto } from '@/types/statsTypes';

export const loadStats = async (from: string, to: string) => {
    AppDispatcher.dispatch(statsRequest());
    try {
        const { data } = await statsApi.get<ProductStatsDto>(
            '/stats/products',
            { params: { from, to } }
        );
        AppDispatcher.dispatch(statsSuccess(data));
    } catch (e) {
        AppDispatcher.dispatch(
            statsFailure((e as Error).message)
        );
    }
};
