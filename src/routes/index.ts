import express from 'express';
import userRoutes from './userRoutes';
import streakRoutes from './streakRouter';
import readRoutes from './readRoutes';
import adminRoutes from './adminRoutes';

const router = express.Router();

router.use('/api', userRoutes);
router.use('/api', streakRoutes);
router.use('/api', readRoutes);
router.use('/api', adminRoutes )
export default router;
