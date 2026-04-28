"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    value: "StudentinGermany",
    href: "https://github.com/StudentinGermany",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/eunseong-yun",
  },
  {
    icon: Mail,
    label: "Email",
    value: "aydenyun.germany@gmail.com",
    href: "mailto:contact@example.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hamburg, Germany",
    href: null,
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 tracking-tight text-balance">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
            {"I'm currently looking for opportunities in software engineering. Whether you have a question or just want to say hi, feel free to reach out!"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center p-6 bg-card rounded-xl border border-border hover:border-accent transition-all duration-300"
                >
                  <div className="p-3 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                    <link.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">
                    {link.label}
                  </span>
                  <span className="font-medium text-center group-hover:text-accent transition-colors">
                    {link.value}
                  </span>
                </a>
              ) : (
                <div className="flex flex-col items-center p-6 bg-card rounded-xl border border-border">
                  <div className="p-3 bg-accent/10 rounded-full mb-4">
                    <link.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground mb-1">
                    {link.label}
                  </span>
                  <span className="font-medium text-center">{link.value}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="group bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg"
            asChild
          >
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              Download My CV
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
