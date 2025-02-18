import { getUserReads } from "../repositories/readRepository";
import { getStreakByUser, updateStreak } from "../repositories/streakRepository";


export const calculateStreak = async (userId: string) => {
    const reads = await getUserReads(userId);
    if (reads.length === 0) return await updateStreak(userId, 0);

    let streak = 1;

    for (let i = 1 ; i < reads.length; i++) {
        const prevDate = new Date(reads[i-1].date).setHours(0,0,0,0);
        const currDate = new Date(reads[i].date).setHours(0,0,0,0);

        if (prevDate - currDate === 86400000) {
            streak++;           
        } else {
            break;
        }

        return await updateStreak(userId, streak);
        
    }
}