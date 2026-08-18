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
      <head>
        {/* Stamp the theme class before first paint so there is no flash.
            Explicit choice wins; otherwise fall back to the OS preference. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-dark-800 text-dark-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
