import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IIFS - Indian Institute of Future Skills",
  description: "Revolutionizing Indian education with AI-powered learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
