import express, { Request, Response } from 'express';
import { saveRead, getReadindHistory} from '../controllers/readController';

const router = express.Router();

router.post('/read', async (req: Request, res: Response) => {
    await saveRead(req, res);
})

router.get('/read/history', async (req: Request, res: Response) => {
    await getReadindHistory(req, res);
})

export default router;