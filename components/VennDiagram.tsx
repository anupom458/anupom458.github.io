"use client";

import { motion } from "framer-motion";

export default function VennDiagram() {
  const circles = [
    { cx: 110, cy: 90, label: "Hardware", color: "rgb(var(--accent))", delay: 0.3, labelX: 65, labelY: 45 },
    { cx: 190, cy: 90, label: "Software", color: "rgb(var(--purple))", delay: 0.5, labelX: 235, labelY: 45 },
    { cx: 150, cy: 155, label: "Space", color: "rgb(var(--cyan))", delay: 0.7, labelX: 150, labelY: 233 },
  ];

  return (
    <div className="relative w-full mx-auto">
      <svg viewBox="0 0 300 250" className="w-full h-auto">
        <defs>
          {circles.map((c, i) => (
            <radialGradient key={`grad-${i}`} id={`grad-${i}`}>
              <stop offset="0%" stopColor={c.color} stopOpacity="var(--venn-fill-from)" />
              <stop offset="100%" stopColor={c.color} stopOpacity="var(--venn-fill-to)" />
            </radialGradient>
          ))}
        </defs>
        {circles.map((c, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={c.cx} cy={c.cy} r="65"
              fill={`url(#grad-${i})`}
              stroke={c.color} strokeWidth="1.75" strokeOpacity="var(--venn-stroke-alpha)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: c.delay, ease: "easeOut" }}
            />
            <motion.text
              x={c.labelX} y={c.labelY}
              textAnchor="middle" fill={c.color} fontSize="11.5" fontWeight="700" letterSpacing="1.4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: c.delay + 0.4, duration: 0.6 }}
            >
              {c.label.toUpperCase()}
            </motion.text>
          </motion.g>
        ))}
        {/* Center glow at intersection */}
        <motion.circle
          cx="150" cy="108" r="20" fill="rgb(var(--venn-core))" fillOpacity="var(--venn-core-alpha)"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
      </svg>
    </div>
  );
}
