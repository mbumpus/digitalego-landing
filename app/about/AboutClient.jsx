'use client';

import Link from 'next/link';

export default function AboutClient() {
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
            <Link href="/about" className="text-ink font-medium text-sm">
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

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-12">About</h1>
          
          <div className="space-y-8 text-lg text-hematite leading-relaxed">
            <p className="text-2xl text-ink font-medium">
              Research-driven AI for the builders.
            </p>

            <p>
              We build AI that mirrors how you think — multi-agent crews that amplify what you can do, 
              not replace who you are.
            </p>

            <p>
              Most AI tools are trained to answer. Ours are shaped to{' '}
              <span className="text-ink font-medium">reflect</span>. 
              The difference matters when you're building something real.
            </p>

            <div className="py-8 border-y border-hematite/10">
              <h2 className="text-2xl font-medium text-ink mb-6">The thesis</h2>
              
              <p className="mb-6">
                The tools building the future belong to everyone. We publish our research openly. 
                We build software that runs locally. We design governance into the architecture, not as an afterthought.
              </p>

              <p className="mb-6">
                We could cut humans out. The technology exists. We choose not to.
              </p>

              <p className="text-ink italic">
                Extension. Augmentation. Never replacement.
              </p>
            </div>

            <div className="py-8">
              <h2 className="text-2xl font-medium text-ink mb-6">What we're building</h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-24 shrink-0 text-baltic-sea font-medium">Crewly Codes</span>
                  <span>AI crews for builders. Spec-first development with Morgan, DevCrew, and QA.</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-24 shrink-0 text-quiet-violet font-medium">MWP</span>
                  <span>Open standard for AI-readable web content.</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-24 shrink-0 text-veiled-vista font-medium">Crewly ED</span>
                  <span>AI crews for learners. Personalized plans that adapt to how you think.</span>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-24 shrink-0 text-golden-mist font-medium">Crewly Home</span>
                  <span>AI crews for your home. Local-first voice assistant on Raspberry Pi.</span>
                </div>
              </div>
            </div>

            <div className="py-8 border-t border-hematite/10">
              <h2 className="text-2xl font-medium text-ink mb-6">The research</h2>
              
              <p className="mb-6">
                Our frameworks — AURA for tiered autonomy, ThoughtChain for traceable reasoning — aren't 
                marketing concepts. They're published research, implemented in working software.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex gap-2 items-start">
                  <span className="text-quiet-violet">•</span>
                  <span>IEEE SoutheastCon 2026 — Consent mechanisms in multi-agent systems (forthcoming)</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-baltic-sea">•</span>
                  <span>IIS 2025 — From Prototype to Persona: AI Agents for Decision Support</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-veiled-vista">•</span>
                  <span>IIS 2024 — ML Applications in Commercial Building Management</span>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="text-golden-mist">•</span>
                  <span>IIS 2021 — Multi-Factor Authentication Case Study (5 citations)</span>
                </div>
              </div>

              <Link 
                href="/research"
                className="inline-flex items-center gap-2 text-blue-fusion hover:text-ink transition-colors"
              >
                View publications and frameworks
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="py-8 border-t border-hematite/10">
              <h2 className="text-2xl font-medium text-ink mb-6">Who</h2>
              
              <p className="mb-4">
                DigitalEgo is built by{' '}
                <a 
                  href="https://orcid.org/0000-0002-1545-6508" 
                  target="_blank" 
                  className="text-link text-blue-fusion"
                >
                  Mike Bumpus
                </a>
                .
              </p>

              <p className="text-hematite/80 mb-6">
                Director of SaaS Delivery at Johnson Controls. Navy veteran. Peer-reviewed author. 
                Building tools for the builders who weren't supposed to be builders.
              </p>

              <div className="flex gap-6">
                <a 
                  href="https://me.dm/@mikebumpus" 
                  target="_blank"
                  className="text-hematite hover:text-ink transition-colors text-sm"
                >
                  Mastodon
                </a>
                <a 
                  href="https://github.com/mbumpus" 
                  target="_blank"
                  className="text-hematite hover:text-ink transition-colors text-sm"
                >
                  GitHub
                </a>
                <a 
                  href="https://orcid.org/0000-0002-1545-6508" 
                  target="_blank"
                  className="text-hematite hover:text-ink transition-colors text-sm"
                >
                  ORCID
                </a>
              </div>
            </div>

            <p className="text-hematite/60 text-sm pt-8">
              © 2026 AI Cabinet Method LLC
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
