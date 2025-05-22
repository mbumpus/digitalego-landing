import dynamic from 'next/dynamic'; 
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
        <meta name="keywords" content="DigitalEgo, AI persona, conversational AI, Jules, reflective intelligence, LLM, chatbot" />
        <meta name="author" content="DigitalEgo.AI" />

        {/* Canonical domain */}
        <link rel="canonical" href="https://digitalego.ai" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph */}
        <meta property="og:title" content="DigitalEgo.ai" />
        <meta property="og:description" content="Not just a chatbot. A mirror. Built to reflect your brilliance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://digitalego.ai" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DigitalEgo.ai" />
        <meta name="twitter:description" content="Built to reflect your brilliance." />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DigitalEgo.ai',
              url: 'https://digitalego.ai',
              logo: 'https://digitalego.ai/favicon.svg',
              sameAs: [
                'https://www.linkedin.com/company/digitalego-ai',
                'https://www.facebook.com/digitalego.ai'
              ]
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#061525] text-white">
        <header className="w-full p-4 border-b border-gray-700 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">DigitalEgo.ai</Link>
          </h1>
          <nav className="space-x-6 text-sm">
            <Link href="/articles" className="hover:underline">
              Articles
            </Link>
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
