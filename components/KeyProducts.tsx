"use client";

import ScrollReveal from "./ScrollReveal";
import RichText from "./RichText";
import { keyProducts } from "@/data/content";

export default function KeyProducts() {
  return (
    <section id="products" className="pb-16 sm:pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto border-t border-dark-500/70 pt-12 sm:pt-16">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-accent font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              Built
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold">Key Products &amp; Systems</h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {keyProducts.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.06}>
              <div className="glass rounded-lg px-4 py-3.5 sm:px-5 sm:py-4 h-full flex items-start gap-3 transition-all hover:translate-y-[-2px] hover:border-accent/30">
                <span
                  aria-hidden="true"
                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-dark-50 font-semibold text-sm sm:text-base leading-snug">
                    {p.name}
                  </h3>
                  <p className="text-dark-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    <RichText>{p.detail}</RichText>
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
