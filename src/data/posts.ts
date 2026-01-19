export interface Author {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    date: string;
  }
  
  export interface Comment {
    id: number;
    author: string;
    content: string;
    date: string;
    avatar: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage: string;
    author: Author;
    date: string;
    readTime: number;
    categories: string[];
    tags: string[];
    comments: Comment[];
    likes: number;
  }
  
  const authors: Author[] = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
      bio: "AI researcher specializing in machine learning and neural networks",
      date: 'Jan 2022'
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=2",
      bio: "Software engineer passionate about AI ethics and responsible AI",
      date: 'Dec 2023'
    },
    {
      id: 3,
      name: "Emma Thompson",
      avatar: "https://i.pravatar.cc/150?img=3",
      bio: "Data scientist and AI consultant with 10+ years experience",
      date: 'Feb 2023'
    },
    {
      id: 4,
      name: "Dr. James Wu",
      avatar: "https://i.pravatar.cc/150?img=4",
      bio: "Computer vision expert and deep learning researcher",
      date: 'June 2022'
    },
    {
      id: 5,
      name: "Aisha Patel",
      avatar: "https://i.pravatar.cc/150?img=5",
      bio: "NLP specialist and conversational AI developer",
      date: 'Jan 2024'
    }
  ];
  
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding Large Language Models: A Comprehensive Guide",
      slug: "understanding-large-language-models",
      excerpt: "Dive deep into how LLMs work, their architecture, and their applications in modern AI systems.",
      content: "Large Language Models have revolutionized natural language processing. In this comprehensive guide, we explore the transformer architecture, training methodologies, and real-world applications...",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      author: authors[0],
      date: "2025-01-17",
      readTime: 12,
      categories: ["Machine Learning", "NLP"],
      tags: ["llm", "transformers", "ai"],
      comments: [
        {
          id: 1,
          author: "Tech Enthusiast",
          avatar: "https://i.pravatar.cc/150?img=20",
          content: "Excellent breakdown of LLM architecture!",
          date: "2025-01-17"
        }
      ],
      likes: 89
    },
    {
      id: 2,
      title: "The Ethics of AI: Navigating Bias and Fairness",
      slug: "ethics-of-ai-bias-fairness",
      excerpt: "Exploring the critical importance of ethical considerations in AI development and deployment.",
      content: "As AI systems become more prevalent, addressing bias and ensuring fairness has never been more important. This article examines real-world cases and solutions...",
      coverImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800",
      author: authors[1],
      date: "2025-01-16",
      readTime: 10,
      categories: ["AI Ethics", "Society"],
      tags: ["ethics", "bias", "fairness"],
      comments: [],
      likes: 67
    },
    {
      id: 3,
      title: "Computer Vision in 2025: Latest Breakthroughs",
      slug: "computer-vision-2025-breakthroughs",
      excerpt: "A look at the most exciting developments in computer vision and image recognition technology.",
      content: "From medical imaging to autonomous vehicles, computer vision continues to push boundaries. We explore the latest models and techniques...",
      coverImage: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
      author: authors[3],
      date: "2025-01-15",
      readTime: 15,
      categories: ["Computer Vision", "Deep Learning"],
      tags: ["cv", "image-recognition", "neural-networks"],
      comments: [
        {
          id: 2,
          author: "Vision Dev",
          avatar: "https://i.pravatar.cc/150?img=21",
          content: "Great overview of recent advances!",
          date: "2025-01-16"
        }
      ],
      likes: 92
    },
    {
      id: 4,
      title: "Building Your First Neural Network with PyTorch",
      slug: "first-neural-network-pytorch",
      excerpt: "A beginner-friendly tutorial on creating neural networks using PyTorch framework.",
      content: "PyTorch has become one of the most popular deep learning frameworks. This step-by-step guide will help you build your first neural network...",
      coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      author: authors[2],
      date: "2025-01-14",
      readTime: 18,
      categories: ["Tutorial", "Deep Learning"],
      tags: ["pytorch", "neural-networks", "beginner"],
      comments: [
        {
          id: 3,
          author: "ML Learner",
          avatar: "https://i.pravatar.cc/150?img=22",
          content: "This tutorial was exactly what I needed!",
          date: "2025-01-15"
        },
        {
          id: 4,
          author: "Code Newbie",
          avatar: "https://i.pravatar.cc/150?img=23",
          content: "Clear explanations, thank you!",
          date: "2025-01-15"
        }
      ],
      likes: 145
    },
    {
      id: 5,
      title: "Natural Language Processing: From Rule-Based to Transformers",
      slug: "nlp-evolution-transformers",
      excerpt: "Tracing the evolution of NLP from traditional methods to modern transformer-based approaches.",
      content: "NLP has undergone a dramatic transformation. We examine the journey from rule-based systems to statistical methods and finally to transformers...",
      coverImage: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=800",
      author: authors[4],
      date: "2025-01-13",
      readTime: 14,
      categories: ["NLP", "History"],
      tags: ["nlp", "transformers", "evolution"],
      comments: [],
      likes: 78
    },
    {
      id: 6,
      title: "AI in Healthcare: Revolutionizing Diagnosis and Treatment",
      slug: "ai-healthcare-revolution",
      excerpt: "How artificial intelligence is transforming medical diagnosis, treatment planning, and patient care.",
      content: "AI is making significant strides in healthcare, from detecting diseases earlier to personalizing treatment plans...",
      coverImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      author: authors[0],
      date: "2025-01-12",
      readTime: 11,
      categories: ["Healthcare", "Applications"],
      tags: ["healthcare", "medical-ai", "diagnosis"],
      comments: [
        {
          id: 5,
          author: "Doctor Mike",
          avatar: "https://i.pravatar.cc/150?img=24",
          content: "Fascinating applications in radiology!",
          date: "2025-01-13"
        }
      ],
      likes: 103
    },
    {
      id: 7,
      title: "Reinforcement Learning: Teaching AI Through Trial and Error",
      slug: "reinforcement-learning-basics",
      excerpt: "An introduction to reinforcement learning and how it enables AI agents to learn from experience.",
      content: "Reinforcement learning has powered some of AI's most impressive achievements. Learn how agents optimize their behavior through rewards...",
      coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      author: authors[2],
      date: "2025-01-11",
      readTime: 13,
      categories: ["Reinforcement Learning", "Machine Learning"],
      tags: ["rl", "agents", "optimization"],
      comments: [],
      likes: 71
    },
    {
      id: 8,
      title: "Generative AI: Creating Art, Music, and Content",
      slug: "generative-ai-creative-applications",
      excerpt: "Exploring how generative AI models are revolutionizing creative industries.",
      content: "From DALL-E to Midjourney, generative AI is transforming how we create. We explore the technology and its impact on creativity...",
      coverImage: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
      author: authors[1],
      date: "2025-01-10",
      readTime: 9,
      categories: ["Generative AI", "Creative"],
      tags: ["generative", "dalle", "creativity"],
      comments: [
        {
          id: 6,
          author: "Artist Alex",
          avatar: "https://i.pravatar.cc/150?img=25",
          content: "AI art is changing everything!",
          date: "2025-01-11"
        },
        {
          id: 7,
          author: "Creative Coder",
          avatar: "https://i.pravatar.cc/150?img=26",
          content: "Love the examples you provided.",
          date: "2025-01-11"
        }
      ],
      likes: 156
    },
    {
      id: 9,
      title: "Edge AI: Bringing Intelligence to IoT Devices",
      slug: "edge-ai-iot-devices",
      excerpt: "How AI is being deployed on edge devices for real-time, privacy-preserving applications.",
      content: "Edge AI enables intelligent processing directly on devices without cloud connectivity. Discover the benefits and challenges...",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      author: authors[3],
      date: "2025-01-09",
      readTime: 10,
      categories: ["Edge AI", "IoT"],
      tags: ["edge-computing", "iot", "embedded-ai"],
      comments: [],
      likes: 64
    },
    {
      id: 10,
      title: "Explainable AI: Making Black Boxes Transparent",
      slug: "explainable-ai-transparency",
      excerpt: "Understanding the importance of interpretability in AI systems and methods to achieve it.",
      content: "As AI systems make critical decisions, explainability becomes crucial. We examine techniques like LIME, SHAP, and attention visualization...",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      author: authors[4],
      date: "2025-01-08",
      readTime: 12,
      categories: ["XAI", "Ethics"],
      tags: ["explainability", "interpretability", "transparency"],
      comments: [
        {
          id: 8,
          author: "Policy Maker",
          avatar: "https://i.pravatar.cc/150?img=27",
          content: "Critical for regulatory compliance!",
          date: "2025-01-09"
        }
      ],
      likes: 88
    },
    {
      id: 11,
      title: "Transfer Learning: Leveraging Pre-trained Models",
      slug: "transfer-learning-guide",
      excerpt: "How to use transfer learning to build powerful AI models with limited data.",
      content: "Transfer learning allows us to leverage pre-trained models for new tasks. Learn when and how to apply this powerful technique...",
      coverImage: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800",
      author: authors[0],
      date: "2025-01-07",
      readTime: 11,
      categories: ["Machine Learning", "Tutorial"],
      tags: ["transfer-learning", "fine-tuning", "pre-trained"],
      comments: [],
      likes: 95
    },
    {
      id: 12,
      title: "AI Safety: Ensuring Beneficial AI Development",
      slug: "ai-safety-beneficial-development",
      excerpt: "Exploring the challenges and strategies for developing safe and beneficial AI systems.",
      content: "AI safety research focuses on ensuring AI systems behave as intended. We discuss alignment, robustness, and safety considerations...",
      coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      author: authors[1],
      date: "2025-01-06",
      readTime: 16,
      categories: ["AI Safety", "Ethics"],
      tags: ["safety", "alignment", "beneficial-ai"],
      comments: [
        {
          id: 9,
          author: "Safety Researcher",
          avatar: "https://i.pravatar.cc/150?img=28",
          content: "Important considerations for the field.",
          date: "2025-01-07"
        }
      ],
      likes: 112
    },
    {
      id: 13,
      title: "Attention Mechanisms: The Heart of Transformers",
      slug: "attention-mechanisms-transformers",
      excerpt: "A deep dive into attention mechanisms and why they're fundamental to modern AI.",
      content: "Attention mechanisms revolutionized sequence modeling. We break down self-attention, multi-head attention, and their applications...",
      coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      author: authors[2],
      date: "2025-01-05",
      readTime: 14,
      categories: ["Deep Learning", "NLP"],
      tags: ["attention", "transformers", "architecture"],
      comments: [],
      likes: 127
    },
    {
      id: 14,
      title: "AI in Autonomous Vehicles: Current State and Future",
      slug: "ai-autonomous-vehicles",
      excerpt: "How AI powers self-driving cars and the challenges that remain to be solved.",
      content: "Autonomous vehicles rely on sophisticated AI systems. We explore perception, planning, and control systems in modern self-driving cars...",
      coverImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800",
      author: authors[3],
      date: "2025-01-04",
      readTime: 13,
      categories: ["Autonomous Systems", "Applications"],
      tags: ["self-driving", "robotics", "perception"],
      comments: [
        {
          id: 10,
          author: "Auto Engineer",
          avatar: "https://i.pravatar.cc/150?img=29",
          content: "Great overview of the tech stack!",
          date: "2025-01-05"
        },
        {
          id: 11,
          author: "Safety First",
          avatar: "https://i.pravatar.cc/150?img=30",
          content: "What about safety considerations?",
          date: "2025-01-05"
        }
      ],
      likes: 98
    },
    {
      id: 15,
      title: "Federated Learning: Privacy-Preserving Machine Learning",
      slug: "federated-learning-privacy",
      excerpt: "Learn how federated learning enables collaborative AI training while protecting data privacy.",
      content: "Federated learning allows training models across distributed datasets without sharing raw data. Discover how it works and its applications...",
      coverImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800",
      author: authors[4],
      date: "2025-01-03",
      readTime: 12,
      categories: ["Privacy", "Machine Learning"],
      tags: ["federated-learning", "privacy", "distributed"],
      comments: [],
      likes: 76
    },
    {
      id: 16,
      title: "GANs: Generative Adversarial Networks Explained",
      slug: "gans-explained",
      excerpt: "Understanding how GANs work and their applications in image generation and beyond.",
      content: "GANs pit two neural networks against each other to generate realistic data. Learn the architecture, training process, and applications...",
      coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800",
      author: authors[0],
      date: "2025-01-02",
      readTime: 15,
      categories: ["Generative AI", "Deep Learning"],
      tags: ["gans", "generative", "image-synthesis"],
      comments: [
        {
          id: 12,
          author: "GAN Enthusiast",
          avatar: "https://i.pravatar.cc/150?img=31",
          content: "StyleGAN examples are amazing!",
          date: "2025-01-03"
        }
      ],
      likes: 134
    },
    {
      id: 17,
      title: "AI Model Optimization: Techniques for Faster Inference",
      slug: "ai-model-optimization",
      excerpt: "Practical techniques to optimize AI models for production deployment.",
      content: "Model optimization is crucial for real-world deployment. We cover quantization, pruning, knowledge distillation, and more...",
      coverImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
      author: authors[2],
      date: "2025-01-01",
      readTime: 11,
      categories: ["Optimization", "Production"],
      tags: ["optimization", "inference", "deployment"],
      comments: [],
      likes: 82
    },
    {
      id: 18,
      title: "Multimodal AI: Combining Vision, Language, and Audio",
      slug: "multimodal-ai-systems",
      excerpt: "Exploring AI systems that can process and understand multiple types of data simultaneously.",
      content: "Multimodal models like CLIP and Flamingo bridge different data modalities. Learn how they work and their potential applications...",
      coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
      author: authors[1],
      date: "2024-12-31",
      readTime: 13,
      categories: ["Multimodal AI", "Research"],
      tags: ["multimodal", "clip", "vision-language"],
      comments: [
        {
          id: 13,
          author: "AI Researcher",
          avatar: "https://i.pravatar.cc/150?img=32",
          content: "The future is multimodal!",
          date: "2025-01-01"
        }
      ],
      likes: 108
    },
    {
      id: 19,
      title: "Data Augmentation Techniques for Deep Learning",
      slug: "data-augmentation-techniques",
      excerpt: "Essential data augmentation strategies to improve model performance and generalization.",
      content: "Data augmentation can significantly boost model performance. We explore traditional and modern augmentation techniques...",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      author: authors[3],
      date: "2024-12-30",
      readTime: 10,
      categories: ["Machine Learning", "Tutorial"],
      tags: ["data-augmentation", "preprocessing", "training"],
      comments: [],
      likes: 69
    },
    {
      id: 20,
      title: "AI in Climate Science: Fighting Climate Change with Machine Learning",
      slug: "ai-climate-science",
      excerpt: "How AI is being used to model climate systems, predict weather, and optimize renewable energy.",
      content: "AI offers powerful tools for understanding and combating climate change. We examine applications in climate modeling and sustainability...",
      coverImage: "https://images.unsplash.com/photo-1569163139394-de4798aa62b0?w=800",
      author: authors[4],
      date: "2024-12-29",
      readTime: 12,
      categories: ["Applications", "Climate"],
      tags: ["climate", "sustainability", "environmental-ai"],
      comments: [
        {
          id: 14,
          author: "Climate Scientist",
          avatar: "https://i.pravatar.cc/150?img=33",
          content: "AI is crucial for climate research!",
          date: "2024-12-30"
        }
      ],
      likes: 91
    },
    {
      id: 21,
      title: "Neural Architecture Search: Automating Model Design",
      slug: "neural-architecture-search",
      excerpt: "How NAS algorithms automatically discover optimal neural network architectures.",
      content: "Neural Architecture Search automates the design of neural networks. Learn about different NAS strategies and their trade-offs...",
      coverImage: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800",
      author: authors[0],
      date: "2024-12-28",
      readTime: 14,
      categories: ["AutoML", "Research"],
      tags: ["nas", "automl", "architecture"],
      comments: [],
      likes: 73
    },
    {
      id: 22,
      title: "AI Chatbots: Building Conversational Interfaces",
      slug: "building-ai-chatbots",
      excerpt: "A practical guide to creating intelligent chatbots using modern NLP techniques.",
      content: "Chatbots are everywhere. Learn how to build conversational AI systems using intent recognition, entity extraction, and dialogue management...",
      coverImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
      author: authors[4],
      date: "2024-12-27",
      readTime: 11,
      categories: ["NLP", "Tutorial"],
      tags: ["chatbots", "conversational-ai", "nlp"],
      comments: [
        {
          id: 15,
          author: "Bot Builder",
          avatar: "https://i.pravatar.cc/150?img=34",
          content: "Helpful tips for dialogue management!",
          date: "2024-12-28"
        }
      ],
      likes: 117
    },
    {
      id: 23,
      title: "AI Model Monitoring and Maintenance in Production",
      slug: "ai-model-monitoring-production",
      excerpt: "Best practices for monitoring AI models in production and detecting model drift.",
      content: "Deploying a model is just the beginning. Learn how to monitor performance, detect drift, and maintain AI systems in production...",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      author: authors[2],
      date: "2024-12-26",
      readTime: 13,
      categories: ["MLOps", "Production"],
      tags: ["monitoring", "mlops", "model-drift"],
      comments: [],
      likes: 85
    },
    {
      id: 24,
      title: "Few-Shot Learning: Learning from Limited Examples",
      slug: "few-shot-learning",
      excerpt: "Exploring techniques that enable AI models to learn new tasks with minimal training data.",
      content: "Few-shot learning mimics human ability to learn from few examples. We explore meta-learning, prototypical networks, and matching networks...",
      coverImage: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800",
      author: authors[1],
      date: "2024-12-25",
      readTime: 12,
      categories: ["Machine Learning", "Research"],
      tags: ["few-shot", "meta-learning", "low-data"],
      comments: [
        {
          id: 16,
          author: "ML Practitioner",
          avatar: "https://i.pravatar.cc/150?img=35",
          content: "Game-changer for small datasets!",
          date: "2024-12-26"
        }
      ],
      likes: 102
    },
    {
      id: 25,
      title: "AI in Drug Discovery: Accelerating Medical Research",
      slug: "ai-drug-discovery",
      excerpt: "How artificial intelligence is transforming pharmaceutical research and drug development.",
      content: "AI is revolutionizing drug discovery by predicting molecular properties and identifying promising drug candidates faster than ever...",
      coverImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
      author: authors[3],
      date: "2024-12-24",
      readTime: 11,
      categories: ["Healthcare", "Applications"],
      tags: ["drug-discovery", "pharma", "molecular-ai"],
      comments: [],
      likes: 94
    },
    {
      id: 26,
      title: "Contrastive Learning: Self-Supervised Representation Learning",
      slug: "contrastive-learning",
      excerpt: "Understanding contrastive learning methods and their success in self-supervised learning.",
      content: "Contrastive learning has achieved impressive results without labeled data. Learn about SimCLR, MoCo, and other contrastive methods...",
      coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
      author: authors[0],
      date: "2024-12-23",
      readTime: 14,
      categories: ["Self-Supervised", "Deep Learning"],
      tags: ["contrastive", "self-supervised", "representation"],
      comments: [
        {
          id: 17,
          author: "Deep Learning Fan",
          avatar: "https://i.pravatar.cc/150?img=36",
          content: "SimCLR results are impressive!",
          date: "2024-12-24"
        }
      ],
      likes: 78
    },
    {
      id: 27,
      title: "AI Recommender Systems: Personalization at Scale",
      slug: "ai-recommender-systems",
      excerpt: "Building effective recommendation engines using collaborative filtering and deep learning.",
      content: "Recommender systems power everything from Netflix to Amazon. Learn about collaborative filtering, content-based methods, and hybrid approaches...",
      coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      author: authors[2],
      date: "2024-12-22",
      readTime: 13,
      categories: ["Recommender Systems", "Applications"],
      tags: ["recommendations", "personalization", "collaborative-filtering"],
      comments: [],
      likes: 89
    },
    {
      id: 28,
      title: "AI Bias Detection and Mitigation Strategies",
      slug: "ai-bias-detection-mitigation",
      excerpt: "Practical approaches to identifying and reducing bias in AI systems.",
      content: "Bias in AI can lead to unfair outcomes. We explore techniques for detecting bias and strategies to mitigate it throughout the ML pipeline...",
      coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      author: authors[1],
      date: "2024-12-21",
      readTime: 15,
      categories: ["AI Ethics", "Fairness"],
      tags: ["bias", "fairness", "mitigation"],
      comments: [
        {
          id: 18,
          author: "Ethics Advocate",
          avatar: "https://i.pravatar.cc/150?img=37",
          content: "Essential reading for AI practitioners!",
          date: "2024-12-22"
        },
        {
          id: 19,
          author: "Data Scientist",
          avatar: "https://i.pravatar.cc/150?img=38",
          content: "Practical advice on bias testing.",
          date: "2024-12-22"
        }
      ],
      likes: 126
    },
    {
      id: 29,
      title: "Graph Neural Networks: Learning on Graph-Structured Data",
      slug: "graph-neural-networks",
      excerpt: "Introduction to GNNs and their applications in social networks, molecules, and more.",
      content: "Graph Neural Networks extend deep learning to graph-structured data. Learn about GCNs, GraphSAGE, and applications in various domains...",
      coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      author: authors[4],
      date: "2024-12-20",
      readTime: 16,
      categories: ["Graph ML", "Deep Learning"],
      tags: ["gnn", "graphs", "networks"],
      comments: [],
      likes: 81
    },
    {
      id: 30,
      title: "AI in Finance: Trading, Risk, and Fraud Detection",
      slug: "ai-in-finance",
      excerpt: "How AI is transforming the financial industry from algorithmic trading to fraud prevention.",
      content: "Financial institutions are leveraging AI for trading strategies, risk assessment, and fraud detection. We examine key applications and challenges...",
      coverImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800",
      author: authors[3],
      date: "2024-12-19",
      readTime: 12,
      categories: ["Finance", "Applications"],
      tags: ["fintech", "trading", "fraud-detection"],
      comments: [
        {
          id: 20,
          author: "Quant Trader",
          avatar: "https://i.pravatar.cc/150?img=39",
          content: "ML models for trading are fascinating!",
          date: "2024-12-20"
        }
      ],
      likes: 105
    },
    {
      id: 31,
      title: "Sequence-to-Sequence Models: From Translation to Summarization",
      slug: "seq2seq-models",
      excerpt: "Understanding encoder-decoder architectures and their applications in NLP tasks.",
      content: "Seq2seq models revolutionized machine translation and text generation. Learn about encoder-decoder architectures, attention, and beam search...",
      coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      author: authors[0],
      date: "2024-12-18",
      readTime: 13,
      categories: ["NLP", "Deep Learning"],
      tags: ["seq2seq", "translation", "generation"],
      comments: [],
      likes: 72
    },
    {
      id: 32,
      title: "AI Model Compression: Running Large Models on Small Devices",
      slug: "ai-model-compression",
      excerpt: "Techniques to reduce model size while maintaining performance for edge deployment.",
      content: "Model compression enables deploying powerful AI on resource-constrained devices. We explore pruning, quantization, and distillation techniques...",
      coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      author: authors[2],
      date: "2024-12-17",
      readTime: 11,
      categories: ["Optimization", "Edge AI"],
      tags: ["compression", "pruning", "quantization"],
      comments: [
        {
          id: 21,
          author: "Mobile Dev",
          avatar: "https://i.pravatar.cc/150?img=40",
          content: "Perfect for mobile deployment!",
          date: "2024-12-18"
        }
      ],
      likes: 88
    },
    {
      id: 33,
      title: "Zero-Shot Learning: Models That Never Saw the Task Before",
      slug: "zero-shot-learning",
      excerpt: "How zero-shot learning enables AI to perform tasks without task-specific training.",
      content: "Zero-shot learning allows models to generalize to unseen classes. Learn about semantic embeddings and how models like CLIP enable zero-shot classification...",
      coverImage: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
      author: authors[1],
      date: "2024-12-16",
      readTime: 12,
      categories: ["Machine Learning", "Research"],
      tags: ["zero-shot", "generalization", "transfer"],
      comments: [],
      likes: 96
    },
    {
      id: 34,
      title: "AI in Agriculture: Precision Farming and Crop Monitoring",
      slug: "ai-in-agriculture",
      excerpt: "How AI and computer vision are revolutionizing modern agriculture practices.",
      content: "AI-powered drones and sensors are transforming agriculture. We explore applications in crop monitoring, yield prediction, and pest detection...",
      coverImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
      author: authors[4],
      date: "2024-12-15",
      readTime: 10,
      categories: ["Agriculture", "Applications"],
      tags: ["agtech", "precision-farming", "computer-vision"],
      comments: [
        {
          id: 22,
          author: "Farm Tech",
          avatar: "https://i.pravatar.cc/150?img=41",
          content: "AI is changing how we farm!",
          date: "2024-12-16"
        }
      ],
      likes: 67
    },
    {
      id: 35,
      title: "Diffusion Models: The Technology Behind Stable Diffusion",
      slug: "diffusion-models-explained",
      excerpt: "Understanding how diffusion models generate high-quality images from noise.",
      content: "Diffusion models have become the state-of-the-art in image generation. Learn how they work, from the forward diffusion process to reverse denoising...",
      coverImage: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800",
      author: authors[3],
      date: "2024-12-14",
      readTime: 15,
      categories: ["Generative AI", "Deep Learning"],
      tags: ["diffusion", "stable-diffusion", "image-generation"],
      comments: [],
      likes: 143
    },
    {
      id: 36,
      title: "AI Prompt Engineering: Getting Better Results from LLMs",
      slug: "prompt-engineering-guide",
      excerpt: "Master the art of crafting effective prompts for large language models.",
      content: "Prompt engineering is crucial for getting the best results from LLMs. We share techniques, patterns, and best practices for effective prompting...",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      author: authors[0],
      date: "2024-12-13",
      readTime: 10,
      categories: ["LLM", "Tutorial"],
      tags: ["prompts", "llm", "gpt"],
      comments: [
        {
          id: 23,
          author: "Prompt Master",
          avatar: "https://i.pravatar.cc/150?img=42",
          content: "These techniques really work!",
          date: "2024-12-14"
        },
        {
          id: 24,
          author: "AI User",
          avatar: "https://i.pravatar.cc/150?img=43",
          content: "Improved my results dramatically.",
          date: "2024-12-14"
        }
      ],
      likes: 158
    },
    {
      id: 37,
      title: "Adversarial Attacks: Testing AI Model Robustness",
      slug: "adversarial-attacks-robustness",
      excerpt: "Understanding adversarial examples and how to make AI systems more robust.",
      content: "Adversarial examples can fool AI models with imperceptible changes. Learn about attack methods and defense strategies...",
      coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
      author: authors[2],
      date: "2024-12-12",
      readTime: 13,
      categories: ["AI Safety", "Security"],
      tags: ["adversarial", "robustness", "security"],
      comments: [],
      likes: 79
    },
    {
      id: 38,
      title: "AI Music Generation: Creating Songs with Machine Learning",
      slug: "ai-music-generation",
      excerpt: "Exploring AI models that can compose original music across different genres.",
      content: "From Jukebox to MusicLM, AI can now generate compelling music. We explore the technology and creative possibilities...",
      coverImage: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
      author: authors[1],
      date: "2024-12-11",
      readTime: 11,
      categories: ["Generative AI", "Audio"],
      tags: ["music", "audio", "generation"],
      comments: [
        {
          id: 25,
          author: "Music Producer",
          avatar: "https://i.pravatar.cc/150?img=44",
          content: "AI is a creative tool, not a replacement!",
          date: "2024-12-12"
        }
      ],
      likes: 92
    },
    {
      id: 39,
      title: "Active Learning: Efficiently Labeling Data",
      slug: "active-learning-strategies",
      excerpt: "How active learning reduces labeling costs by intelligently selecting samples.",
      content: "Active learning helps build high-quality datasets efficiently. Learn strategies for selecting the most informative samples to label...",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      author: authors[4],
      date: "2024-12-10",
      readTime: 12,
      categories: ["Machine Learning", "Data"],
      tags: ["active-learning", "labeling", "data-efficiency"],
      comments: [],
      likes: 74
    },
    {
      id: 40,
      title: "AI in Robotics: From Industrial Arms to Humanoids",
      slug: "ai-in-robotics",
      excerpt: "How AI enables robots to perceive, plan, and interact with the physical world.",
      content: "AI is the brain behind modern robotics. We explore perception systems, motion planning, and the latest in humanoid robots...",
      coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      author: authors[3],
      date: "2024-12-09",
      readTime: 14,
      categories: ["Robotics", "Applications"],
      tags: ["robotics", "manipulation", "planning"],
      comments: [
        {
          id: 26,
          author: "Robotics Engineer",
          avatar: "https://i.pravatar.cc/150?img=45",
          content: "Exciting times for robotics!",
          date: "2024-12-10"
        }
      ],
      likes: 107
    },
    {
      id: 41,
      title: "Hyperparameter Tuning: Optimizing Model Performance",
      slug: "hyperparameter-tuning-guide",
      excerpt: "Best practices and tools for finding optimal hyperparameters efficiently.",
      content: "Hyperparameter tuning can make or break model performance. Learn about grid search, random search, Bayesian optimization, and modern AutoML tools...",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      author: authors[0],
      date: "2024-12-08",
      readTime: 11,
      categories: ["Machine Learning", "Tutorial"],
      tags: ["hyperparameters", "optimization", "automl"],
      comments: [],
      likes: 83
    },
    {
      id: 42,
      title: "AI Code Generation: GitHub Copilot and Beyond",
      slug: "ai-code-generation",
      excerpt: "How AI coding assistants are changing software development practices.",
      content: "AI-powered code generation tools are transforming how we write software. We examine their capabilities, limitations, and impact on productivity...",
      coverImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
      author: authors[2],
      date: "2024-12-07",
      readTime: 10,
      categories: ["AI Tools", "Development"],
      tags: ["copilot", "code-generation", "productivity"],
      comments: [
        {
          id: 27,
          author: "Developer Dave",
          avatar: "https://i.pravatar.cc/150?img=46",
          content: "Copilot saves me so much time!",
          date: "2024-12-08"
        },
        {
          id: 28,
          author: "Code Reviewer",
          avatar: "https://i.pravatar.cc/150?img=47",
          content: "Still need to review AI-generated code carefully.",
          date: "2024-12-08"
        }
      ],
      likes: 121
    },
    {
      id: 43,
      title: "Curriculum Learning: Training AI Like We Teach Children",
      slug: "curriculum-learning",
      excerpt: "How organizing training data by difficulty can improve AI learning efficiency.",
      content: "Curriculum learning mimics human education by presenting easier examples first. Learn when and how to apply this training strategy...",
      coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      author: authors[1],
      date: "2024-12-06",
      readTime: 12,
      categories: ["Machine Learning", "Training"],
      tags: ["curriculum", "training", "learning-strategy"],
      comments: [],
      likes: 68
    },
    {
      id: 44,
      title: "AI in Education: Personalized Learning Platforms",
      slug: "ai-in-education",
      excerpt: "How AI is enabling adaptive learning experiences tailored to individual students.",
      content: "AI-powered education platforms can personalize content and pacing for each learner. We explore intelligent tutoring systems and learning analytics...",
      coverImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
      author: authors[4],
      date: "2024-12-05",
      readTime: 11,
      categories: ["Education", "Applications"],
      tags: ["edtech", "personalization", "adaptive-learning"],
      comments: [
        {
          id: 29,
          author: "Teacher Tom",
          avatar: "https://i.pravatar.cc/150?img=48",
          content: "AI tutors complement human teachers!",
          date: "2024-12-06"
        }
      ],
      likes: 86
    },
    {
      id: 45,
      title: "Mixture of Experts: Scaling Models Efficiently",
      slug: "mixture-of-experts",
      excerpt: "Understanding MoE architectures and how they enable training massive models.",
      content: "Mixture of Experts allows building very large models that remain computationally efficient. Learn how routing and sparse activation work...",
      coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
      author: authors[3],
      date: "2024-12-04",
      readTime: 14,
      categories: ["Deep Learning", "Architecture"],
      tags: ["moe", "scaling", "efficiency"],
      comments: [],
      likes: 95
    },
    {
      id: 46,
      title: "AI Ethics in Practice: Real-World Case Studies",
      slug: "ai-ethics-case-studies",
      excerpt: "Learning from real examples where AI systems raised ethical concerns.",
      content: "Examining actual cases of AI bias, privacy violations, and unintended consequences helps us build better systems. We analyze notable incidents and lessons learned...",
      coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      author: authors[0],
      date: "2024-12-03",
      readTime: 15,
      categories: ["AI Ethics", "Case Studies"],
      tags: ["ethics", "case-studies", "lessons"],
      comments: [
        {
          id: 30,
          author: "Ethics Researcher",
          avatar: "https://i.pravatar.cc/150?img=49",
          content: "Important lessons for the industry.",
          date: "2024-12-04"
        }
      ],
      likes: 112
    },
    {
      id: 47,
      title: "Object Detection: From R-CNN to YOLO",
      slug: "object-detection-evolution",
      excerpt: "Tracing the evolution of object detection algorithms and their applications.",
      content: "Object detection has come a long way from sliding windows to modern one-stage detectors. We compare different approaches and their trade-offs...",
      coverImage: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800",
      author: authors[2],
      date: "2024-12-02",
      readTime: 13,
      categories: ["Computer Vision", "Deep Learning"],
      tags: ["object-detection", "yolo", "rcnn"],
      comments: [],
      likes: 89
    },
    {
      id: 48,
      title: "AI Deployment Strategies: From Notebook to Production",
      slug: "ai-deployment-strategies",
      excerpt: "Best practices for taking AI models from development to production environments.",
      content: "Deploying AI models involves more than just serving predictions. Learn about containerization, API design, monitoring, and scaling strategies...",
      coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      author: authors[1],
      date: "2024-12-01",
      readTime: 12,
      categories: ["MLOps", "Production"],
      tags: ["deployment", "production", "devops"],
      comments: [
        {
          id: 31,
          author: "ML Engineer",
          avatar: "https://i.pravatar.cc/150?img=50",
          content: "Practical advice for real deployments!",
          date: "2024-12-02"
        }
      ],
      likes: 104
    },
    {
      id: 49,
      title: "Ensemble Methods: Combining Models for Better Performance",
      slug: "ensemble-methods",
      excerpt: "How combining multiple models can lead to more robust and accurate predictions.",
      content: "Ensemble methods like bagging, boosting, and stacking often outperform individual models. Learn when and how to use ensemble techniques...",
      coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      author: authors[4],
      date: "2024-11-30",
      readTime: 11,
      categories: ["Machine Learning", "Techniques"],
      tags: ["ensemble", "bagging", "boosting"],
      comments: [],
      likes: 77
    },
    {
      id: 50,
      title: "The Future of AI: Predictions for the Next Decade",
      slug: "future-of-ai-predictions",
      excerpt: "Expert perspectives on where AI technology is heading and its potential impact.",
      content: "What will AI look like in 2035? We gather insights from leading researchers and practitioners on the future of artificial intelligence...",
      coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
      author: authors[3],
      date: "2024-11-29",
      readTime: 16,
      categories: ["Future", "Opinion"],
      tags: ["future", "predictions", "trends"],
      comments: [
        {
          id: 32,
          author: "Futurist",
          avatar: "https://i.pravatar.cc/150?img=51",
          content: "Exciting and thought-provoking!",
          date: "2024-11-30"
        },
        {
          id: 33,
          author: "Skeptical Sam",
          avatar: "https://i.pravatar.cc/150?img=52",
          content: "Let's see if these predictions hold up.",
          date: "2024-12-01"
        }
      ],
      likes: 167
    }
  ];