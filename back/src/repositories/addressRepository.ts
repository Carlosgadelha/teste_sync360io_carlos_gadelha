import { prisma } from "../config/database.js";
import { CreateAddressData, UpdateAddressData } from "../types/address.js";


async function insert(address: CreateAddressData) {
    return await prisma.address.create({
        data: address
    });
}


async function update(address: UpdateAddressData) {
    return await prisma.address.update({
        where: {
            id: address.id
        },
        data: address
    });
}

export default {
    insert,
    update,
}