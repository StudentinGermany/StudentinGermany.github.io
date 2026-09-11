"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative w-full py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-1 bg-gradient-to-r from-transparent via-border to-transparent origin-left"
        />
      </div>
    </div>
  );
}
