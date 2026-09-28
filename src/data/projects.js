export const projects = [
  {
    title: "TripMate AI",
    tagline: "Multi-Agent Travel Planner",
    description:
      "A travel planning assistant that coordinates specialist agents and live travel data to build practical itineraries.",
    bullets: [
      "Supervisor-router architecture dispatching to specialized flight, hotel, weather, and budget agents.",
      "Integrated MCP servers (AviationStack, Tavily, OpenWeather) for live data retrieval and a Human-in-the-Loop approval gate via LangGraph interrupts.",
      "Input guardrails and token-budget-aware LLM calls with retry handling under API rate limits.",
    ],
    stack: ["FastAPI", "LangGraph", "Groq", "PostgreSQL", "MCP"],
    liveUrl: "https://tripmate-ai-j9uw.onrender.com/",
    githubUrl: "https://github.com/nitesh45176/TripMate-AI-Final",
    image: "/projects/tripmateai.png",
    featured: true,
  },
  {
    title: "CivicAI",
    tagline: "AI-Powered Municipal Grievance Platform",
    description:
      "A civic issue reporting platform combining visual analysis with reliable complaint routing and resolution tracking.",
    bullets: [
      "Hybrid CV + multimodal AI pipeline for civic issue detection, severity, and safety-risk assessment.",
      "Deterministic backend logic for authority routing, SLA monitoring, and automated email escalation.",
      "Complaint lifecycle tracking, status history, and an authority dashboard with resolution evidence.",
    ],
    stack: ["FastAPI", "React", "Computer Vision", "Multimodal AI"],
    liveUrl: "https://civic-ai-tech.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/civicai",
    image: "/projects/civicai.png",
    featured: true,
  },
  {
    title: "Cashora",
    tagline: "Personal Finance Platform",
    description:
      "A financial intelligence platform for statement analysis, spending insights, and conversational finance workflows.",
    bullets: [
      "Financial intelligence platform for automated bank statement analysis and insights.",
      "Agentic AI assistant using LangGraph, RAG, and tool calling for natural-language financial queries.",
      "OCR, transaction categorization, financial analytics, and streaming AI responses.",
    ],
    stack: ["Python", "FastAPI", "React", "PostgreSQL", "LangGraph", "Groq"],
    liveUrl: "https://cashora-ai.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/Cashora",
    image: "/projects/cashora.png",
    featured: true,
  },
  {
    title: "ResonoAI",
    tagline: "AI Voice Platform",
    description:
      "An AI-powered SaaS platform for text-to-speech and voice cloning, built around secure user workflows and deployable infrastructure.",
    bullets: [
      "AI-powered SaaS platform with TTS, voice cloning, secure authentication and scalable backend architecture.",
      "Deployed with Docker, GitHub Actions, AWS EC2, and Nginx.",
      "Scalable APIs and PostgreSQL database workflows for reliable user operations.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker", "AWS", "Cloudflare R2"],
    liveUrl: "https://resono-ai.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/ResonoAI",
    image: "/projects/Resono.png",
    featured: true,
  },
  {
    title: "NeuraAI",
    tagline: "AI Meeting Assistant",
    description:
      "A multilingual meeting assistant for transcription, summaries, action items, and questions over meeting transcripts.",
    bullets: [],
    stack: ["Whisper", "RAG", "ChromaDB", "Sarvam AI"],
    liveUrl: "https://neura-ai-six.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/NeuraAI",
    image: "/projects/neuraai.png",
    featured: false,
  },
  {
    title: "Taskora",
    tagline: "Task Execution Marketplace",
    description:
      "A platform where users post tasks and runners complete them through a full-stack workflow.",
    bullets: [],
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://taskora-ygjk.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/Taskora",
    image: "/projects/taskora.png",
    featured: false,
  },
  {
    title: "Hotel Booking",
    tagline: "Full-Stack Hotel Booking Platform",
    description:
      "A hotel booking application with room management, authentication, and booking workflows.",
    bullets: [],
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://hotel-booking-beta-ochre.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/Hotel-booking",
    image: "/projects/HotelBooking.png",
    featured: false,
  },
  {
    title: "BugVault",
    tagline: "Developer Bug & Decision Memory System",
    description:
      "A developer memory system for tracking bugs, decisions, and root causes over time.",
    bullets: [],
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://bugvault.vercel.app/",
    githubUrl: "https://github.com/nitesh45176/BugVault",
    image: "/projects/bugvault.png",
    featured: false,
  },
];