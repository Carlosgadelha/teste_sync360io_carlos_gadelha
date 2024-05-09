import { api } from './api';

type Address = {
    number: string;
    city: string;
    complement: string;
    district: string;
    state: string;
    street_address: string;
    zip_code: string;
    userId: number;
}

export const createAddress = (address: Address) => {
  return api.post('/newAddress', address).then((res) => res.data);
};
