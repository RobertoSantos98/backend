import { Request, Response } from "express";
import { getOverallStats } from "../services/adminService";

export const getAdminStats = async (req: Request, res: Response) => {
    try {
        const stats = await getOverallStats();
        res.json(stats)
    } catch (error) {
        console.log("Erro ao buscar estatistica do admin: ", error)
        res.status(400).json({erro: "Erro ao buscar estatísticas"});
    }
}