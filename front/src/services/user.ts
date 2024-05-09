import { User, UserInfo, UserUpdateInfo } from '../types/user';
import { api } from './api';

export const createUser = (user: User) => {
  return api.post('/newProfile', user).then((res) => res.data);
};

export const getUser = (id: number): Promise<UserInfo> => {
    return api.get(`/getUserById/${id}`).then((res) => res.data);
};

export const updateUserInfo = (user: UserUpdateInfo): Promise<UserInfo> => {
  return api.patch(`/updateUser`, user).then((res) => res.data);
};
