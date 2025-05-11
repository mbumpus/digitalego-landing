import '../styles/globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'DigitalEgo.ai | Built to Reflect Your Brilliance',
  description: 'Not just a chatbot. A mirror. Built to reflect your brilliance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Not just a chatbot. A mirror. Built to reflect your brilliance." />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical domain */}
        <link rel="canonical" href="https://digitalego.ai" />

        {/* Open Graph */}
        <meta property="og:title" content="DigitalEgo.ai" />
        <meta property="og:description" content="Not just a chatbot. A mirror. Built to reflect your brilliance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://digitalego.ai" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="none" />
      </head>
      <body className="min-h-screen bg-[#061525] text-white">
        <header className="w-full p-4 border-b border-gray-700 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">DigitalEgo.ai</Link>
          </h1>
          <nav className="space-x-6 text-sm">
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/waitlist" className="hover:underline">
              Waitlist
            </Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
