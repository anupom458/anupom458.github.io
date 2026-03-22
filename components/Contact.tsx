"use client";

import ScrollReveal from "./ScrollReveal";
import { siteConfig } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-dark-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Let&apos;s Connect</h2>
          <p className="text-dark-200 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
            Interested in collaborating on research, engineering projects, or just want to chat about microfluidics, space biology, or IoT? I&apos;d love to hear from you.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a href={`mailto:${siteConfig.email}`}
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent hover:bg-accent-dark text-white text-sm sm:text-base font-medium rounded-lg transition shadow-lg shadow-accent/20">
              {siteConfig.email}
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-dark-400 hover:border-accent text-dark-100 text-sm sm:text-base font-medium rounded-lg transition">
              LinkedIn
            </a>
            <a href={siteConfig.scholar} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-dark-400 hover:border-accent text-dark-100 text-sm sm:text-base font-medium rounded-lg transition">
              Google Scholar
            </a>
            <a href={siteConfig.dyneralabs} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-dark-400 hover:border-accent text-dark-100 text-sm sm:text-base font-medium rounded-lg transition">
              Dynera Labs
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="mt-8 text-sm text-dark-400">
            <p>{siteConfig.location} · {siteConfig.phone}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
