"use client";

import ScrollReveal from "./ScrollReveal";
import RichText from "./RichText";
import AnimatedCounter from "./AnimatedCounter";
import { publications, patents } from "@/data/content";
import citations from "@/data/citations.json";

export default function Publications() {
  const getCitations = (keyword: string): number => {
    return (citations.papers as Record<string, number>)[keyword] ?? 0;
  };

  return (
    <section id="publications" className="py-16 sm:py-24 px-4 sm:px-6 bg-dark-900/50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">Research</p>
            <h2 className="text-3xl sm:text-4xl font-bold">Publications & Patents</h2>
            <p className="text-dark-300 text-sm sm:text-base mt-3 sm:mt-4">
              {citations.total_citations}+ citations · h-index: {citations.h_index} · i10-index: {citations.i10_index}
            </p>
          </div>
        </ScrollReveal>
        <div className="space-y-4">
          {publications.map((pub, i) => (
            <ScrollReveal key={pub.keyword} delay={i * 0.1}>
              <div className="glass rounded-xl p-4 sm:p-5 transition-all hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-dark-50 font-medium text-sm leading-relaxed"><RichText>{pub.title}</RichText></h4>
                    <p className="text-dark-300 text-xs mt-1">{pub.authors}</p>
                    <p className="text-dark-400 text-xs mt-1">{pub.journal}</p>
                  </div>
                  <div className="text-center flex-shrink-0">
                    <div className="text-2xl font-bold text-accent tabular-nums">
                      <AnimatedCounter target={getCitations(pub.keyword)} />
                    </div>
                    <div className="text-[10px] text-dark-400 uppercase">citations</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <h3 className="text-lg font-bold text-dark-50 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Patents
            </h3>
            <div className="space-y-3">
              {patents.map((pat) => (
                <div key={pat.title} className={`glass rounded-lg p-4 border-l-4 ${pat.status === "granted" ? "border-amber-400" : "border-dark-400"}`}>
                  <p className="text-dark-50 text-sm font-medium">{pat.title}</p>
                  <p className="text-dark-300 text-xs mt-1">
                    {pat.detail}
                    {"keyword" in pat && getCitations((pat as { keyword: string }).keyword) > 0 && (
                      <span className="text-accent">
                        {" · "}
                        {getCitations((pat as { keyword: string }).keyword)}
                        {getCitations((pat as { keyword: string }).keyword) === 1 ? " citation" : " citations"}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="text-center mt-8">
            <a href="https://scholar.google.com/citations?hl=en&user=4R_-r1EAAAAJ" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline text-sm">
              View full profile on Google Scholar →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
