import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Spencer Lepine - Developer Portfolio',
  description:
    'Spencer Lepine is a full-stack software engineer specializing in TypeScript, JavaScript, React, and Node.js. Explore innovative projects and get in touch to collaborate.',
  keywords: 'Spencer Lepine, Software Engineer, Portfolio, AWS, Node.js, React, JavaScript, Frontend, Developer',
  robots: 'index, follow',
  authors: [{ name: 'Spencer Lepine' }],
  openGraph: {
    type: 'website',
    url: 'https://spencerlepine.com',
    title: 'Spencer Lepine - Developer Portfolio',
    description: 'Explore the portfolio of Spencer Lepine, a web developer proficient in Next.js, React, and modern web technologies.',
    images: [{ url: 'https://spencerlepine.com/assets/og.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spencer Lepine - Developer Portfolio',
    description: 'Check out the projects and skills of Spencer Lepine, a web developer who specializes in Next.js and React.',
    images: ['https://spencerlepine.com/assets/og.jpeg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-[family-name:var(--font-geist-sans)] antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
