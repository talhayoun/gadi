import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matrix-טכנלוגיות | טכנולוגיה מתקדמת לאיתור נזילות",
  description:
    "דיוק מקסימלי ללא הרס באמצעות תשתיות ניטור חכמות וחיישנים מהדור הבא. איתור נזילות מקצועי עם טכנולוגיה מתקדמת.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&icon_names=architecture,explore,home_repair_service,language,monitoring,plumbing,security,terminal,verified,videocam,water_drop&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="font-body selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}
