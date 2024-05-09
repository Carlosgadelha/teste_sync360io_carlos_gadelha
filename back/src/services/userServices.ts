import userRepository from "../repositories/userRepository.js";
import { CreateUserData, UpdateUserData } from "../types/user.js";


async function insert(Data: CreateUserData) {

    return await userRepository.insert(Data);

}

async function findById(id: number) {

    const user = await userRepository.findById(id);
    if(!user) throw { type: "not_found"};
    return { ...user, address: user.address[0] || null};

}

async function update(Data: UpdateUserData) {

    return await userRepository.update(Data);

}

export default {
    insert,
    findById,
    update
}