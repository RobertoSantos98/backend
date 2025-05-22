import { Request, Response } from "express";
import { getBeehiivPost } from "../services/beehiivService";


export const fetchBeehiivPost = async (req: Request, res: Response) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ error: "O postId é obrigatório!" });
  }

  const post = await getBeehiivPost(postId);

  if (!post) {
    return res.status(500).json({ error: "Erro ao buscar post do Beehiiv." });
  }

  return res.json(post);
};
