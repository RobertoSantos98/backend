import { saveRead , getUserReads } from '../repositories/readRepository';
import { findCreateUser } from './userServices';


export const processRead = async (email: string, postId: string, utm_source: string, utm_medium: string, utm_campaign: string, utm_channel: string ) => {
    let user = await findCreateUser(email);

    const utmData = {
        utmSource: utm_source,
        utmMedium: utm_medium,
        utmCampaign: utm_campaign,
        utmChannel: utm_channel,
    };

    return await saveRead(user.id, postId, utmData);
};

export const getUserReadingHistory = async (userId: string) => {
    return await getUserReads(userId);

}