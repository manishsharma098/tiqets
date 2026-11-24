import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { Topbar } from "@/components/topbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiqets",
  description: "Tickets and experiences",
  other: {
    "color-scheme": "only light",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-white antialiased`}
      style={{ colorScheme: "only light" }}
    >
      <head>
        <meta name="color-scheme" content="only light" />
      </head>
      <body className="flex min-h-full flex-col bg-white text-[#171717]">
        <Topbar />
        <div className="flex-1 bg-white">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
