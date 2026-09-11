"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Database, BarChart3, Languages, ChevronDown } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Analytics",
    icon: Code2,
    skills: ["Python", "Java", "C", "MySQL"],
    libraries: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Healpy"],
  },
  {
    title: "Software Tools",
    icon: Database,
    skills: ["Git", "Linux", "Cypress", "MATLAB"],
    libraries: ["VHDL", "LTSpice", "Excel", "MS Office"],
  },
  {
    title: "Data & Visualization",
    icon: BarChart3,
    skills: ["Data Cleaning", "Aggregation", "Visual Storytelling", "EDA with SQL"],
    libraries: [],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: [
      { name: "Korean", level: "Native" },
      { name: "English", level: "Fluent" },
      { name: "German", level: "Basic" },
    ],
    libraries: [],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-32 px-6 md:px-12 lg:px-24 bg-card/50"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-balance">
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 bg-background rounded-xl border border-border hover:border-accent/50 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills Display */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.title === "Languages" ? (
                    // Language skills with levels
                    (category.skills as { name: string; level: string }[]).map((skill) => (
                      <div
                        key={skill.name}
                        className="px-4 py-2 bg-secondary rounded-lg flex items-center gap-2"
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-xs text-accent font-medium px-2 py-0.5 bg-accent/10 rounded-full">
                          {skill.level}
                        </span>
                      </div>
                    ))
                  ) : (
                    // Regular skills as tags
                    (category.skills as string[]).map((skill) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-accent/20 hover:text-accent transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))
                  )}
                </div>

                {/* Libraries/Tools as expandable section */}
                {category.libraries.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <button
                      onClick={() => setExpandedIndex(expandedIndex === categoryIndex ? null : categoryIndex)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <span className="text-sm text-muted-foreground">
                        Related Tools & Libraries
                      </span>
                      <motion.div
                        animate={{ rotate: expandedIndex === categoryIndex ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </motion.div>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedIndex === categoryIndex ? "auto" : 0,
                        opacity: expandedIndex === categoryIndex ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap gap-2 pt-3">
                        {category.libraries.map((lib) => (
                          <span
                            key={lib}
                            className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                          >
                            {lib}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 p-8 bg-background rounded-xl border border-border"
        >
          <h3 className="text-lg font-bold mb-4">Core Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Full-Stack Development",
              "Data Analysis",
              "API Design",
              "Test Automation",
              "Agile Methodology",
              "Cross-functional Collaboration",
            ].map((competency, index) => (
              <motion.span
                key={competency}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="px-4 py-2 bg-accent/10 text-accent rounded-full font-medium text-sm"
              >
                {competency}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
