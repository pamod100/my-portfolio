import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pamod Dhananjana — Software Engineer",
  description:
    "Software Engineering student specialising in Java, Android development, and full-stack web applications. Based in Sri Lanka.",
  openGraph: {
    title: "Pamod Dhananjana — Software Engineer",
    description:
      "Software Engineering student specialising in Java, Android development, and full-stack web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}