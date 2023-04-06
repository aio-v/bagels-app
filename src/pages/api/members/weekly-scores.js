import { loadWeeklyMemberScores } from "@/lib/load-sheets";

export default async function handler(req, res) {
    const data = await loadWeeklyMemberScores();
    res.status(200).json(data);
}