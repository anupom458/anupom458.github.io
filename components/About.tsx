"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { about } from "@/data/content";

const iconPaths: Record<string, string> = {
  location: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
  education: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z",
  work: "M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z",
};

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">Background</p>
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-5 gap-8 sm:gap-12 items-start">
          <ScrollReveal className="md:col-span-2 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-dark-400" style={{ aspectRatio: "3/4" }}>
              <Image src="/photo.jpg" alt="Taslim R. Anupom, Ph.D." width={400} height={533}
                className="w-full h-full object-cover object-top" priority />
            </div>
            <div className="space-y-3">
              {about.quickFacts.map((fact) => (
                <div key={fact.text} className="flex items-center gap-3 text-sm text-dark-200">
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={iconPaths[fact.icon]} clipRule="evenodd" />
                  </svg>
                  {fact.text}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="md:col-span-3 space-y-5 text-dark-200 leading-relaxed">
            <p className="text-lg text-white font-medium">{about.bio[0]}</p>
            <p>{about.bio[1]}</p>
            <p>{about.bio[2]}</p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
