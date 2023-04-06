import { loadGuildScoreHistory } from "@/lib/load-sheets";

export default async function handler(req, res) {
    const data = await loadGuildScoreHistory();
    res.status(200).json(data);
}