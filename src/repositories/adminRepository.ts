import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

export const fetchAdminStatsFromDb = async () => {
    return await prisma.read.groupBy({
        by: ["utmSource", "utmMedium", "utmCampaign", "utmChannel"],
        _count: {
            _all: true,
        }
    })
}