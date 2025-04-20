export type UserType = 'ADMIN' | 'OPERATOR';

export interface User {
  id: string;
  email: string;
  avatar: string;
  type: UserType;
}
