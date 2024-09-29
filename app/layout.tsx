import type { Metadata } from "next";
import localFont from '@next/font/local'
import "./globals.css";

const Vinque = localFont({ src: './vinque.otf' })


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
        className={Vinque.className + ` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
