import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Simulation Puck",
    subtitle: "Physics-Based Simulation Sandbox",
    description: "A controlled simulation environment for generating reproducible synthetic scenarios, accelerating ML experimentation when real-world data is scarce.",
    tags: ["Simulation", "Synthetic Data", "Manufacturing"],
    repoUrl: "https://github.com/arunnath011/SimulationPuck",
  },
  {
    title: "Battery Simulator",
    subtitle: "Li-Ion Battery Simulation Platform",
    description: "Synthetic data generation platform for lithium-ion battery cycling behavior, powering diagnostics, forecasting, and predictive maintenance workflows.",
    tags: ["Energy", "Predictive Modeling", "Python"],
    repoUrl: "https://github.com/arunnath011/BatterySimulator",
  },
  {
    title: "Ampere Data",
    subtitle: "Interactive Battery Data Warehouse & Analytics App",
    description: "A Streamlit-powered analytics application turning raw battery operations data into interactive dashboards and decision-ready insights.",
    tags: ["Streamlit", "Analytics", "Dashboard"],
    repoUrl: "https://github.com/arunnath011/amperedata-streamlit",
  },
  {
    title: "Energy Forecasting",
    subtitle: "Time-Series Energy Prediction Pipeline",
    description: "End-to-end forecasting pipeline with robust temporal validation, advanced feature engineering, and competitive performance on energy demand signals.",
    tags: ["Time Series", "Forecasting", "Kaggle"],
    repoUrl: "https://github.com/arunnath011/kaggle_enefit",
  },
  {
    title: "NLP Anomaly Detection",
    subtitle: "Text-Based Risk Signal Detection",
    description: "An applied NLP system that identifies unusual language patterns in operational text data, enabling early detection of hidden process anomalies.",
    tags: ["NLP", "Anomaly Detection", "Monitoring"],
    repoUrl: "https://github.com/arunnath011/NLP_Anomaly-Detection",
  },
  {
    title: "Sign Language Recognition",
    subtitle: "Gesture-Based Accessibility AI",
    description: "A sequence-aware computer vision model for recognizing isolated sign language gestures, balancing accuracy with real-time deployment constraints.",
    tags: ["Computer Vision", "Deep Learning", "Accessibility"],
    repoUrl: "https://github.com/arunnath011/isolated-sign-language-recognition",
  },
  {
    title: "ML Systems",
    subtitle: "Production ML Architecture Patterns",
    description: "A collection of reusable patterns for building reliable machine learning systems — from reproducible experimentation to deployment-ready pipelines.",
    tags: ["MLOps", "Systems Design", "Pipelines"],
    repoUrl: "https://github.com/arunnath011/ml_systems",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Practical build work spanning simulation, forecasting, NLP, computer vision, 
            and production ML systems.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
