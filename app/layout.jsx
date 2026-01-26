import '../styles/globals.css';

export const metadata = {
  title: 'DigitalEgo — AI Infrastructure for the Agentic Web',
  description: 'Multi-agent infrastructure for the agentic web. Persona-driven AI that augments, not replaces. Building AURA, ThoughtChain, and products like MWP and Crewly.',
  keywords: 'DigitalEgo, AI agents, multi-agent, persona AI, AURA, ThoughtChain, MWP, Crewly, agentic web',
  author: 'AI Cabinet Method LLC',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical domain */}
        <link rel="canonical" href="https://digitalego.ai" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Open Graph */}
        <meta property="og:title" content="DigitalEgo — AI that mirrors how you think" />
        <meta property="og:description" content="Multi-agent infrastructure for the agentic web. Persona-driven AI that augments, not replaces." />
        <meta property="og:image" content="https://digitalego.ai/og-image.png" />
        <meta property="og:url" content="https://digitalego.ai" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DigitalEgo — AI that mirrors how you think" />
        <meta name="twitter:description" content="Multi-agent infrastructure for the agentic web. Shipping weekly." />
        <meta name="twitter:image" content="https://digitalego.ai/og-image.png" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DigitalEgo',
              legalName: 'AI Cabinet Method LLC',
              url: 'https://digitalego.ai',
              logo: 'https://digitalego.ai/favicon.svg',
              description: 'Multi-agent infrastructure for the agentic web',
              sameAs: [
                'https://github.com/mbumpus',
                'https://me.dm/@mikebumpus'
              ]
            }),
          }}
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#061525] text-white font-[Inter,system-ui,sans-serif]">
        {children}
      </body>
    </html>
  );
}
