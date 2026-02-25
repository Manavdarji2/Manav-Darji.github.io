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
        tags: ["Flask", "LangChain", "LLM APIs"],
        desc: "Developed a Generative AI-based timetable management system using multi-agent reasoning to automate complex scheduling. Extending with dynamic rescheduling.",
        link: "https://github.com/Manavdarji2"
    },
    {
        title: "UX-GenAI Synthesizer",
        category: "Generative Research",
        impact: "GAN-RAG Output Synthesis",
        tags: ["Pix2Pix", "SPADE", "ChromaDB", "RAG"],
        desc: "Independent research integrating GAN and RAG architectures for AI-driven UX design generation. Evaluating generator-discriminator performance.",
        link: "https://github.com/Manavdarji2"
    },
    {
        title: "Mumbai Real Estate Pipeline",
        category: "Machine Learning",
        impact: "92% Accuracy on 3K+ Listings",
        tags: ["Random Forest", "Scikit-learn"],
        desc: "Architected a predictive model achieving 92% accuracy on 3K+ listings. Implemented rigorous feature scaling, encoding, and cross-validation techniques.",
        link: "https://github.com/Manavdarji2"
    },
    {
        title: "Neural Vision Classifier",
        category: "Deep Learning",
        impact: "94% Top-1 Accuracy",
        tags: ["TensorFlow", "Keras", "CNN"],
        desc: "Designed a Convolutional Neural Network achieving 94% accuracy on 2K+ image datasets, incorporating ReLU activations and dropout regularization.",
        link: "https://github.com/Manavdarji2"
    },
    {
        title: "Twitter Sentiment Analysis",
        category: "NLP",
        impact: "87% Semantic Evaluation",
        tags: ["NLP", "KNN Algorithm"],
        desc: "Developed a KNN-based sentiment classifier trained on 50K tweets, achieving 87% accuracy in real-world semantic evaluation.",
        link: "https://github.com/Manavdarji2"
    },
    {
        title: "Personal AI Assistant",
        category: "Voice & Automation",
        impact: "Real-time API Execution",
        tags: ["API Integration", "Voice UI"],
        desc: "Built a voice-enabled AI assistant for real-time task automation and intelligent query handling utilizing multiple concurrent APIs.",
        link: "https://github.com/Manavdarji2"
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
        keywords: ["ux", "ux-genai", "research", "gan", "spade", "pix2pix", "design"],
        answer: "I am actively researching the integration of GAN and RAG architectures for AI-driven UX design generation. This involves leveraging Pix2Pix, SPADE, and ChromaDB to synthesize structured UX outputs."
    },
    {
        keywords: ["projects", "machine learning projects", "real estate", "cnn", "sentiment", "twitter", "vision"],
        answer: "My key projects include a Mumbai Real Estate Pipeline (Random Forest, 92% accuracy), a CNN Image Classifier (TensorFlow/Keras, 94% accuracy), and a Twitter Sentiment Analysis tool (KNN, 87% accuracy on 50K tweets)."
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
