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
            <Link href="/articles" className="text-slate-400 hover:text-white transition-colors text-sm">Articles</Link>
            <Link href="/#canon" className="text-slate-400 hover:text-white transition-colors text-sm">Canon</Link>
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
            <p>
              We build multi-agent infrastructure for the agentic web.
            </p>

            <p>
              Most AI tools are trained to answer. Ours are shaped to <span className="text-white font-medium">reflect</span>. 
              We believe AI shouldn't replace human thinking—it should mirror it.
            </p>

            <p>
              Our runtime assembles specialized agents that work together like colleagues: 
              distinct expertise, shared context, governed autonomy. You don't prompt them—you collaborate.
            </p>

            <h2 className="text-2xl font-semibold text-white pt-6">What we're shipping</h2>
            
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-violet-400 font-bold">MWP</span>
                <span>— Open standard for AI-readable web content. A third of brand search is now AI agents.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">Crewly Codes</span>
                <span>— AI-powered project management with Morgan, your AI Product Manager.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-pink-400 font-bold">Context Studio</span>
                <span>— Build and manage context files for AI coding assistants.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal-400 font-bold">Crewly Home</span>
                <span>— Multi-persona voice assistant for Raspberry Pi. Coming Q2 2026.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-white pt-6">The Canon</h2>
            
            <p>
              Our frameworks ensure AI that's trustworthy and transparent:
            </p>
            
            <ul className="space-y-2">
              <li><span className="text-white font-medium">AURA</span> — Tiered autonomy. Supervised → Guided → Trusted.</li>
              <li><span className="text-white font-medium">ThoughtChain</span> — Traceable reasoning with stepwise audit trails.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white pt-6">Who</h2>
            
            <p>
              DigitalEgo is built by <a href="https://me.dm/@mikebumpus" target="_blank" className="text-sky-400 hover:text-sky-300">Mike Bumpus</a>—shipping weekly, 
              building infrastructure for human-AI collaboration that doesn't embarrass either party.
            </p>

            <p className="text-slate-500 text-base pt-8">
              © 2026 AI Cabinet Method LLC
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
