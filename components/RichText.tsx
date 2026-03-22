"use client";

import { Fragment, ReactNode } from "react";

/**
 * Renders text with _underscored_ segments as <em> (italic).
 * Used primarily for italicizing scientific names like _C. elegans_.
 */
export default function RichText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const parts = children.split(/(_[^_]+_)/g);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.startsWith("_") && part.endsWith("_") ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </span>
  );
}
