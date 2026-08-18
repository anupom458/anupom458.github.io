interface GradientOrbsProps {
  orbs?: Array<{
    color: string;
    position: string;
    size?: string;
  }>;
}

export default function GradientOrbs({ orbs }: GradientOrbsProps) {
  const defaultOrbs = [
    { color: "bg-accent", position: "top-1/4 -left-32", size: "w-64 sm:w-96 h-64 sm:h-96" },
    { color: "bg-purple", position: "bottom-1/4 -right-32", size: "w-64 sm:w-96 h-64 sm:h-96" },
  ];

  return (
    <>
      {(orbs || defaultOrbs).map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.position} ${orb.size || "w-64 sm:w-96 h-64 sm:h-96"} ${orb.color} rounded-full blur-3xl pointer-events-none`}
          style={{ opacity: "var(--orb-alpha)" }}
        />
      ))}
    </>
  );
}
