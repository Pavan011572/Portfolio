export const projects = [
  {
    title: "Shrimp Count Prediction",
    description:
      "Government-sponsored project. Trained YOLOv8 on 8,000+ labeled images achieving 91% mAP at 24 FPS for real-time shrimp counting in aquaculture pond images.",
    techStack: ["Python", "YOLOv8", "OpenCV", "TensorFlow", "Pandas", "NumPy"],
    highlights: ["91% mAP", "24 FPS", "8,000+ images"],
    liveDemo: "https://huggingface.co/spaces/pavan011572/Shrimp",
    github: "https://github.com/Pavan011572/Shrimp",
    tag: "Government Sponsored",
  },
  {
    title: "Gastrointestinal Disease Classification",
    description:
      "Streamlit web application utilizing PyTorch and a fine-tuned ResNet50 model to classify endoscopic images of the gastrointestinal tract.",
    techStack: ["Python", "PyTorch", "ResNet50", "Streamlit", "OpenCV", "NumPy"],
    highlights: ["Transfer Learning", "ResNet50", "Medical AI"],
    liveDemo: "https://gastro-exrvwwpugrvqmtx5aqjsx3.streamlit.app/",
    github: "https://github.com/Pavan011572/gastro",
    tag: "Deep Learning",
  },
  {
    title: "AI-Powered Task Management Platform",
    description:
      "Full-stack REST API with Node.js/Express and PostgreSQL. Integrated FastAPI ML microservice using sentence-transformer embeddings with intent classifier to auto-generate intelligent subtasks.",
    techStack: ["Python", "Node.js", "Express", "PostgreSQL", "FastAPI", "Docker", "JWT"],
    highlights: ["JWT Auth", "Role-based Access", "ML Microservice"],
    liveDemo: null,
    github: "https://github.com/Pavan011572/Task-Manager",
    tag: "Full Stack",
  },
]