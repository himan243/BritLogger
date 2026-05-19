import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "BritLogger",
  description: "Personal and team progress logger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        <nav style={{ 
          display: 'flex', 
          gap: '1rem', 
          padding: '1rem', 
          backgroundColor: '#333', 
          color: 'white',
          alignItems: 'center'
        }}>
          <Link href="/" style={{ color: 'white', fontWeight: 'bold', marginRight: '1rem', textDecoration: 'none' }}>BritLogger</Link>
          <Link href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
          <Link href="/logs" style={{ color: 'white', textDecoration: 'none' }}>Logging</Link>
          <Link href="/search" style={{ color: 'white', textDecoration: 'none' }}>Search</Link>
          <Link href="/export" style={{ color: 'white', textDecoration: 'none' }}>Export</Link>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
            <Link href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
            <Link href="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
