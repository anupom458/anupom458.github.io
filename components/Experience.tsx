"use client";

import ScrollReveal from "./ScrollReveal";
import RichText from "./RichText";
import { experience, education } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-dark-900/50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">Career</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          </div>
        </ScrollReveal>
        <div className="relative pl-10 sm:pl-16 space-y-8 sm:space-y-12">
          <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-purple to-cyan" />
          {experience.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="relative">
                <div className="w-3 h-3 rounded-full absolute left-[-29px] top-[6px] z-10 border-2 border-dark-600"
                  style={{ background: item.color, boxShadow: item.isActive ? `0 0 20px ${item.color}40` : undefined }} />
                <div className="glass rounded-xl p-4 sm:p-6 transition-all hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-bold text-white">{item.company}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{ color: item.color, backgroundColor: `${item.color}15` }}>{item.period}</span>
                  </div>
                  <p className="font-medium text-sm mb-3" style={{ color: item.color }}>{item.role}</p>
                  <ul className="space-y-2 text-sm text-dark-200">
                    {item.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-1" style={{ color: item.color }}>&#9654;</span><RichText>{bullet}</RichText>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <ScrollReveal delay={experience.length * 0.1}>
            <div className="relative">
              <div className="w-3 h-3 rounded-full absolute left-[-29px] top-[6px] z-10 border-2 border-dark-600" style={{ background: "#f59e0b" }} />
              <div className="glass rounded-xl p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-white">Education</h3>
                  <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full">2012 – 2022</span>
                </div>
                <div className="space-y-3 text-sm">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <p className="text-white font-medium">{edu.degree} <span className="text-dark-300">({edu.year})</span></p>
                      <p className="text-dark-300">{edu.school}</p>
                      {edu.dissertation && <p className="text-dark-300 italic text-xs mt-1">Dissertation: &ldquo;<RichText>{edu.dissertation}</RichText>&rdquo;</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
