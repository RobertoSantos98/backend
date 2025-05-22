import express  from "express";
import { Request, Response } from "express";
import { getAdminStats } from "../controllers/adminController";

const router = express.Router();

router.get("/admin/stats", async (req: Request, res: Response) => {
    await getAdminStats(req, res);
})

export default router;