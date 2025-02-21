import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface UTMData {
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmChannel?: string;
}


export const saveRead = async (userId: string, postId: string, utmData: UTMData) => {
    return await prisma.read.create({
        data: {
            userId,
            postId,
            utmSource: utmData.utmSource || null,
            utmMedium: utmData.utmMedium || null,
            utmCampaign: utmData.utmCampaign || null,
            utmChannel: utmData.utmChannel || null,
        },
    });
};




export const getUserReads = async (userId: string) => {
    return await prisma.read.findMany({
        where: { userId},
        orderBy: { date: 'desc' }
    })
}