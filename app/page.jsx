import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="bg-[#061525] text-white min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-[#061525]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/DigitalEgo_logo_TM_alt.png" alt="DigitalEgo" className="h-8" />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About</Link>
            <Link href="/articles" className="text-slate-400 hover:text-white transition-colors text-sm">Articles</Link>
            <Link href="#canon" className="text-slate-400 hover:text-white transition-colors text-sm">
              Canon
            </Link>
            <Link 
              href="/waitlist"
              className="bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-400 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Shipping weekly
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            AI that mirrors
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">how you think.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10">
            Multi-agent infrastructure for the agentic web. 
            Persona-driven AI that augments, not replaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#products"
              className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              See Products
            </Link>
            <Link 
              href="/waitlist"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The thesis</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              AI shouldn't replace human thinking. It should reflect it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Agent Crews</h3>
              <p className="text-slate-400">
                Assemble specialized agents that work together like colleagues. 
                Each with distinct expertise, all sharing context.
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Governed Autonomy</h3>
              <p className="text-slate-400">
                AURA tiers control what agents can do. Traceable reasoning via ThoughtChain. 
                Trust through transparency.
              </p>
            </div>

            <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personal, Not Generic</h3>
              <p className="text-slate-400">
                Personas shaped by your preferences, context, and style. 
                AI that feels like dialogue, not query resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What we're shipping</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Products built on the DigitalEgo runtime. Shipping weekly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* MWP */}
            <a 
              href="https://mwp.foundation" 
              target="_blank"
              className="group bg-slate-800/30 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-8 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-violet-400 font-bold">M</span>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full">Live</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-400 transition-colors">Machine Web Protocol</h3>
              <p className="text-slate-400 text-sm mb-4">
                Open standard for AI-readable web content. A third of search traffic is agents — make sure they can see you.
              </p>
              <span className="text-sky-400 text-sm">mwp.foundation →</span>
            </a>

            {/* Crewly Codes */}
            <a 
              href="https://crewly.codes" 
              target="_blank"
              className="group bg-slate-800/30 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-8 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-orange-400 font-bold">C</span>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full">Live</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-400 transition-colors">Crewly Codes</h3>
              <p className="text-slate-400 text-sm mb-4">
                AI-powered project management with Morgan, your AI Product Manager. Kanban + specs + GitHub integration.
              </p>
              <span className="text-sky-400 text-sm">crewly.codes →</span>
            </a>

            {/* Crewly Home */}
            <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-teal-400 font-bold">H</span>
                </div>
                <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded-full">Coming Soon</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Crewly Home</h3>
              <p className="text-slate-400 text-sm mb-4">
                Multi-persona voice assistant for Raspberry Pi. Downton Abbey-inspired household staff running locally.
              </p>
              <span className="text-slate-500 text-sm">Shipping Q1 2026</span>
            </div>

            {/* ctx.studio */}
            <a 
              href="https://ctx.studio" 
              target="_blank"
              className="group bg-slate-800/30 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-8 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center">
                  <span className="text-pink-400 font-bold">ctx</span>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full">Live</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-sky-400 transition-colors">Context Studio</h3>
              <p className="text-slate-400 text-sm mb-4">
                Build and manage context files for AI coding assistants. Structure your project knowledge.
              </p>
              <span className="text-sky-400 text-sm">ctx.studio →</span>
            </a>
          </div>
        </div>
      </section>

      {/* The Canon */}
      <section id="canon" className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Canon</h2>
              <p className="text-slate-400 text-lg mb-6">
                Open frameworks for building trustworthy AI systems. 
                Our research, published.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-violet-400 text-sm font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">AURA</h3>
                    <p className="text-slate-400 text-sm">Tiered autonomy framework. Supervised → Guided → Trusted. Risk-aware escalation.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-cyan-400 text-sm font-bold">TC</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">ThoughtChain</h3>
                    <p className="text-slate-400 text-sm">Traceable reasoning protocol. Stepwise logic capture, hashing, and audit trails.</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/waitlist"
                className="inline-flex items-center gap-2 mt-8 text-sky-400 hover:text-sky-300 transition-colors"
              >
                Request early access
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-500">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <span className="ml-2">aura_policy.yaml</span>
              </div>
              <pre className="text-slate-300 overflow-x-auto">
{`aura_policy:
  default_tier: 2
  tier_definitions:
    - tier: 1
      label: "Supervised"
      constraints:
        - "Require confirmation"
        - "No final actions"
    - tier: 2
      label: "Guided Autonomy"
      constraints:
        - "Recommend with rationale"
        - "Log decisions"
    - tier: 3
      label: "Trusted Execution"
      constraints:
        - "Act with justification"
        - "Post-action audit"`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build with us.
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            The agentic web needs infrastructure. We're shipping it weekly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/waitlist"
              className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Join the Waitlist
            </Link>
            <a 
              href="https://github.com/mbumpus"
              target="_blank"
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
            >
              Follow on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/DigitalEgo_logo_TM_alt.png" alt="DigitalEgo" className="h-6" />
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
            <a href="#canon" className="hover:text-white transition-colors">Canon</a>
            <a href="https://me.dm/@mikebumpus" target="_blank" className="hover:text-white transition-colors">Mastodon</a>
          </div>
          
          <div className="text-sm text-slate-500">
            © 2026 AI Cabinet Method LLC
          </div>
        </div>
      </footer>
    </div>
  );
}
