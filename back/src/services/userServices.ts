import userRepository from "../repositories/userRepository.js";
import { CreateUserData } from "../types/user.js";


async function insert(Data: CreateUserData) {

    await userRepository.insert(Data);

}

export default {
    insert,
}