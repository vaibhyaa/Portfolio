//

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaibhav Portfolio",
  description: "Fullstack Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased leading-8 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
