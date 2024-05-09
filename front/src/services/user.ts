import { api } from './api';

type User = {
    name: string;
    age: number;
    biography: string;
    profile_name: string;
}

export const createUser = (user: User) => {
  return api.post('/newProfile', user).then((res) => res.data);
};
