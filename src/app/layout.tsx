import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // MARK: So our website doesnt look weird
    <html lang="en" className="h-full">
      {/* MARK: This is a joint classname */}
      {/* DONE: What does antialiased do in tailwind? res: good for text rendering and appearance */}
      {/* DONE: How does cn function from shadcn ui work? res: 
      1. Combining Static and Dynamic Class Names
      2. Handling Conditional Classes*/}
      <body
        // MARK: Add this as a default
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        {/* MARK: Add this main element, too. */}
        <main className="relative flex flex-col min-h-screen">
          {/* DONE: What does does this two classes do, when is it useful? RES: 
          1. The flex-grow utility class in Tailwind CSS makes an element flexible, allowing it to grow to fill the available space in its container. 
          2. When you want an element to grow and shrink as needed to fit its container, while starting with a base size of 0.*/}
          {/* MARK: Add this so our element can grow and shrink ata idk */}
          <div className="flex-grow flex-1">
            <Navbar />

            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
