"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Coders Club Website",
    category: "Club Project",
    period: "June 2025 - Present",
    description:
      "Co-developing the Coders Club Website as the club's central platform for onboarding and project visibility. Driving community engagement through event coordination, member onboarding, and knowledge-sharing initiatives.",
    tags: ["Next.js", "Tailwind CSS", "AWS S3", "CloudFront", "Route 53", "Lambda"],
    github: "https://www.coders-club.dev/en/home/",
    hideGithubIcon: true,
  },

  {
    title: "AI Growth Engineering Experiments",
    category: "Experiment Project",
    period: "October 2026",
    description:
      "Built three live AI tools for trade businesses (website check, weather-based scheduling, voice job notes) and scoped a fourth idea before stopping it. Each experiment has a hypothesis, funnel metric, pass/kill criteria, and an honest account of its limits. Code extracts the facts and does the maths, so the AI cannot invent numbers.",
    tags: ["Cloudflare Workers", "Workers AI", "Whisper", "Llama 3.1", "Open-Meteo", "JavaScript", "GitHub Pages"],
    github: "https://studentingermany.github.io/ai-growth-engineering/"
    // links: [
    //   { label: "Website Quick Check", href: "https://studentingermany.github.io/ai-growth-engineering/website-check.html" },
    //   { label: "Weather Work Window", href: "https://studentingermany.github.io/ai-growth-engineering/weather-schedule.html" },
    //   { label: "Voice Job Note", href: "https://studentingermany.github.io/ai-growth-engineering/voice-note.html" },
    // ],
  },

  {
    title: "Asteroid_Movement_Algorithms",
    category: "University Project - Ongoing",
    period: "Python",
    description:
      "Developed a benchmarking framework to compare astronomical moving-object detection algorithms, including FindPOTATOs and Heliolinc.",
    tags: ["Python", "C++"],
    github: "https://github.com/StudentinGermany/StudentinGermany/tree/main/Asteroid_Movement_Algorithms",
  },
  {
    title: "NASA Cosmic Data Analysis",
    category: "University Project",
    period: "Python",
    description:
      "Processed NASA cosmic data with healpy/anafast. Built visualizations with Pandas, NumPy, Matplotlib, and Seaborn. Explored ML fundamentals.",
    tags: ["Python", "NumPy", "Matplotlib", "Seaborn", "Healpy"],
    github: "https://github.com/StudentinGermany/StudentinGermany/tree/main/Python/Cosmic%20Technology",
  },
  {
    title: "Robotics Project",
    category: "HAW Hamburg",
    period: "Sep 2023 - Oct 2023",
    description:
      "Developed a robotic system, engineering algorithms that achieved 100% object recognition accuracy for precise sorting tasks. Managed project workflow and delivered presentations using design thinking methodology.",
    tags: ["Robotics", "Algorithm Design", "Object Recognition"],
    github: "https://youtu.be/c2jPAlrlAdg",
  },
  {
    title: "COVID-19 Data Analysis",
    category: "SQL Project",
    period: "Self-Directed",
    description:
      "Analysed COVID-19 public health datasets using CTEs, window functions, and aggregations to extract insights on case rates and outcomes.",
    tags: ["SQL", "CTEs", "Window Functions", "Data Analysis"],
    github: "https://github.com/StudentinGermany/StudentinGermany/tree/main/MySQL",
  },
  {
    title: "Decorator Pattern Implementation",
    category: "Java Project",
    period: "Self-Directed",
    description:
      "Implemented the Decorator design pattern to model extensible object behaviour in Java.",
    tags: ["Java", "Design Patterns", "OOP"],
    github: "https://github.com/StudentinGermany/StudentinGermany/tree/main/Java/Kangaroo-Decorator%20Pattern",
  },
  {
    title: "E2E Testing Suite",
    category: "QA Project",
    period: "Self-Directed",
    description:
      "Wrote end-to-end test suites in Cypress for a web application, ensuring quality and reliability.",
    tags: ["Cypress", "E2E Testing", "QA", "JavaScript"],
    github: "https://github.com/StudentinGermany/StudentinGermany/tree/main/Quality%20Assurance",
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const [expandedTags, setExpandedTags] = useState<number | null>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const hiddenCount = projects.length - 3;

  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-balance">
            Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group h-full"
              >
                <div className="h-full p-6 md:p-8 bg-card rounded-xl border border-border hover:border-accent transition-all duration-500 flex flex-col relative overflow-hidden">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-medium text-accent">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold mt-1 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {project.period}
                        </span>
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 hover:bg-secondary rounded-lg transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tags with expand functionality */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {(expandedTags === index ? project.tags : project.tags.slice(0, 3)).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.tags.length > 3 && (
                        <button
                          onClick={() => setExpandedTags(expandedTags === index ? null : index)}
                          className="mt-2 text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                        >
                          {expandedTags === index ? (
                            <>Show less</>
                          ) : (
                            <>
                              +{project.tags.length - 3} more: {project.tags.slice(3).join(", ")}
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* View on GitHub link */}
                    {project.github && !project.hideGithubIcon &&(
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors group/link"
                      >
                        <span>View</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 text-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="group px-8 py-6 border-accent/50 hover:border-accent hover:bg-accent/10"
            >
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="mr-2"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
              {showAll ? "Show Less" : `Show ${hiddenCount} More Projects`}
            </Button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="group px-8 py-6"
            asChild
          >
            <a
              href="https://github.com/StudentinGermany/StudentinGermany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
