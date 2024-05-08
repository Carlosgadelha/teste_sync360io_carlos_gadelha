import addressRepository from "../repositories/addressRepository.js";
import { CreateAddressData, UpdateAddressData } from "../types/address.js";


async function insert(Data: CreateAddressData) {

    return await addressRepository.insert(Data);

}

async function update(Data: UpdateAddressData) {

    return await addressRepository.update(Data);

}

export default {
    insert,
    update
}