import type { Metadata } from "next";
import "../styles/globals.css"
import { AudioProvider } from '@/components/audio-provider';

export const metadata: Metadata = {
  title: "Darren Sills",
  description: "Portfolio of Darren Sills",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dracula">
      {/* 
        - min-h-screen: viewport height 
        - flex flex-col: vertical stacking 
        - bg-bg text-fg: your CSS-var colors 
        - relative: so absolute children (top-left buttons) are positioned to <body>
      */}
      <body className="min-h-screen flex flex-col bg-bg text-fg relative">
        <AudioProvider>{children}</AudioProvider>
      </body>
    </html>
  );
}
