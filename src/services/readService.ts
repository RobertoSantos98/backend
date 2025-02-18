import { registerRead, getUserReads } from '../repositories/readRepository';

export const logUserRead = async (userId: string, postId: string) => {
    return await registerRead(userId, postId);
}

export const getUserReadingHistory = async (userId: string) => {
    return await getUserReads(userId);

}