import { 
  Bot, 
  Blocks, 
  Zap, 
  TrendingUp, 
  Shield, 
  Code,
  Database,
  Cloud
} from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Advanced AI solutions that learn and adapt to your business needs, from predictive analytics to intelligent automation.",
    icon: Bot,
    color: "from-cyan-500 to-blue-500",
    demo: "View Demo",
    features: [
      "Custom ML model development",
      "Natural language processing",
      "Computer vision systems",
      "Predictive analytics"
    ],
    technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    benefits: [
      "Reduce operational costs by 40%",
      "Improve decision accuracy by 85%",
      "Automate repetitive tasks"
    ],
    caseStudy: {
      title: "E-commerce Recommendation Engine",
      result: "Increased conversion rates by 127%"
    }
  },
  {
    id: 2,
    title: "Blockchain Development",
    description: "Secure, transparent blockchain solutions including smart contracts, DeFi platforms, and custom cryptocurrency systems.",
    icon: Blocks,
    color: "from-purple-500 to-pink-500",
    demo: "View Demo",
    features: [
      "Smart contract development",
      "DeFi protocol creation",
      "NFT marketplace platforms",
      "Cryptocurrency integration"
    ],
    technologies: ["Ethereum", "Solidity", "Web3.js", "Polygon", "Chainlink"],
    benefits: [
      "Eliminate intermediaries",
      "Reduce transaction costs by 60%",
      "Enhance security and transparency"
    ],
    caseStudy: {
      title: "Supply Chain Tracking Platform",
      result: "Reduced fraud by 95%"
    }
  },
  {
    id: 3,
    title: "DevOps & Cloud Automation",
    description: "Streamline your development lifecycle with automated CI/CD pipelines, containerization, and cloud infrastructure management.",
    icon: Zap,
    color: "from-green-500 to-teal-500",
    demo: "View Demo",
    features: [
      "CI/CD pipeline setup",
      "Container orchestration",
      "Infrastructure as Code",
      "Monitoring and alerting"
    ],
    technologies: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins"],
    benefits: [
      "Reduce deployment time by 80%",
      "Minimize downtime to <0.1%",
      "Improve team productivity"
    ],
    caseStudy: {
      title: "Multi-Cloud Migration",
      result: "Reduced infrastructure costs by 45%"
    }
  },
  {
    id: 4,
    title: "Data Analytics & Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics, real-time dashboards, and business intelligence solutions.",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    demo: "View Demo",
    features: [
      "Real-time analytics dashboards",
      "Data warehouse design",
      "Business intelligence tools",
      "Predictive modeling"
    ],
    technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark"],
    benefits: [
      "Make data-driven decisions",
      "Identify trends 3x faster",
      "Improve ROI by 200%"
    ],
    caseStudy: {
      title: "Real-time Sales Analytics",
      result: "Increased revenue by 78%"
    }
  }
];

export const serviceStats = {
  projectsCompleted: 150,
  clientSatisfaction: 98,
  averageROI: 285,
  supportResponse: "< 2 hours"
};
