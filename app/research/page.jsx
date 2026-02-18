import Link from 'next/link';

export const metadata = {
  title: 'Research | DigitalEgo',
  description:
    'Open frameworks and peer-reviewed publications on AI governance, multi-agent orchestration, and human-AI collaboration.',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-cloud-dancer/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-ink font-semibold text-xl tracking-tight">
            DigitalEgo
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/research" className="text-ink font-medium text-sm">
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
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">Research</h1>
          <p className="text-xl text-hematite max-w-2xl">
            Open frameworks and peer-reviewed publications. We publish our thinking so you can verify it.
          </p>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-8 block">Frameworks</span>
          
          <div className="space-y-6">
            {/* AURA */}
            <div className="card p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-quiet-violet/20 flex items-center justify-center shrink-0">
                  <span className="text-quiet-violet font-semibold text-2xl">A</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-ink mb-1">AURA</h3>
                  <p className="text-hematite/60 text-sm">Autonomous Unified Risk Architecture</p>
                </div>
              </div>
              <p className="text-hematite mb-6">
                Tiered autonomy framework for AI systems. Three levels — Supervised, Guided, Trusted — with 
                risk-calibrated escalation paths. Governance by design, not afterthought.
              </p>
              <div className="grid grid-cols-3 gap-4 p-4 bg-cloud-dancer rounded-xl">
                <div className="text-center">
                  <div className="text-golden-mist font-semibold mb-1">Tier 1</div>
                  <div className="text-sm text-hematite">Supervised</div>
                  <div className="text-xs text-hematite/60">Human confirms</div>
                </div>
                <div className="text-center">
                  <div className="text-baltic-sea font-semibold mb-1">Tier 2</div>
                  <div className="text-sm text-hematite">Guided</div>
                  <div className="text-xs text-hematite/60">AI recommends</div>
                </div>
                <div className="text-center">
                  <div className="text-veiled-vista font-semibold mb-1">Tier 3</div>
                  <div className="text-sm text-hematite">Trusted</div>
                  <div className="text-xs text-hematite/60">AI executes</div>
                </div>
              </div>
            </div>

            {/* ThoughtChain */}
            <div className="card p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-baltic-sea/20 flex items-center justify-center shrink-0">
                  <span className="text-baltic-sea font-semibold text-2xl">TC</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-ink mb-1">ThoughtChain</h3>
                  <p className="text-hematite/60 text-sm">Traceable Reasoning Protocol</p>
                </div>
              </div>
              <p className="text-hematite mb-6">
                Stepwise logic capture with cryptographic audit trails. Every decision traceable. 
                Every reasoning step recorded. Trust through transparency.
              </p>
              <div className="bg-ink rounded-xl p-4 font-mono text-xs text-cloud-dancer/80 overflow-x-auto">
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
            <div className="card p-8">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-golden-mist/30 flex items-center justify-center shrink-0">
                  <span className="text-hematite font-semibold text-xl">RSI</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-ink mb-1">Recursive Self-Improvement at the Orchestration Layer</h3>
                  <p className="text-hematite/60 text-sm">An Alternative Architecture for Autonomous Agent Evolution</p>
                </div>
              </div>
              <p className="text-hematite">
                Autonomous agents that monitor output quality, detect degradation, and generate successor agents — achieving 
                progressive improvement while preserving human oversight, audit capability, and governance integrity.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-golden-mist">
                <span className="w-2 h-2 bg-golden-mist rounded-full"></span>
                arXiv submission pending
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-12 px-6 border-t border-hematite/10">
        <div className="max-w-4xl mx-auto">
          <span className="section-label mb-8 block">Publications</span>
          
          <div className="space-y-0">
            {/* IEEE 2026 */}
            <div className="py-6 border-b border-hematite/10">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-xs bg-quiet-violet/20 text-quiet-violet px-3 py-1 rounded-full font-medium">Forthcoming</span>
                <span className="text-hematite/60 text-sm">IEEE SoutheastCon 2026</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">Consent Mechanisms in Multi-Agent Systems</h3>
              <p className="text-hematite text-sm">
                Dynamic consent protocols for human-AI collaborative development. 
                Framework for calibrated autonomy in agentic workflows.
              </p>
            </div>

            {/* RSI Preprint */}
            <div className="py-6 border-b border-hematite/10">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-xs bg-golden-mist/30 text-hematite px-3 py-1 rounded-full font-medium">Pending</span>
                <span className="text-hematite/60 text-sm">arXiv preprint</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">Recursive Self-Improvement at the Orchestration Layer</h3>
              <p className="text-hematite text-sm">
                An alternative architecture for autonomous agent evolution — achieving RSI outcomes while preserving governance integrity.
              </p>
            </div>

            {/* IIS 2025 */}
            <div className="py-6 border-b border-hematite/10">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-xs bg-veiled-vista/30 text-hematite px-3 py-1 rounded-full font-medium">2025</span>
                <span className="text-hematite/60 text-sm">Issues in Information Systems 26(1)</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">From Prototype to Persona: AI Agents for Decision Support and Cognitive Extension</h3>
              <p className="text-hematite text-sm">
                MA Bumpus. Research on AI agent design patterns for augmenting human decision-making.
              </p>
            </div>

            {/* IIS 2024 */}
            <div className="py-6 border-b border-hematite/10">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-xs bg-baltic-sea/20 text-baltic-sea px-3 py-1 rounded-full font-medium">2024</span>
                <span className="text-hematite/60 text-sm">Issues in Information Systems 25(4)</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">A Survey of Machine Learning Applications in Commercial Building Management</h3>
              <p className="text-hematite text-sm">
                MA Bumpus. Comprehensive review of ML deployment patterns in enterprise building systems.
              </p>
            </div>

            {/* IIS 2021 */}
            <div className="py-6">
              <div className="flex items-start gap-4 mb-3">
                <span className="text-xs bg-hematite/10 text-hematite px-3 py-1 rounded-full font-medium">2021</span>
                <span className="text-hematite/60 text-sm">Issues in Information Systems 22(3)</span>
              </div>
              <h3 className="text-lg font-medium text-ink mb-2">A Case Study in Selection and Deployment of a Multi-Factor Authentication Solution</h3>
              <p className="text-hematite text-sm">
                EC Donald, MA Bumpus, X Zhang. Cited 5 times. Enterprise security implementation research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ORCID */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-ink mb-2">Author Profile</h3>
              <p className="text-hematite text-sm">
                Full publication history, citations, and research activity available via ORCID.
              </p>
            </div>
            <a 
              href="https://orcid.org/0000-0002-1545-6508"
              target="_blank"
              className="btn-primary inline-flex items-center gap-2"
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
      <footer className="py-16 px-6 bg-ink text-cloud-dancer">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div>
              <span className="text-xl font-semibold tracking-tight mb-4 block">DigitalEgo</span>
              <p className="text-cloud-dancer/60 text-sm">
                Research-driven AI for the builders.
              </p>
            </div>
            
            <div className="flex gap-12">
              <div className="flex flex-col gap-3">
                <Link href="/" className="text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Home</Link>
                <Link href="/research" className="text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Research</Link>
                <Link href="/articles" className="text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Articles</Link>
                <Link href="/about" className="text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">About</Link>
              </div>
              <div className="flex flex-col gap-3">
                <a href="https://github.com/mbumpus" target="_blank" className="text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">GitHub</a>
                <a href="https://me.dm/@mikebumpus" target="_blank" className="text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">Mastodon</a>
                <a href="https://orcid.org/0000-0002-1545-6508" target="_blank" className="text-cloud-dancer/80 hover:text-cloud-dancer transition-colors text-sm">ORCID</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-cloud-dancer/10">
            <span className="text-sm text-cloud-dancer/40">© 2026 AI Cabinet Method LLC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
