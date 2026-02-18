'use client';

import Link from 'next/link';

export default function AboutClient() {
  return (
    <div className="bg-[#061525] text-white min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#061525]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/DigitalEgo_logo_TM_alt.png" alt="DigitalEgo" className="h-8" />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-white font-medium text-sm">About</Link>
            <Link href="/research" className="text-slate-400 hover:text-white transition-colors text-sm">Research</Link>
            <Link href="/articles" className="text-slate-400 hover:text-white transition-colors text-sm">Articles</Link>
            <Link 
              href="/waitlist"
              className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About DigitalEgo</h1>
          
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p className="text-xl text-white">
              Research-driven AI for the builders.
            </p>

            <p>
              We build AI that mirrors how you think — multi-agent crews that amplify what you can do, 
              not replace who you are.
            </p>

            <p>
              Most AI tools are trained to answer. Ours are shaped to <span className="text-white font-medium">reflect</span>. 
              The difference matters when you're building something real.
            </p>

            <h2 className="text-2xl font-semibold text-white pt-6">The thesis</h2>
            
            <p>
              The tools building the future belong to everyone. We publish our research openly. 
              We build software that runs locally. We design governance into the architecture, not as an afterthought.
            </p>

            <p>
              We could cut humans out. The technology exists. We choose not to.
            </p>

            <p className="text-slate-400 italic">
              Extension. Augmentation. Never replacement.
            </p>

            <h2 className="text-2xl font-semibold text-white pt-6">What we're building</h2>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold shrink-0">Crewly Codes</span>
                <span>— AI crews for builders. Spec-first development with Morgan, DevCrew, and QA.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-violet-400 font-bold shrink-0">MWP</span>
                <span>— Open standard for AI-readable web content.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold shrink-0">Crewly ED</span>
                <span>— AI crews for learners. Personalized plans that adapt to how you think.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 font-bold shrink-0">Crewly Home</span>
                <span>— AI crews for your home. Local-first voice assistant on Raspberry Pi.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white pt-6">The research</h2>
            
            <p>
              Our frameworks — AURA for tiered autonomy, ThoughtChain for traceable reasoning — aren't 
              marketing concepts. They're published research, implemented in working software.
            </p>
            
            <ul className="space-y-2 text-slate-400">
              <li>• IEEE SoutheastCon 2026 — Consent mechanisms in multi-agent systems (forthcoming)</li>
              <li>• IIS 2025 — From Prototype to Persona: AI Agents for Decision Support</li>
              <li>• IIS 2024 — ML Applications in Commercial Building Management</li>
              <li>• IIS 2021 — Multi-Factor Authentication Case Study (5 citations)</li>
            </ul>

            <Link 
              href="/research"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors mt-4"
            >
              View publications and frameworks
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <h2 className="text-2xl font-semibold text-white pt-6">Who</h2>
            
            <p>
              DigitalEgo is built by{' '}
              <a 
                href="https://orcid.org/0000-0002-1545-6508" 
                target="_blank" 
                className="text-sky-400 hover:text-sky-300"
              >
                Mike Bumpus
              </a>
              .
            </p>

            <p className="text-slate-400">
              Director of SaaS Delivery at Johnson Controls. Navy veteran. Peer-reviewed author. 
              Building tools for the builders who weren't supposed to be builders.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://me.dm/@mikebumpus" 
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Mastodon
              </a>
              <a 
                href="https://github.com/mbumpus" 
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://orcid.org/0000-0002-1545-6508" 
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                ORCID
              </a>
            </div>

            <p className="text-slate-500 text-base pt-8">
              © 2026 AI Cabinet Method LLC
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
