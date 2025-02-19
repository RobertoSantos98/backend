import express, { Request, Response } from 'express';
import { getStreak } from '../controllers/streakController';

const router = express.Router();

router.get('/streak', async (req: Request, res: Response) => {
    await getStreak(req, res);
})

export default router;
