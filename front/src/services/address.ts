import { Address, AddressUpdate } from '../types/address';
import { api } from './api';


export const createAddress = (address: Address) => {
  return api.post('/newAddress', address).then((res) => res.data);
};

export const updateAddress = (address: AddressUpdate) => {
  return api.patch(`/updateAddress`, address).then((res) => res.data);
};
