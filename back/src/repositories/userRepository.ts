import { prisma } from "../config/database.js";
import { CreateUserData, UpdateUserData } from "../types/user.js";


async function insert(user: CreateUserData) {
    return await prisma.user.create({
        data: user
    });
}

export default {
    insert,
}