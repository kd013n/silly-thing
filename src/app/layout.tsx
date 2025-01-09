import type { Metadata } from "next";
import "./globals.css";
import { Tiny5 } from "next/font/google";

const tiny5 = Tiny5({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "silly directory",
  description: "sillysillysillysillysilly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tiny5.className}>{children}</body>
    </html>
  );
}
