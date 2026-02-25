export default async function handler(req, res) {
    // CORS Headers for allowing requests if deployed separately from GitHub Pages
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { queryText, context } = req.body;

    if (!queryText) {
        return res.status(400).json({ error: 'Missing queryText' });
    }

    const prompt = `You are Manav's AI assistant. Answer the user based on his resume context:\n\n${context}\n\nQuestion: ${queryText}`;

    try {
        const apiKey = process.env.OPENROUTER_API_KEY || process.env.VITE_OPENROUTER_API_KEY;

        if (!apiKey) {
            throw new Error("Server configuration error: Missing API Key");
        }

        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "HTTP-Referer": "https://manavdarji2.github.io",
                "X-Title": "Manav Portfolio AI"
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'OpenRouter API Error');
        }

        return res.status(200).json({ content: data.choices[0].message.content });
    } catch (error) {
        console.error('API Route Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
