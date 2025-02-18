import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const registerRead = async (userId: string, postId: string) => {
    return await prisma.read.create({
        data: {
            userId,
            postId,
            date: new Date()
        }
    })
}

export const getUserReads = async (userId: string) => {
    return await prisma.read.findMany({
        where: { userId},
        orderBy: { date: 'desc' }
    })
}