import { loadBestScores } from "@/lib/load-sheets";

export default async function handler(req, res) {
    const data = await loadBestScores();
    res.status(200).json(data);
}