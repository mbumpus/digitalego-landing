import Link from 'next/link';

export default function LandingPage() {
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

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight">
                AI{' '}
                <span className="text-link decoration-baltic-sea">research</span>
                {' '}and{' '}
                <span className="text-link decoration-quiet-violet">products</span>
                {' '}for the builders.
              </h1>
            </div>
            <div className="md:pt-4">
              <p className="text-xl md:text-2xl text-hematite leading-relaxed">
                We build AI that mirrors how you think. Multi-agent crews that amplify what you can do — extension, augmentation, never replacement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="card-featured p-8 md:p-12">
            <span className="section-label text-cloud-dancer/60 mb-6 block">Featured</span>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium mb-4 text-cloud-dancer">
                  From Prototype to Persona
                </h2>
                <p className="text-cloud-dancer/70 text-lg mb-6">
                  AI agents for decision support and cognitive extension. Our latest peer-reviewed research on building AI that augments human thinking.
                </p>
                <span className="text-sm text-cloud-dancer/50">
                  Issues in Information Systems, 2025
                </span>
              </div>
              <div className="flex justify-center">
                <img 
                  src="/images/persona-layers-featured.png" 
                  alt="Abstract visualization of AI persona layers"
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-cloud-dancer/10">
              <Link href="/research" className="text-cloud-dancer hover:text-white transition-colors inline-flex items-center gap-2">
                Read the research
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="section-label mb-4 block">Our Products</span>
          <h2 className="text-3xl md:text-4xl font-medium mb-12">
            AI crews for builders, learners,<br />and everyone in between.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Crewly Codes */}
            <a 
              href="https://crewly.codes" 
              target="_blank"
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-baltic-sea to-blue-fusion p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm text-white/70 mb-2 block">Live</span>
                <h3 className="text-2xl font-medium text-white mb-2">Crewly Codes</h3>
                <p className="text-white/80">
                  AI crews for builders. Morgan decomposes your idea into specs. DevCrew writes the code. QA validates it.
                </p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm font-medium">Explore</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

            {/* MWP */}
            <a 
              href="https://mwp.foundation" 
              target="_blank"
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-quiet-violet to-hematite p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-sm text-white/70 mb-2 block">Live</span>
                <h3 className="text-2xl font-medium text-white mb-2">Machine Web Protocol</h3>
                <p className="text-white/80">
                  Open standard for AI-readable web content. A third of search traffic is agents — make sure they understand you.
                </p>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-sm font-medium">Explore</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>

            {/* Crewly ED */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-veiled-vista to-baltic-sea/50 p-8 flex flex-col justify-between">
              <div>
                <span className="text-sm text-ink/50 mb-2 block">Coming 2026</span>
                <h3 className="text-2xl font-medium text-ink mb-2">Crewly ED</h3>
                <p className="text-ink/70">
                  AI crews for learners. Personalized learning plans that adapt to how you think. The plan is the product.
                </p>
              </div>
              <div className="flex items-center gap-2 text-ink/50">
                <span className="text-sm font-medium">Join waitlist</span>
              </div>
            </div>

            {/* Crewly Home */}
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-golden-mist/60 to-cloud-cover/40 p-8 flex flex-col justify-between">
              <div>
                <span className="text-sm text-ink/50 mb-2 block">Coming 2026</span>
                <h3 className="text-2xl font-medium text-ink mb-2">Crewly Home</h3>
                <p className="text-ink/70">
                  AI crews for your home. Multi-persona voice assistant running locally on Raspberry Pi. Your data stays yours.
                </p>
              </div>
              <div className="flex items-center gap-2 text-ink/50">
                <span className="text-sm font-medium">Join waitlist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-20 px-6 border-t border-hematite/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="section-label mb-4 block">The Research</span>
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Open frameworks.<br />Peer-reviewed publications.
              </h2>
              <p className="text-hematite text-lg mb-8">
                We publish our thinking so you can verify it. Not slogans — architecture.
              </p>
              <Link href="/research" className="btn-secondary inline-flex items-center gap-2">
                View all research
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            <div className="space-y-6">
              {/* AURA */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-quiet-violet/20 flex items-center justify-center shrink-0">
                    <span className="text-quiet-violet font-semibold">A</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-ink mb-1">AURA</h3>
                    <p className="text-sm text-hematite">
                      Tiered autonomy framework. Supervised → Guided → Trusted. Risk-calibrated escalation.
                    </p>
                  </div>
                </div>
              </div>

              {/* ThoughtChain */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-baltic-sea/20 flex items-center justify-center shrink-0">
                    <span className="text-baltic-sea font-semibold">TC</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-ink mb-1">ThoughtChain</h3>
                    <p className="text-sm text-hematite">
                      Traceable reasoning protocol. Stepwise logic capture with audit trails.
                    </p>
                  </div>
                </div>
              </div>

              {/* RSI */}
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-golden-mist/30 flex items-center justify-center shrink-0">
                    <span className="text-hematite font-semibold">RSI</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-ink mb-1">Risk-Stratified Instruction</h3>
                    <p className="text-sm text-hematite">
                      Orchestration-layer self-improvement preserving governance and oversight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="section-label mb-8 block">Latest Publications</span>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <span className="text-xs text-quiet-violet font-medium mb-3 block">Forthcoming</span>
              <h3 className="font-medium text-ink mb-2">Consent Mechanisms in Multi-Agent Systems</h3>
              <p className="text-sm text-hematite mb-4">Dynamic consent protocols for human-AI collaborative development.</p>
              <span className="text-xs text-hematite/60">IEEE SoutheastCon 2026</span>
            </div>

            <div className="card p-6">
              <span className="text-xs text-veiled-vista font-medium mb-3 block">2025</span>
              <h3 className="font-medium text-ink mb-2">From Prototype to Persona</h3>
              <p className="text-sm text-hematite mb-4">AI agents for decision support and cognitive extension.</p>
              <span className="text-xs text-hematite/60">Issues in Information Systems 26(1)</span>
            </div>

            <div className="card p-6">
              <span className="text-xs text-baltic-sea font-medium mb-3 block">2024</span>
              <h3 className="font-medium text-ink mb-2">ML in Building Management</h3>
              <p className="text-sm text-hematite mb-4">A survey of machine learning applications in commercial buildings.</p>
              <span className="text-xs text-hematite/60">Issues in Information Systems 25(4)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-3xl md:text-4xl font-medium text-ink leading-snug mb-8">
            "Extension. Augmentation. Never replacement."
          </blockquote>
          <p className="text-hematite/60">
            — From the DigitalEgo Manifesto
          </p>
        </div>
      </section>

      {/* Mission Links (Anthropic-style) */}
      <section className="py-12 px-6 border-t border-hematite/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr,2fr] gap-12">
            <div>
              <h2 className="text-2xl font-medium text-ink">
                The future belongs<br />to the builders.
              </h2>
            </div>
            <div className="space-y-0">
              <Link href="/research" className="flex justify-between items-center py-4 border-b border-hematite/10 group">
                <span className="text-ink group-hover:text-blue-fusion transition-colors">AURA Framework</span>
                <span className="text-sm text-hematite/60">Governance</span>
              </Link>
              <Link href="/research" className="flex justify-between items-center py-4 border-b border-hematite/10 group">
                <span className="text-ink group-hover:text-blue-fusion transition-colors">ThoughtChain Protocol</span>
                <span className="text-sm text-hematite/60">Transparency</span>
              </Link>
              <Link href="/articles" className="flex justify-between items-center py-4 border-b border-hematite/10 group">
                <span className="text-ink group-hover:text-blue-fusion transition-colors">Articles & Insights</span>
                <span className="text-sm text-hematite/60">Thinking</span>
              </Link>
              <Link href="/about" className="flex justify-between items-center py-4 border-b border-hematite/10 group">
                <span className="text-ink group-hover:text-blue-fusion transition-colors">About DigitalEgo</span>
                <span className="text-sm text-hematite/60">Company</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-ink text-cloud-dancer">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <span className="text-xl font-semibold tracking-tight mb-4 block">DigitalEgo</span>
              <p className="text-cloud-dancer/60 text-sm">
                Research-driven AI for the builders.
              </p>
            </div>
            
            <div>
              <span className="text-sm font-medium mb-4 block text-cloud-dancer/40 uppercase tracking-wider">Products</span>
              <div className="space-y-3">
                <a href="https://crewly.codes" target="_blank" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Crewly Codes</a>
                <a href="https://mwp.foundation" target="_blank" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Machine Web Protocol</a>
                <span className="block text-cloud-dancer/40 text-sm">Crewly ED (Coming)</span>
                <span className="block text-cloud-dancer/40 text-sm">Crewly Home (Coming)</span>
              </div>
            </div>
            
            <div>
              <span className="text-sm font-medium mb-4 block text-cloud-dancer/40 uppercase tracking-wider">Research</span>
              <div className="space-y-3">
                <Link href="/research" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Frameworks</Link>
                <Link href="/research" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Publications</Link>
                <a href="https://orcid.org/0000-0002-1545-6508" target="_blank" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">ORCID Profile</a>
              </div>
            </div>
            
            <div>
              <span className="text-sm font-medium mb-4 block text-cloud-dancer/40 uppercase tracking-wider">Company</span>
              <div className="space-y-3">
                <Link href="/about" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">About</Link>
                <Link href="/articles" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Articles</Link>
                <a href="https://github.com/mbumpus" target="_blank" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">GitHub</a>
                <a href="https://me.dm/@mikebumpus" target="_blank" className="block text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Mastodon</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-cloud-dancer/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-cloud-dancer/40">© 2026 AI Cabinet Method LLC</span>
            <div className="flex items-center gap-6 text-sm text-cloud-dancer/40">
              <Link href="/waitlist" className="hover:text-cloud-dancer transition-colors">Join Waitlist</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
