import Link from 'next/link';

export const metadata = {
  title: 'Research | DigitalEgo',
  description:
    'Open frameworks and peer-reviewed publications on AI governance, multi-agent orchestration, and human-AI collaboration.',
};

export default function ResearchPage() {
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
            <Link href="/research" className="text-white font-medium text-sm">Research</Link>
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

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Open frameworks and peer-reviewed publications. We publish our thinking so you can verify it.
          </p>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Frameworks</h2>
          
          <div className="space-y-8">
            {/* AURA */}
            <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-violet-400 font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">AURA</h3>
                  <p className="text-slate-500 text-sm">Autonomous Unified Risk Architecture</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Tiered autonomy framework for AI systems. Three levels — Supervised, Guided, Trusted — with 
                risk-calibrated escalation paths. Governance by design, not afterthought.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm text-slate-400">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-yellow-400 font-semibold mb-1">Tier 1</div>
                    <div className="text-xs">Supervised</div>
                    <div className="text-xs text-slate-500">Human confirms</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-semibold mb-1">Tier 2</div>
                    <div className="text-xs">Guided</div>
                    <div className="text-xs text-slate-500">AI recommends</div>
                  </div>
                  <div>
                    <div className="text-emerald-400 font-semibold mb-1">Tier 3</div>
                    <div className="text-xs">Trusted</div>
                    <div className="text-xs text-slate-500">AI executes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ThoughtChain */}
            <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-cyan-400 font-bold text-lg">TC</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">ThoughtChain</h3>
                  <p className="text-slate-500 text-sm">Traceable Reasoning Protocol</p>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Stepwise logic capture with cryptographic audit trails. Every decision traceable. 
                Every reasoning step recorded. Trust through transparency.
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-xs text-slate-400 overflow-x-auto">
                <pre>{`{
  "step": 3,
  "action": "recommend_refactor",
  "reasoning": "Function exceeds complexity threshold",
  "confidence": 0.87,
  "hash": "a3f2c1...",
  "parent_hash": "9b8d7e..."
}`}</pre>
              </div>
            </div>

            {/* RSI */}
            <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-orange-400 font-bold text-lg">RSI</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Risk-Stratified Instruction</h3>
                  <p className="text-slate-500 text-sm">Orchestration-Layer Self-Improvement</p>
                </div>
              </div>
              <p className="text-slate-300">
                Recursive self-improvement implemented at the orchestration layer rather than the model level. 
                Preserves governance and human oversight while enabling adaptive behavior.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                arXiv submission pending
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Publications</h2>
          
          <div className="space-y-6">
            {/* IEEE 2026 */}
            <div className="border-l-2 border-sky-500 pl-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded-full">Forthcoming</span>
                <span className="text-slate-500 text-sm">IEEE SoutheastCon 2026</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consent Mechanisms in Multi-Agent Systems</h3>
              <p className="text-slate-400 text-sm">
                Dynamic consent protocols for human-AI collaborative development. 
                Framework for calibrated autonomy in agentic workflows.
              </p>
            </div>

            {/* RSI Preprint */}
            <div className="border-l-2 border-yellow-500/50 pl-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded-full">Pending</span>
                <span className="text-slate-500 text-sm">arXiv preprint</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Risk-Stratified Instruction for Orchestration-Layer RSI</h3>
              <p className="text-slate-400 text-sm">
                Recursive self-improvement at the orchestration layer, preserving governance and human oversight.
              </p>
            </div>

            {/* IIS 2025 */}
            <div className="border-l-2 border-slate-600 pl-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs bg-slate-500/10 text-slate-400 px-2 py-1 rounded-full">Published</span>
                <span className="text-slate-500 text-sm">Issues in Information Systems 26(1), 2025</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">From Prototype to Persona: AI Agents for Decision Support and Cognitive Extension</h3>
              <p className="text-slate-400 text-sm">
                MA Bumpus. Research on AI agent design patterns for augmenting human decision-making.
              </p>
            </div>

            {/* IIS 2024 */}
            <div className="border-l-2 border-slate-600 pl-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs bg-slate-500/10 text-slate-400 px-2 py-1 rounded-full">Published</span>
                <span className="text-slate-500 text-sm">Issues in Information Systems 25(4), 2024</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">A Survey of Machine Learning Applications in Commercial Building Management</h3>
              <p className="text-slate-400 text-sm">
                MA Bumpus. Comprehensive review of ML deployment patterns in enterprise building systems.
              </p>
            </div>

            {/* IIS 2021 */}
            <div className="border-l-2 border-slate-600 pl-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs bg-slate-500/10 text-slate-400 px-2 py-1 rounded-full">Published</span>
                <span className="text-slate-500 text-sm">Issues in Information Systems 22(3), 2021</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">A Case Study in Selection and Deployment of a Multi-Factor Authentication Solution</h3>
              <p className="text-slate-400 text-sm">
                EC Donald, MA Bumpus, X Zhang. Cited 5 times. Enterprise security implementation research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORCID */}
      <section className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/30 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Author Profile</h3>
              <p className="text-slate-400 text-sm">
                Full publication history, citations, and research activity available via ORCID.
              </p>
            </div>
            <a 
              href="https://orcid.org/0000-0002-1545-6508"
              target="_blank"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.684 3.178h1.369v11.09H6.685V7.556zm3.869 0h3.693c3.409 0 5.178 2.188 5.178 5.438 0 3.409-2.188 5.653-5.653 5.653h-3.218V7.556zm1.369 1.322v8.447h2.006c2.756 0 4.122-1.641 4.122-4.316 0-2.756-1.369-4.131-3.966-4.131h-2.162z"/>
              </svg>
              View ORCID Profile
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
            <Link href="/research" className="hover:text-white transition-colors">Research</Link>
            <Link href="/articles" className="hover:text-white transition-colors">Articles</Link>
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
