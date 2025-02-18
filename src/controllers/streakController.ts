import { Request, Response } from 'express';
import { calculateStreak } from '../services/streakService';

export const getStreak = async ( req: Request, res: Response ) => {
    const { userId } = req.query;
    if (!userId || typeof userId !== 'string') {
        return res.status(400).json({ error: 'userId é obrigatório' });
    }

    try {
        const streak = await calculateStreak(userId);
        res.json(streak);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao calcular a sequência de leitura' });
    }
}