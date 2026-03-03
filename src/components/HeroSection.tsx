import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(38 92% 55% / 0.4), transparent 70%)' }}
      />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-glow bg-secondary px-4 py-1.5 mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">Engineering Manager · Applied ML & AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-4"
          >
            Arun{" "}
            <span className="text-gradient">Surendranath</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8"
          >
            Building production-grade ML systems for manufacturing intelligence, 
            data platforms, and materials-science-informed modeling. Focused on 
            practical experimentation and end-to-end analytics delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/arunnath011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 glow-accent"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-muted"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="mailto:contact@arunnath.com"
              className="inline-flex items-center gap-2 rounded-lg border bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-muted"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
