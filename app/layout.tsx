import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/vinque.otf",
  variable: "--font-vinque-sans",
  weight: "100 300 500 600 700 900",
});
const geistMono = localFont({
  src: "./fonts/vinque.otf",
  variable: "--font-vinque",
  weight: "100 300 500 600 700 900",
});

export const metadata: Metadata = {
  title: "Invitation to a wizard's party",
  description: "Burn this upon reading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
