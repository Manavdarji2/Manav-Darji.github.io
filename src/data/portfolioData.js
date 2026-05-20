import { BrainCircuit, Code, Terminal, Database } from 'lucide-react';

export const capabilities = [
    { title: "AI/ML Focus", icon: BrainCircuit, epochs: "2024_Present", weights: "GANs (Pix2Pix, SPADE), LLMs, RAG, NLP", val: "High", span: "md:col-span-2" },
    { title: "Programming", icon: Code, epochs: "Multi_Paradigm", weights: "Python, C++, Java, JS, SQL", val: "Optimized", span: "md:col-span-1" },
    { title: "Frameworks", icon: Terminal, epochs: "Production", weights: "PyTorch, TensorFlow, Scikit-learn, OpenCV", val: "Stable", span: "md:col-span-1" },
    { title: "Data Systems", icon: Database, epochs: "Pipeline", weights: "Pandas, AWS S3, ChromaDB, LangChain, MySQL", val: "Scalable", span: "md:col-span-2" }
];

export const projects = [
    {
        title: "GenAI Timetable System",
        category: "LLM & Agentic AI",
        impact: "Automated Multi-Agent Scheduling",
        tags: ["Flask", "LangChain", "LLM APIs", "Python"],
        desc: "Generative AI-based timetable management system using multi-agent reasoning to automate complex scheduling with dynamic rescheduling on teacher absence.",
        link: "https://github.com/manav-darji-aiml/Timetable-genius"
    },
    {
        title: "Aurelia — Luxury Fashion Site",
        category: "Full-Stack & Cloud",
        impact: "Live on Google Cloud Run",
        tags: ["HTML/CSS/JS", "Python", "Google Cloud Run", "Antigravity MCP"],
        desc: "First live-deployed project built during the GFG × Google Antigravity Workshop. Luxury fashion e-commerce platform containerized via Docker and deployed on Google Cloud Run CLI.",
        link: "https://aurelia-234264899332.us-central1.run.app/index.html",
        live: true
    },
    {
        title: "Mumbai Real Estate Price Predictor",
        category: "Machine Learning",
        impact: "92% Accuracy on 3K+ Listings",
        tags: ["Random Forest", "Scikit-learn", "Streamlit"],
        desc: "Predictive model achieving 92% accuracy on 3,000+ property listings using feature scaling, one-hot encoding & k-fold cross-validation. Deployed as an interactive Streamlit web app.",
        link: "https://pricepredictionmumbai.streamlit.app/",
        live: true
    },
    {
        title: "MedSimplify",
        category: "Healthcare AI",
        impact: "Medical Report Simplifier",
        tags: ["TypeScript", "AI/LLM", "Healthcare"],
        desc: "An AI-powered web application that simplifies complex medical reports into plain, easy-to-understand language, empowering patients to understand their diagnoses.",
        link: "https://github.com/manav-darji-aiml/MedSimplify"
    },
    {
        title: "Research Paper Connection Finder",
        category: "Knowledge Graph & MCP",
        impact: "Graph-based Idea Discovery",
        tags: ["CSS", "MCP", "Graph Theory", "LLM"],
        desc: "Visualizes connections between research papers using graph structures and MCP. Finds conceptual links to help researchers discover new project ideas and cross-domain insights.",
        link: "https://github.com/manav-darji-aiml/Research-Paper-Connection-Finder"
    },
    {
        title: "Local AI Assistant",
        category: "Agentic AI",
        impact: "Multi-Modal Local + Cloud Agent",
        tags: ["Python", "Multi-Agent", "LLM", "Vision"],
        desc: "Combines local and online AI modes with multiple agents. A fully local AI assistant supporting text & image analysis, blending privacy-first local inference with cloud AI APIs.",
        link: "https://github.com/manav-darji-aiml/Local-AI"
    },
    {
        title: "YouTube Video Summarizer",
        category: "LLM & NLP",
        impact: "Query-Based Transcript Summarization",
        tags: ["Python", "LLM", "RAG", "Streamlit"],
        desc: "Lightweight YouTube Video Summarizer leveraging transcripts and documents to generate clear, structured summaries. Powered by LLMs with query-based retrieval.",
        link: "https://github.com/manav-darji-aiml/yt-summarizer.github.io"
    },
    {
        title: "Equity Research Analysis Tool",
        category: "FinTech AI",
        impact: "URL-Based Financial Research",
        tags: ["Python", "LangChain", "URL Loader", "LLM"],
        desc: "Research-based tool that retrieves and analyzes financial information from user-provided URLs. Uses LangChain URL loaders for real-time equity research synthesis.",
        link: "https://github.com/manav-darji-aiml/Equity-Research-Analysis-"
    },
    {
        title: "Neural Vision Classifier",
        category: "Deep Learning",
        impact: "94% Top-1 Accuracy",
        tags: ["TensorFlow", "Keras", "CNN"],
        desc: "Convolutional Neural Network achieving 94% accuracy on 2K+ image datasets, incorporating ReLU activations and dropout regularization for robust generalization.",
        link: "https://github.com/manav-darji-aiml"
    },
    {
        title: "Twitter Sentiment Analysis",
        category: "NLP",
        impact: "87% Semantic Evaluation",
        tags: ["NLP", "KNN Algorithm", "Python"],
        desc: "KNN-based sentiment classifier trained on 50K tweets, achieving 87% accuracy in real-world semantic evaluation with optimized preprocessing.",
        link: "https://github.com/manav-darji-aiml"
    },
    {
        title: "Snake Game — Reinforcement Learning",
        category: "Reinforcement Learning",
        impact: "Self-Learning PyTorch Agent",
        tags: ["Python", "PyTorch", "RL", "Deep Q-Learning"],
        desc: "Classic Snake game where an AI agent learns entirely from environment interaction using Deep Q-Learning with PyTorch, improving strategy over training episodes.",
        link: "https://github.com/manav-darji-aiml/Snake-Game-RL"
    },
    {
        title: "SQL Query Generator — GenAI",
        category: "Generative AI",
        impact: "Natural Language to SQL",
        tags: ["Python", "LLM", "SQL", "Jupyter"],
        desc: "Natural language to SQL query generator using Large Language Models. Allows non-technical users to query databases using plain English instructions.",
        link: "https://github.com/manav-darji-aiml/SQL-database-query-gen-ai"
    }
];

export const achievements = [
    { metric: "15%", title: "Accuracy Improvement", desc: "Trained Google's Gemma LLM (Marathi) on Kaggle, optimizing preprocessing.", date: "Oct 2024 - Jan 2025" },
    { metric: "Lead", title: "ISRO Hackathon", desc: "Led a team for the Lunar Project, managing task distribution and data logic.", date: "2024" },
    { metric: "49", title: "National Rank", desc: "Ranked 49 out of 20,000+ participants in the National Coding League.", date: "2024" },
    { metric: "7x", title: "AWS ML Scholar", desc: "Completed 7 AWS Machine Learning certs covering processing, training, and deployment.", date: "2024" },
];

export const resumeDB = [
    {
        keywords: ["who", "summary", "about", "introduce", "yourself", "manav"],
        answer: "I am Manav Viral Darji, an Aspiring AI/ML Engineer skilled in building Deep Learning, GAN, and LLM-based systems using PyTorch and TensorFlow. I have a strong foundation in Transformer architectures, RAG pipelines, and Agentic AI."
    },
    {
        keywords: ["skills", "programming", "languages", "tech stack", "technologies", "frameworks", "tools", "python", "java", "c++"],
        answer: "My core programming languages are Python, C/C++, Java, JavaScript, and SQL. I work heavily with frameworks like PyTorch, TensorFlow, Scikit-learn, OpenCV, and Flask. My AI focus spans Generative AI, RAG, GANs (Pix2Pix, SPADE), and LLMs."
    },
    {
        keywords: ["gemma", "google", "kaggl", "llm experience", "open source", "marathi", "llms", "llm"],
        answer: "From Oct 2024 to Jan 2025, I was an Open-Source Contributor on Kaggle for Google's Gemma LLM (Marathi). I improved model accuracy by 15% through optimized data preprocessing and tokenizer debugging, while leading a 5-member team."
    },
    {
        keywords: ["timetable", "genai timetable", "scheduling", "flask project", "agent"],
        answer: "I developed a GenAI Timetable Management System using Flask and LLM-powered reasoning to automate class and teacher scheduling. It integrates LLM APIs with prompt-engineering for context-aware generation and dynamic rescheduling upon teacher absence."
    },
    {
        keywords: ["aurelia", "fashion", "cloud run", "luxury", "workshop", "gfg", "google", "live project", "deployed"],
        answer: "Aurelia is a live luxury fashion e-commerce site I built and deployed during the GFG × Google Antigravity Workshop. It uses HTML/CSS/JS with a Python backend, containerized via Docker and deployed on Google Cloud Run. You can visit it at aurelia-234264899332.us-central1.run.app."
    },
    {
        keywords: ["projects", "machine learning projects", "real estate", "cnn", "sentiment", "twitter", "vision", "streamlit", "price", "predictor", "mumbai", "all projects", "github projects"],
        answer: "I have 12 projects showcased on my portfolio. Live deployments: Aurelia (luxury fashion, Google Cloud Run) and Mumbai Real Estate Price Predictor (92% accuracy, Streamlit). GitHub projects include: GenAI Timetable System, MedSimplify, Research Paper Connection Finder, Local AI Assistant, YouTube Video Summarizer, Equity Research Analysis Tool, Neural Vision Classifier, Twitter Sentiment Analysis, Snake Game RL, and SQL Query Generator."
    },
    {
        keywords: ["github", "repositories", "repos", "medsimplify", "snake", "reinforcement", "sql", "youtube summarizer", "equity", "local ai", "research paper"],
        answer: "My GitHub (github.com/manav-darji-aiml) has 18 public repositories. Featured: MedSimplify (TypeScript, AI medical reports), Research Paper Connection Finder (MCP + graph), Local AI Assistant (multi-modal multi-agent), YouTube Summarizer (RAG + LLM), Equity Research Tool (LangChain), Snake Game RL (PyTorch Deep Q-Learning), and SQL GenAI Query Generator."
    },
    {
        keywords: ["certifications", "aws", "achievements", "hackathon", "awards", "national coding league", "rank", "isro"],
        answer: "I am an AWS ML Scholar with 7 AWS ML certifications. I also hold certs from TensorFlow, OpenCV, and Data Analytics. Furthermore, I was Team Lead at the ISRO Hackathon and ranked 49 out of 20,000+ in the National Coding League."
    },
    {
        keywords: ["education", "college", "cgpa", "degree", "university", "study", "graduate"],
        answer: "I am pursuing a B.Sc. (Hons) in Artificial Intelligence & Machine Learning at MKES College (Mumbai University), expected to graduate in 2027 with a current CGPA of 8.5. My coursework includes Deep Learning, NLP, and Computer Vision."
    },
    {
        keywords: ["leadership", "led", "team", "manage"],
        answer: "Yes, I have strong leadership experience. I was the Team Lead at the ISRO Hackathon for the Lunar Project, managing task distribution. I also led a 5-member team during my open-source contribution to the Google Gemma LLM project on Kaggle."
    },
    {
        keywords: ["hire", "why hire", "stand out", "best"],
        answer: "Manav presents a rare intersection of rigorous Deep Learning fundamentals (PyTorch, CNNs) and emerging GenAI architecture (RAG, Agentic AI, GANs). His 15% accuracy boost on Google's Gemma LLM proves he writes production-grade, optimized code."
    }
];
