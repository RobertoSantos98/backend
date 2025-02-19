import { Request, Response } from 'express';
import { findCreateUser } from '../services/userServices';

export const getUser = async (req: Request, res: Response) => {
    const { email } = req.query;

    if (!email || typeof email !== 'string'){
        return res.status(400).json({ error: 'Email é obrigatório e deve ser uma string' })
    }

    try {
        const user = await findCreateUser(email);
        res.json(user);

    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar usuário'})
    }
}