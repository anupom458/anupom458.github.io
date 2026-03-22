"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#publications", label: "Publications" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-purple to-cyan origin-left"
        style={{ scaleX }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <a href="#hero" className="text-lg font-bold tracking-tight">
          <span className="text-accent">T</span>
          <span className="text-dark-200">A</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-dark-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-white transition after:content-[''] after:absolute after:bottom-[-2px] after:left-1/2 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:-translate-x-1/2 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-dark-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-4 sm:px-6 pb-4 space-y-3 text-sm text-dark-200"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block hover:text-white" onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
