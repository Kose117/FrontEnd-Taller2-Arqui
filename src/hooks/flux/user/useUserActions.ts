import { loadUsers, createUser, updateUser, deleteUser } from '@/actions/user/userThunks';
export const useUserActions = () => ({ loadUsers, createUser, updateUser, deleteUser });
