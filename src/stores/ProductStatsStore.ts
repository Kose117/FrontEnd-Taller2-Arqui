import { EventEmitter } from 'events';
import { AppDispatcher } from '@/dispatcher/AppDispatcher';
import {
    STATS_REQUEST,
    STATS_SUCCESS,
    STATS_FAILURE,
} from '@/actions/productStatsActions';
import type { ProductStatsDto } from '@/types/statsTypes';

type State = {
    loading: boolean;
    data: ProductStatsDto | null;
    error?: string;
};

let state: State = { loading: false, data: null };

class ProductStatsStore extends EventEmitter {
    getState() {
        return state;
    }

    private handleAction(action: any) {
        switch (action.type) {
            case STATS_REQUEST:
                state = { ...state, loading: true };
                break;
            case STATS_SUCCESS:
                state = { loading: false, data: action.payload };
                break;
            case STATS_FAILURE:
                state = { loading: false, data: null, error: action.error };
                break;
        }
        this.emit('change');
    }
}

export const productStatsStore = new ProductStatsStore();
AppDispatcher.register(
    productStatsStore['handleAction'].bind(productStatsStore)
);
