import '../styles/globals.css';

export const metadata = {
  title: 'DigitalEgo.ai | Built to Reflect Your Brilliance',
  description: 'Not just a chatbot. A mirror. Built to reflect your brilliance.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="DigitalEgo.ai" />
        <meta property="og:description" content="Not just a chatbot. A mirror. Built to reflect your brilliance." />
        <meta property="og:image" content="/DigitalEgo_logo_TM_alt.png" />
        <meta property="og:url" content="https://www.digitalego.ai" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
