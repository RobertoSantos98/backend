import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    })
}

export const createUser = async (email: string) => {
    return await prisma.user.create({
        data: {email}
    })
}