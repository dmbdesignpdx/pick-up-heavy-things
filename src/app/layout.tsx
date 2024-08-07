import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "../styles/globals.css";

const heebo = Heebo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pick Up Heavy Things",
  description: "An app to calculate weight amounts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={heebo.className}>
        {children}
      </body>
    </html>
  );
}
