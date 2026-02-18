import Link from 'next/link';

export default function ArticlesLayout({ children }) {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-cloud-dancer/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-5 flex justify-between items-center">
          <Link href="/" className="text-ink font-semibold text-lg md:text-xl tracking-tight">
            DigitalEgo
          </Link>
          <div className="flex items-center gap-4 md:gap-8">
            <Link href="/research" className="hidden sm:block text-hematite hover:text-ink transition-colors text-sm">
              Research
            </Link>
            <Link href="/articles" className="hidden sm:block text-hematite hover:text-ink transition-colors text-sm">
              Articles
            </Link>
            <Link href="/about" className="hidden md:block text-hematite hover:text-ink transition-colors text-sm">
              About
            </Link>
            <Link 
              href="/waitlist"
              className="bg-ink text-cloud-dancer px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-xs md:text-sm hover:bg-hematite transition-colors"
            >
              Newsletter
            </Link>
          </div>
        </div>
      </nav>
      
      <div className="pt-20 md:pt-24">
        {children}
      </div>
    </div>
  );
}
