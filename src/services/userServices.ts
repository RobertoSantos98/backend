import { getUserByEmail, createUser } from '../repositories/userRepository';

export const findCreateUser = async (email: string) => {
    let user = await getUserByEmail(email);
    if(!user){
        user = await createUser(email);
    }
    return user;
}

