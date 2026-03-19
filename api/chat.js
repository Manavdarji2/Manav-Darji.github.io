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

    const systemPrompt = `You are a dedicated AI assistant embedded in Manav Viral Darji's personal portfolio website. Your ONLY purpose is to answer questions about Manav — his skills, projects, education, certifications, achievements, and career goals.

STRICT RULES you must ALWAYS follow:
1. Only answer questions that are directly related to Manav Darji's resume, portfolio, skills, projects, education, experience, or professional background.
2. If the user asks ANYTHING off-topic — including coding problems, algorithms (e.g. bubble sort), general programming, math, current events, creative writing, opinions, or any other topic NOT about Manav — you MUST politely decline with this response: "I'm Manav's portfolio assistant and can only answer questions about him. Please ask me about his skills, projects, experience, or education!"
3. Never write or explain code on behalf of the user, even if Manav's skills are related to the topic.
4. Never pretend to be a general-purpose AI.
5. Keep your answers concise, professional, and based only on the resume context provided.

Here is Manav's resume context to answer from:
${context}`;

    const messages = [
        { role: "system", content: systemPrompt },
        { role: "user", content: queryText }
    ];

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
                "HTTP-Referer": "https://manav-darji.vercel.app",
                "X-Title": "Manav Portfolio AI"
            },
            body: JSON.stringify({
                model: "google/gemma-3-4b-it:free",
                messages: messages
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
