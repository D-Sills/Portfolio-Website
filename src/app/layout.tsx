import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"
import { AudioProvider } from '@/hooks/audio-provider';

export const metadata: Metadata = {
  title: "Darren Sills",
  description: "Portfolio of Darren Sills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dracula">
      <body className="min-h-screen flex flex-col bg-bg text-fg relative">
        <AudioProvider>{children}</AudioProvider>
        <Analytics />
      </body>
    </html>
  );
}
