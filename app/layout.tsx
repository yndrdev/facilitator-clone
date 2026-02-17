import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Full-Stack Facilitator: 5-Day Facilitation Bootcamp | Facilitator.com",
  description:
    "Our transformational 5-day training bootcamp where you'll learn the fundamentals of facilitation, group dynamics, and workshop design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${caveat.variable} font-[var(--font-inter)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
