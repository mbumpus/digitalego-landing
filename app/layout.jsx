import '../styles/globals.css';

export const metadata = {
  title: 'DigitalEgo — Research-driven AI for the builders',
  description: 'AI that mirrors how you think. Multi-agent crews that amplify what you can do. Extension, augmentation, never replacement.',
  keywords: 'DigitalEgo, AI agents, multi-agent, persona AI, AURA, ThoughtChain, MWP, Crewly, AI research',
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
        <meta property="og:title" content="DigitalEgo — Research-driven AI for the builders" />
        <meta property="og:description" content="AI that mirrors how you think. Multi-agent crews that amplify what you can do. Extension, augmentation, never replacement." />
        <meta property="og:image" content="https://digitalego.ai/og-image.png" />
        <meta property="og:url" content="https://digitalego.ai" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DigitalEgo — Research-driven AI for the builders" />
        <meta name="twitter:description" content="AI that mirrors how you think. Multi-agent crews that amplify what you can do." />
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
              description: 'Research-driven AI for the builders',
              sameAs: [
                'https://github.com/mbumpus',
                'https://me.dm/@mikebumpus',
                'https://orcid.org/0000-0002-1545-6508'
              ]
            }),
          }}
        />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-cloud-dancer text-hematite font-[Inter,system-ui,sans-serif]">
        {children}
      </body>
    </html>
  );
}
