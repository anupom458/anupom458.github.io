"use client";

import ScrollReveal from "./ScrollReveal";
import { skillCategories } from "@/data/content";

const colorStyles: Record<string, { icon: string; iconBg: string; tag: string }> = {
  accent: { icon: "text-accent", iconBg: "bg-accent/10", tag: "bg-accent/10 text-accent" },
  purple: { icon: "text-purple", iconBg: "bg-purple/10", tag: "bg-purple/10 text-purple" },
  cyan: { icon: "text-cyan", iconBg: "bg-cyan/10", tag: "bg-cyan/10 text-cyan" },
  amber: { icon: "text-amber-400", iconBg: "bg-amber-400/10", tag: "bg-amber-400/10 text-amber-400" },
};

const categoryIcons: Record<string, string> = {
  Engineering: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
  Software: "M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z",
  "Data & Visualization": "M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z",
  "DevOps & Tools": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">Expertise</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((cat, i) => {
            const styles = colorStyles[cat.color];
            return (
              <ScrollReveal key={cat.name} delay={i * 0.1}>
                <div className="glass rounded-xl p-4 sm:p-6 transition-all hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  <div className={`w-10 h-10 rounded-lg ${styles.iconBg} flex items-center justify-center mb-4`}>
                    <svg className={`w-5 h-5 ${styles.icon}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d={categoryIcons[cat.name]} clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-3">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span key={skill} className={`text-xs px-2 py-1 rounded ${styles.tag}`}>{skill}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
