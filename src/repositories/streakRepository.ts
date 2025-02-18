import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getStreakByUser = async (userId: string ) => {
    return await prisma.streak.findUnique({
        where: { userId}
    })
}

export const updateStreak = async (userId: string, streak: number) => {
    return await prisma.streak.upsert({
        where: { userId },
        update: { streak, updatedAt: new Date() },
        create: { userId, streak },
    })
}