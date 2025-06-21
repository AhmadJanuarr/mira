import { AsideWrapper } from "@/components/layout/aside/AsideWrapper";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mira task",
  description: "Task management app for Mira App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="flex">
          <AsideWrapper />
          {children}
        </main>
      </body>
    </html>
  );
}
