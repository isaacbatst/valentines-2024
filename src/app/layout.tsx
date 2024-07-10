import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Manrope } from 'next/font/google'

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})
const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "12 de Julho",
  description: "Dia dos Namorados fora de época",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${fontHeading.variable} ${fontBody.variable} antialiased`}
        >{children}</body>
    </html>
  );
}


// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

