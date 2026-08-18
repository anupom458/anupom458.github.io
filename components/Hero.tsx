"use client";

import { motion } from "framer-motion";
import VennDiagram from "./VennDiagram";
import AnimatedCounter from "./AnimatedCounter";
import GradientOrbs from "./GradientOrbs";
import { siteConfig, stats } from "@/data/content";
import citations from "@/data/citations.json";

export default function Hero() {
  const statItems = [
    { value: citations.total_citations, suffix: "+", label: "Citations" },
    { value: stats.publications, suffix: "", label: "Publications" },
    { value: stats.patents, suffix: "", label: "Patents" },
    // parsed from stats.yearsExp in data/content.ts — do not hardcode here
    { value: parseInt(stats.yearsExp, 10), suffix: "+", label: "Years Exp." },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <GradientOrbs />
      {/* pt accounts for the fixed nav; pb kept tight so the fold is filled */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="flex-1 text-center md:text-left">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-3">
              {siteConfig.subtitle}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight mb-4">
              {siteConfig.name}<span className="gradient-text">, {siteConfig.title}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              className="text-base sm:text-lg text-dark-200 max-w-lg mb-8 leading-relaxed">
              {siteConfig.tagline}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-3">
              <a href="#work" className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition shadow-lg shadow-accent/20">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border border-dark-400 hover:border-accent text-dark-100 font-medium rounded-lg transition">
                Get in Touch
              </a>
              <a href="/Taslim_Anupom_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-dark-400 hover:border-accent text-dark-100 font-medium rounded-lg transition">
                Resume / CV
              </a>
            </motion.div>
          </div>
          <div className="flex-shrink-0 w-full max-w-[290px] sm:max-w-[330px] md:w-[330px] md:max-w-none">
            <VennDiagram />
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
          className="mt-10 sm:mt-12 flex justify-center md:justify-start">
          <div className="glass rounded-xl px-6 sm:px-8 py-4 sm:py-5 flex gap-7 sm:gap-12">
            {statItems.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-dark-50 tabular-nums">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs text-dark-300 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
