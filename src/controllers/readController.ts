import { Request, Response } from "express";
import { processRead, getUserReadingHistory } from "../services/readService";

export const saveRead = async (req: Request, res: Response) => {

  try {

    const { email, postId, utm_source, utm_medium, utm_campaign, utm_channel } = req.body;

    await processRead( email, postId, utm_source, utm_medium, utm_campaign, utm_channel );

    return res.status(201).json({ success: true, message: "Leitura registrada com sucesso!" });

    
    }catch(error) {
        console.error("Erro ao registrar leitura", error);
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

