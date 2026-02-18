import Link from 'next/link';

export const metadata = {
  title: 'Thank You | DigitalEgo',
  description: 'Thanks for joining the DigitalEgo waitlist.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-ink">
        Thank You
      </h1>
      <p className="text-xl md:text-2xl max-w-xl text-hematite mb-6">
        You're on the list.
      </p>
      <p className="text-base max-w-lg text-hematite/70 mb-10">
        We'll reach out when it's your turn to build with research-driven AI. 
        Keep an eye on your inbox.
      </p>

      <Link
        href="/"
        className="btn-primary"
      >
        Return Home
      </Link>

      <footer className="mt-16 text-sm text-hematite/40">
        Research-driven AI for the builders.
      </footer>
    </div>
  );
}
