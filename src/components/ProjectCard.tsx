import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  repoUrl: string;
  index: number;
}

const ProjectCard = ({ title, subtitle, description, tags, repoUrl, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex flex-col rounded-xl border bg-card p-6 transition-all duration-300 hover:border-glow hover:glow-accent"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
            <Github className="h-5 w-5 text-secondary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground font-mono">{subtitle}</p>
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
