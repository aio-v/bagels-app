export async function fetchMemberStats(name) {
    const res = await fetch(process.env.GSHEETS_API+"?type=2&name="+name,
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });

    const data = await res.json();
    return data;
}