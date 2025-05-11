import '../styles/globals.css';

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

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="DigitalEgo.ai" />
        <meta property="og:description" content="Not just a chatbot. A mirror. Built to reflect your brilliance." />
        <meta property="og:image" content="/DigitalEgo_logo_TM_alt.png" />
        <meta property="og:url" content="https://digitalego.ai" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DigitalEgo.ai" />
        <meta name="twitter:description" content="Built to reflect your brilliance." />
        <meta name="twitter:image" content="/DigitalEgo_logo_TM_alt.png" />
      </head>

      <body>{children}</body>
    </html>
  );
}
