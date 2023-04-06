import { loadWeeklyGuildScores } from "@/lib/load-sheets";

export default async function handler(req, res) {
    const data = await loadWeeklyGuildScores();
    res.status(200).json(data);
}