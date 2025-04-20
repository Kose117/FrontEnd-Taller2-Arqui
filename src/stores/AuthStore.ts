// src/stores/AuthStore.ts
import { AppDispatcher } from '@/dispatcher/AppDispatcher';
import { SimpleEventEmitter } from '@/lib/utils/eventEmitter';  // Ajusta la ruta si es otra
import {
    AUTH_REQ,
    AUTH_OK,
    AUTH_ERR,
    LOGOUT,
} from '@/actions/auth/authActions';
import type { User } from '@/types';

type State = { loading: boolean; user: User | null; error?: string };
let state: State = { loading: true, user: null };

export class AuthStore extends SimpleEventEmitter {
    // Permite al hook leer el estado actual
    getState() {
        return state;
    }

    // Este método recibe las acciones del dispatcher
    private handleAction = (action: any) => {
        switch (action.type) {
            case AUTH_REQ:
                state = { ...state, loading: true, error: undefined };
                break;
            case AUTH_OK:
                state = { loading: false, user: action.payload };
                break;
            case AUTH_ERR:
                state = { loading: false, user: null, error: action.error };
                break;
            case LOGOUT:
                state = { loading: false, user: null };
                break;
            default:
                return;
        }
        this.emit();  // notifica a los suscriptores cada vez que cambia state
    };
}

// Crea la instancia y registra el handler
export const authStore = new AuthStore();
AppDispatcher.register(authStore['handleAction'].bind(authStore));
