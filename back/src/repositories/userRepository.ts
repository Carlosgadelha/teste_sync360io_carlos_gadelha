import { prisma } from "../config/database.js";
import { CreateUserData, UpdateUserData } from "../types/user.js";


async function insert(user: CreateUserData) {
    return await prisma.user.create({
        data: user
    });
}

async function findById(id: number) {

    return await prisma.user.findUnique({
        where: {
            id
        }, 
        select:{
            id: true,
            name: true,
            age: true,
            profile_name: true,
            biography: true,  
            address:{
                select: { 
                    id: true ,
                    zip_code: true,
                    street_address: true,
                    number: true,
                    district: true,
                    city: true,
                    state: true,
                    complement: true
                }
            }
        }
    });

}

async function update(user: UpdateUserData) {
    return await prisma.user.update({
        where: {
            id: user.id
        },
        data: user
    });
}

export default {
    insert,
    update,
    findById
}