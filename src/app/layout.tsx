import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/app/globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jirattichai Wantapho | Portfolio",
  description: "Computer Engineering student with skills in software development, quality assurance, and cybersecurity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`animate-fadeIn ${outfit.className}`}>
        <ClientBody>
          {children}
        </ClientBody>
        <Toaster />
      </body>
    </html>
  );
}
