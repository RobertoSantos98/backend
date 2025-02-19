import express, { Request, Response } from 'express';
import { getUser } from '../controllers/userController';

const router = express.Router();

router.get('/user', async ( req: Request, res: Response ) => {
    await getUser(req, res);
} );

export default router;