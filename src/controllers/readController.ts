import { Request, Response } from "express";
import { logUserRead, getUserReadingHistory } from "../services/readService";

export const registerRead = async (req: Request, res: Response) => {
    const { userId, postId } = req.body;

    if (!userId || !postId) {
        return res.status(400).json({ error: "userId e postId são obrigatórios" });
    }

    try {
        const read = await logUserRead(userId, postId);
        res.json(read);

    }catch(error) {
        res.status(500).json({ error: "Erro ao registrar leitura" });
    }
};

export const getReadindHistory = async (req: Request, res: Response) =>{
    const { userId } = req.query;

    if (!userId || typeof userId !== "string"){
        return res.status(400).json({ error: "userId é obrigatório" });

    }

    try {
        const history = await getUserReadingHistory(userId);
        res.json(history);
    } catch (e) {
        res.status(500).json({ e: "Erro ao buscar histórico de leitura" });
    }
}

