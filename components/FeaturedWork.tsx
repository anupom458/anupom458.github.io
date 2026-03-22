"use client";

import ScrollReveal from "./ScrollReveal";
import RichText from "./RichText";
import { featuredWork } from "@/data/content";

const badgeStyles: Record<string, string> = {
  purple: "bg-purple/10 text-purple",
  emerald: "bg-emerald-400/10 text-emerald-400",
  amber: "bg-amber-400/10 text-amber-400",
};

export default function FeaturedWork() {
  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Work</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredWork.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.15}>
              <div className="glass rounded-2xl overflow-hidden group transition-all hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:border-accent/30">
                <div className={`h-36 sm:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-5xl mb-2">{project.title === "NemaStudio.ai" ? "🔬" : project.title === "Dynera Labs" ? "⚡" : "🚀"}</div>
                    <p className="text-dark-300 text-sm">{project.title}</p>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{project.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${badgeStyles[project.badgeColor] || ""}`}>{project.badge}</span>
                  </div>
                  <p className="text-dark-200 text-sm mb-4"><RichText>{project.description}</RichText></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded bg-dark-500 text-dark-200">{t}</span>
                    ))}
                  </div>
                  <span className="text-dark-300 text-sm">{project.footer}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
