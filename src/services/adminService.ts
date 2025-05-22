import { fetchAdminStatsFromDb } from "../repositories/adminRepository";

export const getOverallStats = async () => {
    return await fetchAdminStatsFromDb();
}