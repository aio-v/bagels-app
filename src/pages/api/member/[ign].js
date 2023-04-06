import { fetchMemberStats } from "@/lib/fetch-sheets";

export default async function handler(req, res) {
    const { ign } = req.query;
    const data = await fetchMemberStats(ign);
    res.status(200).json(data);
}