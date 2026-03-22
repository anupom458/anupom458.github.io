import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Taslim R. Anupom, Ph.D. | Engineer & Researcher",
  description:
    "Ph.D. Electrical Engineer specializing in microfluidics, IoT, full-stack development, and space biology. Lead Platform Developer at NemaLife.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-dark-800 text-dark-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
