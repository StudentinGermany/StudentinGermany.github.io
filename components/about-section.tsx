"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-balance">
            Who I Am
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light">
              I am a passionate engineering student with a diverse background spanning 
              technology, business, and social work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my B.Sc. in Information Engineering at HAW Hamburg, 
              I bring a unique perspective shaped by cross-cultural experiences and 
              a commitment to solving real-world problems through technology-driven solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey from South Korea to Germany has equipped me with adaptability, 
              strong communication skills, and a global mindset. I thrive in collaborative 
              environments where I can combine technical expertise with creative problem-solving.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              From developing RESTful APIs at GMKtec to co-building the Coders Club 
              platform, I am driven by the opportunity to create meaningful digital 
              experiences that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Outside of my work, I enjoy exploring new technologies, contributing to open-source, and engaging with the university tech community through collaboration
            </p>
            
            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Coding</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">7+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground mt-1">Languages</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
