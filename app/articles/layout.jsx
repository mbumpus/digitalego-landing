import Link from 'next/link';

export default function ArticlesLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-cloud-dancer/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-ink font-semibold text-xl tracking-tight">
            DigitalEgo
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/research" className="text-hematite hover:text-ink transition-colors text-sm">
              Research
            </Link>
            <Link href="/articles" className="text-hematite hover:text-ink transition-colors text-sm">
              Articles
            </Link>
            <Link href="/about" className="text-hematite hover:text-ink transition-colors text-sm">
              About
            </Link>
            <Link 
              href="/waitlist"
              className="btn-primary text-sm"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-24">
        {children}
      </div>
    </div>
  );
}
