"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, ArrowUpRight, ChevronDown, Users, MessageSquare, Lightbulb, Heart } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer - Working Student",
    company: "GMKtec GmbH",
    period: "Feb 2026 - March 2026",
    highlights: [
      "Developed frontend and backend components with RESTful APIs, automating end-to-end speed camera case processing through structured data mapping and digitisation.",
      "Built a test data generator and CSV-to-DOCX converter, mapping and transforming raw data into editable documents for internal staff.",
      "Translated business requirements into functional UI, handling data integration and validation across processing stages.",
    ],
    tags: ["REST APIs", "Frontend", "Backend", "Data Processing"],
  },
];

const otherExperience = [
  {
    title: "Military Communications Specialist",
    description: "Managed critical communication systems and coordinated team operations in high-pressure environments.",
    skills: ["Leadership", "Crisis Management", "Technical Operations", "Team Coordination"],
    icon: Users,
  },
  {
    title: "Social Worker",
    description: "Provided support and advocacy for individuals and families, developing strong empathy and problem-solving skills.",
    skills: ["Empathy", "Active Listening", "Case Management", "Community Outreach"],
    icon: Heart,
  },
  {
    title: "Restaurant Manager",
    description: "Led daily operations, managed staff, and ensured excellent customer service while optimizing business processes.",
    skills: ["People Management", "Operations", "Customer Service", "Problem-Solving"],
    icon: Users,
  },
  {
    title: "English Instructor",
    description: "Taught English to diverse groups, developing curriculum and adapting teaching methods to individual needs.",
    skills: ["Communication", "Patience", "Curriculum Design", "Adaptability"],
    icon: MessageSquare,
  },
  {
    title: "Student Council Member",
    description: "Represented student body, organized events, and collaborated with administration on campus initiatives.",
    skills: ["Public Speaking", "Negotiation", "Event Planning", "Collaboration"],
    icon: Lightbulb,
  },
];

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
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
            Career
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-balance">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="p-8 md:p-10 bg-background rounded-xl border border-border hover:border-accent/50 transition-all duration-500 relative overflow-hidden">
                {/* Accent gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="h-5 w-5 text-accent" />
                        <h3 className="text-xl md:text-2xl font-bold">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3">
                        <ArrowUpRight className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Experience - Clickable Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8">Other Experience</h3>
          <div className="space-y-4">
            {otherExperience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left"
                >
                  <div 
                    className={`p-5 bg-background rounded-xl border transition-all duration-300 ${
                      expandedIndex === index 
                        ? 'border-accent' 
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-lg transition-colors ${
                          expandedIndex === index 
                            ? 'bg-accent/20' 
                            : 'bg-secondary'
                        }`}>
                          <exp.icon className={`h-5 w-5 transition-colors ${
                            expandedIndex === index 
                              ? 'text-accent' 
                              : 'text-muted-foreground'
                          }`} />
                        </div>
                        <span className={`font-medium transition-colors ${
                          expandedIndex === index 
                            ? 'text-accent' 
                            : 'text-foreground'
                        }`}>
                          {exp.title}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-border">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
