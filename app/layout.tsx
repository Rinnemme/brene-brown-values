import type { Metadata } from "next";
import "./globals.css";
import { ValueProvider } from "@/src/store/provider";
import Navbar from "@/src/components/navbar";

export const metadata: Metadata = {
  title: "Brené Brown Values",
  description: "Prioritize your values",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-dvh w-full flex flex-col montserrat">
        <ValueProvider>
          <Navbar />
          {children}
        </ValueProvider>
      </body>
    </html>
  );
}
