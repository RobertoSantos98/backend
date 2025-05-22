import axios from "axios";
import { BeehiivPost } from "../types/BeehiivPost";

const BASE_URL = "https://backend.testeswaffle.org/webhooks/case";


export const getBeehiivPost = async (postId: string): Promise<BeehiivPost | null> => {
  try {
    const response = await axios.get<BeehiivPost>(`${BASE_URL}/publication/teste/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar post do Beehiiv:", error);
    return null;
  }
};
