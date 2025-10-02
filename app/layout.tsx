import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blip0 - Monitor & Alert Platform",
  description: "Real-time monitoring and alerting for your critical systems",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      {/* `suppressHydrationWarning` is used on:
      // - html tag: needed by ThemeProvider for theme class attribute
      // - body tag: prevents browser extensions (like Grammarly) from causing hydration mismatches */}
      <html lang="en" suppressHydrationWarning className="h-full">
        <body
          suppressHydrationWarning
          className={`${geistSans.variable} ${geistMono.variable} antialiased h-full overscroll-none font-sans dark:[color-scheme:dark]`}
        >
          <ThemeProvider attribute="class">{children}</ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
