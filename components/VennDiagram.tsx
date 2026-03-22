"use client";

import { motion } from "framer-motion";

export default function VennDiagram() {
  const circles = [
    { cx: 110, cy: 90, label: "Hardware", color: "#3b82f6", delay: 0.3, labelX: 65, labelY: 45 },
    { cx: 190, cy: 90, label: "Software", color: "#8b5cf6", delay: 0.5, labelX: 235, labelY: 45 },
    { cx: 150, cy: 155, label: "Space", color: "#06b6d4", delay: 0.7, labelX: 150, labelY: 220 },
  ];

  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      <svg viewBox="0 0 300 240" className="w-full h-auto">
        <defs>
          {circles.map((c, i) => (
            <radialGradient key={`grad-${i}`} id={`grad-${i}`}>
              <stop offset="0%" stopColor={c.color} stopOpacity="0.25" />
              <stop offset="100%" stopColor={c.color} stopOpacity="0.05" />
            </radialGradient>
          ))}
        </defs>
        {circles.map((c, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={c.cx} cy={c.cy} r="65"
              fill={`url(#grad-${i})`}
              stroke={c.color} strokeWidth="1.5" strokeOpacity="0.4"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: c.delay, ease: "easeOut" }}
            />
            <motion.text
              x={c.labelX} y={c.labelY}
              textAnchor="middle" fill={c.color} fontSize="10" fontWeight="600" letterSpacing="1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: c.delay + 0.4, duration: 0.6 }}
            >
              {c.label.toUpperCase()}
            </motion.text>
          </motion.g>
        ))}
        {/* Center glow at intersection */}
        <motion.circle
          cx="150" cy="108" r="20" fill="white" fillOpacity="0.08"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
      </svg>
    </div>
  );
}
