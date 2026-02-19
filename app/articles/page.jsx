import Link from 'next/link';

export const metadata = {
  title: "Articles | DigitalEgo",
  description:
    "Explore reflective AI insights, frameworks, and thought leadership from the creators of DigitalEgo.",
};

export default function ArticlesPage() {
  return (
    <>
      {/* Content */}
      <section className="pt-8 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">Articles</h1>
          <p className="text-xl text-hematite mb-12">
            Thinking out loud about AI, autonomy, and what comes next.
          </p>

          <div className="space-y-0">
            <Link 
              href="/articles/governed-by-architecture"
              className="block py-8 border-b border-hematite/10 group"
            >
              <h2 className="text-xl font-medium text-ink group-hover:text-blue-fusion transition-colors mb-2">
                Governed by Architecture: MCP, ActiveX, and Why We're Making the Same Mistakes Again
              </h2>
              <p className="text-hematite">
                The MCP security model mirrors ActiveX-era "ambient authority" — and inherits its vulnerabilities. There's a better way.
              </p>
              <span className="text-sm text-hematite/60 mt-2 inline-block">February 2026</span>
            </Link>

            <Link 
              href="/articles/codesentry-build-story"
              className="block py-8 border-b border-hematite/10 group"
            >
              <h2 className="text-xl font-medium text-ink group-hover:text-blue-fusion transition-colors mb-2">
                From LinkedIn Scroll to Working Prototype in Two Hours
              </h2>
              <p className="text-hematite">
                A build-in-public story about AI-augmented product development. How a screenshot became a spec became a QA-approved tool in one Saturday morning.
              </p>
              <span className="text-sm text-hematite/60 mt-2 inline-block">January 31, 2026</span>
            </Link>

            <Link 
              href="/articles/behind-the-curtain"
              className="block py-8 border-b border-hematite/10 group"
            >
              <h2 className="text-xl font-medium text-ink group-hover:text-blue-fusion transition-colors mb-2">
                Behind the Curtain: How a Simple AI Experiment Became a Cognitive Framework
              </h2>
              <p className="text-hematite">
                How a tone experiment called Jules evolved into a Cabinet of AI personas—and the DigitalEgo framework.
              </p>
            </Link>

            <Link 
              href="/articles/gen-2-ai"
              className="block py-8 border-b border-hematite/10 group"
            >
              <h2 className="text-xl font-medium text-ink group-hover:text-blue-fusion transition-colors mb-2">
                What Comes After Copilot? The Rise of Gen 2 AI
              </h2>
              <p className="text-hematite">
                Gen 2 AI is about more than efficiency—it's about identity, alignment, and agency.
              </p>
            </Link>

            <Link 
              href="/articles/access-isnt-adoption"
              className="block py-8 border-b border-hematite/10 group"
            >
              <h2 className="text-xl font-medium text-ink group-hover:text-blue-fusion transition-colors mb-2">
                Access Isn't Adoption: Why Real AI Empowerment Starts with Identity
              </h2>
              <p className="text-hematite">
                Making AI available isn't enough. True adoption starts with alignment and reflective design.
              </p>
            </Link>

            <Link 
              href="/articles/recruit-personalities"
              className="block py-8 border-b border-hematite/10 group"
            >
              <h2 className="text-xl font-medium text-ink group-hover:text-blue-fusion transition-colors mb-2">
                Don't Engineer Prompts. Recruit Personalities.
              </h2>
              <p className="text-hematite">
                Stop writing better prompts. Start building better agents. Persona-driven AI is the next leap forward.
              </p>
            </Link>
          </div>

          {/* External Medium link */}
          <div className="mt-12 pt-8 border-t border-hematite/10">
            <a
              href="https://medium.com/@bumpusma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-fusion hover:text-ink transition-colors"
            >
              Read more on Medium
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
