import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, X } from "lucide-react";


type Project = {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  category: string;
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Football Match Analysis",
    shortDescription:
      "End-to-end football match analysis using computer vision to track players, estimate speed, team possession, and camera movement from broadcast video.",
    longDescription:
      "Built a modular computer vision pipeline that analyzes football match videos by detecting and tracking players, assigning teams via jersey color clustering, estimating ball possession, player speed & distance, and compensating for camera motion using optical flow. The system processes a single broadcast video and outputs annotated visual analytics for performance and tactical insights.",
    tags: ["Computer Vision", "YOLOv8", "OpenCV", "Python", "Optical Flow", "K-Means", "Numpy"],
    images: [
      "/projects/football-1.png",
    ],
    thumbnail: "/projects/football_analysis.jpg",
    category: "Computer Vision",
    github: "https://github.com/pinocchio02/Football_Match_Analysis",
  },
  {
    id: 2,
    title: "Tomato Disease Classification",
    shortDescription:
      "CNN-based model deployed to classify tomato leaf diseases using real-world image data.",
    longDescription:
      "Built and deployed a full-stack deep learning application for multi-class tomato disease detection using a CNN trained on 18,000+ annotated leaf images. Integrated a Flask API on Google Cloud Functions with a React frontend, enabling 3× faster predictions.",
    tags: ["Deep Learning", "TensorFlow", "Flask", "React", "GCP", "REST APIs", "Python"],
    images: [
      "/projects/tomato-1.png",
      "/projects/tomato-2.png",
      "/projects/tomato-3.png",
    ],
    thumbnail: "/projects/tomato_farm.jpg",
    category: "Deep Learning",
    github: "https://github.com/pinocchio02/Tomato-Disease-Classification",
  },

  {
    id: 3,
    title: "Bangalore House Price Prediction",
    shortDescription:
      "ML model deployed on AWS EC2 to predict Bangalore house prices using real-world features.",
    longDescription:
      "Built and deployed an end-to-end machine learning pipeline using Flask and AWS EC2. Implemented advanced feature engineering, improving prediction accuracy by 20%. Exposed the model via REST APIs for real-time inference and handled deployment, testing, and monitoring.",
    tags: ["Python", "Scikit-learn", "Flask", "AWS EC2", "HTML", "CSS", "Pandas", "NumPy"],
    images: [
      "/projects/bhp-1.png",
      "/projects/bhp-2.png",
    ],
    thumbnail: "/projects/house_price.jpg",
    category: "ML",
    github: "https://github.com/pinocchio02/banglore-house-price-prediction",
  },
  {
    id: 4,
    title: "Log Classification",
    shortDescription:
      "Hybrid ML framework for automated log classification and anomaly detection.",
    longDescription:
      "Developed a hybrid log classification framework that intelligently routes log messages through rule-based regex, embedding-based machine learning, and LLM-based inference depending on pattern complexity and data availability. The system uses Sentence Transformer embeddings with Logistic Regression for scalable ML classification and falls back to LLM reasoning when confidence is low. Exposed the pipeline through a FastAPI REST API for batch log processing using CSV inputs.",
    tags: [
      "Machine Learning",
      "NLP",
      "Python",
      "Scikit-learn",
      "FastAPI",
      "Grok",
      "Sentence Transformers",
      "LLMs"
    ],
    images: [
      "/projects/logs-1.png",
    ],
    thumbnail: "/projects/logs_class.png",
    category: "ML",
    github: "https://github.com/pinocchio02/log-classification"
  },
  {
    id: 5,
    title: "Jet Engine RUL Predictor(Predictive Maintenance)",
    shortDescription:
      "Real-time jet engine failure predictor deployed on Streamlit using NASA CMAPSS sensor telemetry",
    longDescription:
      "Developed a full-stack ML application to predict jet engine failure using the NASA CMAPSS dataset. Engineered advanced lag and rolling window features to capture temporal degradation, optimizing a Random Forest regressor. Deployed the solution on Streamlit Cloud, providing a user-friendly dashboard for real-time sensor monitoring and life-cycle estimation.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Joblib", "Pandas", "NumPy"],
    images: [
      "/projects/jet-1.png",
      "/projects/jet-2.png",
    ],
    thumbnail: "/projects/jet_engine.jpg",
    category: "ML",
    demo: "https://om-engine-predictor.streamlit.app/",
    github: "https://github.com/pinocchio02/Predictive-Maintenance",
  },
];

const categories = ["All", "ML", "Deep Learning", "Computer Vision"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);

  const [activeImage, setActiveImage] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const openImage = (images: string[], index: number) => {
    setActiveImage({ images, index });
  };

  const toggleExpand = (id: number) => {
    setExpandedProjectId(prev => (prev === id ? null : id));
  };


  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text pb-2">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of data science and machine learning projects spanning NLP, computer vision, and big data engineering.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-primary text-primary-foreground glow-border"
                  : "border-primary/30 hover:border-primary hover:bg-primary/10"
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col">

                {/* Project Thumbnail */}
                <div className="h-48 overflow-hidden shrink-0">
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-500
      group-hover:scale-105
    "
                  />
                </div>


                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Bottom controls always visible */}
                  <div className="mt-auto space-y-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>

                    {/* Arrow toggle */}
                    <motion.button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      whileHover={{ y: 2 }}
                      className="mx-auto block text-primary"
                      aria-label={expandedProjectId === project.id ? "Collapse project" : "Expand project"}
                    >
                      {expandedProjectId === project.id ? (
                        <ChevronUp className="h-6 w-6" />
                      ) : (
                        <ChevronDown className="h-6 w-6" />
                      )}
                    </motion.button>
                  </div>

                  {/* Expanded section INSIDE the same card */}
                  <AnimatePresence initial={false}>
                    {expandedProjectId === project.id && (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          height: { duration: 0.45, ease: "easeInOut" },
                          opacity: { duration: 0.3 }
                        }}
                        className="mt-5 border-t border-border pt-5 overflow-hidden"
                      >
                        {/* 🔹 IMAGES */}
                        {project.images?.length > 0 && (
                          <div
                            className={
                              project.images.length === 1
                                ? "flex justify-center mb-5"
                                : "grid sm:grid-cols-2 gap-4 mb-5"
                            }
                          >
                            {project.images.map((img, idx) => (
                              <div
                                key={idx}
                                className={
                                  project.images.length === 1
                                    ? "mx-auto w-full max-w-[280px]"
                                    : "w-full"
                                }
                              >
                                <img
                                  src={img}
                                  alt={`${project.title} screenshot ${idx + 1}`}
                                  onClick={() => openImage(project.images, idx)}
                                  className="
            w-full
            rounded-lg
            border
            border-border
            object-cover
            cursor-zoom-in
            hover:scale-[1.02]
            transition
          "
                                />
                              </div>
                            ))}
                          </div>
                        )}




                        {/* Long description */}
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="skill">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        {/* Live Demo Link */}
                        {project.demo && (
                          <div className="mt-4">
                            <Button
                              size="sm"
                              variant="outline"
                              className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                              asChild
                            >
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          </div>
                        )}

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <motion.button
                onClick={() => setActiveImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                    absolute
                    -top-4
                    -right-4
                    z-50
                    rounded-full
                    bg-black/60
                    border
                    border-white/20
                    p-2
                    text-white/80
                    hover:text-white
                    hover:border-white/40
                    backdrop-blur
                  "
                aria-label="Close image"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* LEFT ARROW */}
              {activeImage.images.length > 1 && activeImage.index > 0 && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute left-[-60px] text-white/80 hover:text-white"
                  onClick={() =>
                    setActiveImage((prev) =>
                      prev ? { ...prev, index: prev.index - 1 } : prev
                    )
                  }
                >
                  <ChevronLeft className="h-10 w-10" />
                </motion.button>
              )}

              {/* IMAGE */}
              <motion.img
                key={activeImage.index}
                src={activeImage.images[activeImage.index]}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="max-w-[90vw] max-h-[85vh] rounded-xl border border-border shadow-2xl"
              />

              {/* RIGHT ARROW */}
              {activeImage.images.length > 1 &&
                activeImage.index < activeImage.images.length - 1 && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-[-60px] text-white/80 hover:text-white"
                    onClick={() =>
                      setActiveImage((prev) =>
                        prev ? { ...prev, index: prev.index + 1 } : prev
                      )
                    }
                  >
                    <ChevronRight className="h-10 w-10" />
                  </motion.button>
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
