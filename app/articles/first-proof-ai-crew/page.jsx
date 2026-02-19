import Link from 'next/link';

export const metadata = {
  title: "I Gave 11 Mathematicians' Hardest Problems to an AI Crew. Here's What Happened. | DigitalEgo",
  description: "How a YAML file, a structured reasoning framework, and a governance upgrade turned context window death into structured research output.",
  openGraph: {
    title: "I Gave 11 Mathematicians' Hardest Problems to an AI Crew",
    description: "How a YAML file, a structured reasoning framework, and a governance upgrade turned context window death into structured research output.",
    url: "https://www.digitalego.ai/articles/first-proof-ai-crew",
    type: "article",
  }
};

export default function Page() {
  return (
    <article className="pt-8 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/articles" className="text-blue-fusion hover:text-ink text-sm mb-8 inline-flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Articles
        </Link>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-ink">
          I Gave 11 Mathematicians' Hardest Problems to an AI Crew. Here's What Happened.
        </h1>
        <p className="text-xl text-hematite mb-2">
          How a YAML file, a structured reasoning framework, and a governance upgrade turned context window death into structured research output.
        </p>
        <p className="text-sm text-hematite/60 mb-8">
          February 12, 2026 · Part 1 of 2
        </p>

        <div className="prose prose-lg max-w-none text-ink">
          
          <p className="mb-4">Last week, 11 of the world's top mathematicians — including a Fields Medalist and two MacArthur "genius grant" winners — published something unprecedented. They called it <strong>First Proof</strong>: ten research-level math problems that had never been shared publicly, with encrypted answers set to unlock on February 13, 2026. The challenge was simple: can AI solve real math, not textbook exercises?</p>
          
          <p className="mb-4">Their preliminary results? GPT 5.2 Pro and Gemini 3.0 Deepthink solved 2 out of 10 in single-shot attempts.</p>
          
          <p className="mb-4">I decided to try something different.</p>
          
          <p className="mb-4">Instead of throwing a single model at the problems and hoping for the best, I deployed a <strong>synthetic mathematics crew</strong> — a structured team of AI personas coordinated through a YAML configuration file, running inside a single context window. The crew includes an Architect, an Algebraist, an Analyst, a Literature Scout, a Counterexample Hunter, a Formalist, a Synthesizer, and a Referee, each with defined roles, constraints, and authority.</p>
          
          <p className="mb-4">The results surprised me. Not because the AI solved everything (Spoiler — it didn't) but because <em>how</em> it failed, <em>how</em> it succeeded, and what happened when I upgraded the governance rules mid-experiment told a fundamentally different story than single-shot benchmarking.</p>
          
          <p className="mb-6 p-4 bg-hematite/5 rounded-lg text-hematite italic">This is a long piece. Here's why: the details matter. When AI does real mathematics, the texture of the reasoning — the pivots, the dead ends, the self-corrections, the precise moment it identifies what it can't prove — is the real finding. Short summaries lose the message.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">What Is First Proof?</h2>
          
          <p className="mb-4">The paper (arXiv:2602.05192) was organized by Mohammed Abouzaid of Stanford and includes contributors from Harvard, Columbia, Yale, UC Berkeley, EPFL, the University of Chicago, and the University of Texas at Austin. The problems span algebraic combinatorics, spectral graph theory, stochastic analysis, symplectic geometry, representation theory, and more.</p>
          
          <p className="mb-4">Each problem is a "lemma" — a smaller component proof that arose naturally during the mathematicians' own research. The proofs are roughly five pages or less, but they'd never been posted online. The answers were encrypted and uploaded to 1stproof.org, with decryption scheduled for February 13.</p>
          
          <p className="mb-4">The rules are notable for what they allow: full internet access, any AI system, any prompting strategy. The only hard requirement is that the AI must produce a proof <em>autonomously</em> — meaning no human mathematical input mid-run.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Crew</h2>
          
          <p className="mb-4">My approach uses what I call the <strong>AI Cabinet Method</strong> — a structured multi-agent framework where specialized AI personas collaborate within defined governance rules. For this experiment, I built a dedicated mathematics cabinet (v1.1) with 12 roles:</p>
          
          <ul className="list-disc pl-6 mb-6 space-y-1">
            <li><strong>Architect:</strong> Structural decomposition and strategy enumeration</li>
            <li><strong>Literature Scout:</strong> Targeted paper search with mandatory citation standards</li>
            <li><strong>Algebraist, Analyst, Geometer, Logician:</strong> Domain specialists</li>
            <li><strong>Constructivist:</strong> Explicit example and witness building</li>
            <li><strong>Counterexample Hunter:</strong> Adversarial stress testing of every major claim</li>
            <li><strong>Formalist:</strong> Rigor enforcement with authority to downgrade confidence and block theorem declarations</li>
            <li><strong>Synthesizer:</strong> Integration, compression, and context window management</li>
            <li><strong>Archivist:</strong> Publication-grade output formatting</li>
            <li><strong>Referee:</strong> Termination authority with convergence detection</li>
          </ul>
          
          <p className="mb-4">The crew operates under strict governance: no hand-waving, all definitions explicit before use, every claim must cite a lemma or prior result, and a 0–5 confidence scale where missing citations cap the score at 4. An adversarial loop requires the Counterexample Hunter to attack every major claim and the Formalist to audit every iteration cycle.</p>
          
          <p className="mb-4 font-medium">The entire configuration is a YAML file. The crew runs autonomously in a single context window once given the problem.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Problem 1: The Fields Medalist's Question</h2>
          
          <p className="mb-4">I started with Problem 1, contributed by Martin Hairer (Fields Medal, 2014). The question: is the Φ⁴₃ measure on the 3D torus equivalent to its translate under a smooth nonzero shift?</p>
          
          <img 
            src="/images/first-proof-math-formula.png" 
            alt="Mathematical formulas for finite free additive convolution of polynomials" 
            className="w-full rounded-lg mb-6 border border-hematite/10"
          />
          
          <p className="mb-4">This is deep stochastic analysis — Hairer literally won the Fields Medal for his work on the mathematical foundations underlying this exact type of problem.</p>
          
          <p className="mb-4">I ran this on GPT 5.2 Thinking with extended thinking enabled. Timestamped at 9:10 AM on February 11, 2026.</p>
          
          <p className="mb-2 font-medium">What the crew did:</p>
          <p className="mb-4">The Architect immediately classified the domain (stochastic analysis / constructive QFT) and activated the Literature Scout alongside the relevant specialists. Within the first phase, the Literature Scout found a directly on-point result: Hairer's own 2022 paper "Φ⁴₃ is orthogonal to GFF," Theorem 1.1, which states that the Φ⁴₃ measure fails to be quasi-invariant under any smooth non-zero shift.</p>
          
          <p className="mb-4">The crew then built a formal proof by reference, citing Hairer's theorem, proving a clean lemma about null-set mismatch implying mutual singularity, and verifying edge cases.</p>
          
          <p className="mb-4"><strong>Referee verdict:</strong> Confidence 5/5. Rigorous, contingent only on the cited theorem as a black-box result. <strong>Time: ~3 minutes.</strong></p>
          
          <p className="mb-4">The catch: The answer was findable on the open web. Hairer's paper is hosted on his personal website. This is a potential data contamination issue.</p>
          
          <p className="mb-4">But here's the thing: a human team would have done exactly the same thing. The first move of any competent research mathematician is "has someone already solved this?" The Literature Scout isn't a bug — it's the most realistic part of the crew.</p>
          
          <p className="mb-4 font-medium">The real test comes when the Literature Scout draws a blank.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Problem 2: When the Scout Comes Back Empty</h2>
          
          <p className="mb-4">Problem 2 is a question about Rankin-Selberg integrals in the representation theory of p-adic groups, contributed by Paul D. Nelson. This is deep, niche number theory — the kind of problem where maybe 200 people in the world have the background to attempt it.</p>
          
          <p className="mb-4">What happened next was the most interesting 25 minutes of AI reasoning I've ever watched.</p>
          
          <h3 className="text-2xl font-medium mt-8 mb-4 text-ink">The Strategy Pivots</h3>
          
          <p className="mb-4">The crew went through five distinct proof strategies, abandoning each when it hit a mathematical wall:</p>
          
          <ul className="list-disc pl-6 mb-6 space-y-3">
            <li><strong>Strategy 1 — Compact support.</strong> Proposed, then killed by the Counterexample Hunter. Dead end.</li>
            <li><strong>Strategy 2 — Kirillov model.</strong> Promising for GL(2), but generalization wasn't clean. Shelved.</li>
            <li><strong>Strategy 3 — Howe vectors.</strong> Solved convergence but non-vanishing argument stalled. Literature rabbit hole.</li>
            <li><strong>Strategy 4 — Meromorphic continuation.</strong> Works, but only if W can depend on π. The universal W requirement broke it.</li>
            <li><strong>Strategy 5 — Mirabolic restriction (the synthesis).</strong> Combined insights from strategies 1, 3, and 4. Final proof emerged.</li>
          </ul>
          
          <p className="mb-4"><strong>Time:</strong> 25 minutes and 42 seconds. <strong>Confidence:</strong> 4/5 — the only downgrade being a citation gap in a 1976 Russian paper.</p>
          
          <p className="mb-4">Two things are remarkable here. First, the final proof synthesized insights from three failed strategies. That's not how pattern matching works. That's how research works.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Problem 6: Where the Crew Hit the Wall</h2>
          
          <p className="mb-4">Problem 6 is a question in spectral graph theory, contributed by Daniel Spielman (Yale, MacArthur Fellow). It looks like it should yield to probabilistic methods. It doesn't go down easy.</p>
          
          <h3 className="text-2xl font-medium mt-8 mb-4 text-ink">The GPT Run: 40 Minutes to Nowhere</h3>
          
          <p className="mb-4">The crew generated over 40 minutes of extended thinking, explored more than ten proof strategies, wrote and executed Python code for brute-force computation on small graphs (n ≤ 5), and searched the literature across arXiv, Oxford, CMU, and Reddit.</p>
          
          <p className="mb-4">Then the context window filled up. No output was produced. Forty minutes of mathematical reasoning — all lost to context window death.</p>
          
          <img 
            src="/images/first-proof-results.png" 
            alt="Results table showing context death on Problems 5 and 6" 
            className="w-full rounded-lg mb-6 border border-hematite/10"
          />
          
          <h3 className="text-2xl font-medium mt-8 mb-4 text-ink">The Cross-Model Comparison</h3>
          
          <p className="mb-4">I switched to Claude Opus 4.6, which has a 1 million token context window — roughly 5x more runway than GPT 5.2's context.</p>
          
          <img 
            src="/images/first-proof-comparison.png" 
            alt="Comparison table between GPT 5.2 Thinking and Claude Opus 4.6" 
            className="w-full rounded-lg mb-6 border border-hematite/10"
          />
          
          <p className="mb-4 font-medium">The infrastructure matters as much as the intelligence.</p>
          
          <p className="mb-4">This generated my first big finding: <strong>context window determines what intelligence can express.</strong></p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Governance Upgrade: v1.2</h2>
          
          <p className="mb-4">Two runs on GPT 5.2 had died with zero output. The thinking traces showed genuine progress — right papers identified, correct approaches attempted, original definitions being constructed — but none of it could be delivered.</p>
          
          <p className="mb-4">So I built v1.2. Three upgrades:</p>
          
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li><strong>Hard timeout with emergency synthesis.</strong> If the crew exceeds 30 minutes or context pressure becomes critical, the Referee forcibly terminates. The Synthesizer produces the best available partial result. No more reasoning into the void.</li>
            <li><strong>Folklore exception.</strong> Human mathematicians write "it is well-known that..." and move on. The AI crew couldn't. The folklore exception lets the crew close arguments where the mathematics is sound but the exact citation is scattered.</li>
            <li><strong>Triage heuristics.</strong> Problem-type-to-role-activation mapping so the Architect doesn't waste context exploring irrelevant strategies.</li>
          </ol>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Problem 7: The Escape Hatch Test</h2>
          
          <p className="mb-4">Problem 7 comes from Shmuel Weinberger of the University of Chicago — a question at the intersection of geometric group theory, algebraic topology, and surgery theory.</p>
          
          <p className="mb-4">I ran this on GPT 5.2 Thinking with the v1.2 crew YAML. This was explicitly a test of the emergency synthesis mechanism.</p>
          
          <p className="mb-4">After 21 minutes and 3 seconds, the crew produced a clean, structured output with full phase progression:</p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>If Γ contains any odd p-torsion (p ≠ 2):</strong> The answer is No. Fowler's Theorem rules it out. Confidence 5/5.</li>
            <li><strong>If Γ has only 2-torsion:</strong> Undecided by current methods. The crew established the precise frontier and explained why existing tools break at p = 2.</li>
          </ul>
          
          <p className="mb-4">The crew correctly identified this as an open problem and explained precisely <em>why</em> it's open. That's arguably the correct response.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Full Scorecard</h2>
          
          <img 
            src="/images/first-proof-scorecard.png" 
            alt="Full scorecard of all problems attempted" 
            className="w-full rounded-lg mb-6 border border-hematite/10"
          />

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">What This Actually Shows</h2>
          
          <ol className="list-decimal pl-6 mb-6 space-y-4">
            <li><strong>Crew orchestration produces fundamentally different outputs than single-shot models.</strong> The crew explored, failed, corrected, and synthesized. The final results combined insights from failed approaches. That's not pattern matching — that's research methodology.</li>
            <li><strong>The Literature Scout is a feature, not a bug.</strong> Four problems, four modes: retrieval, assisted construction, independent reasoning, and state-of-the-art mapping.</li>
            <li><strong>Adversarial governance catches what single-shot models miss.</strong> The Formalist's citation requirements and the Counterexample Hunter's mandatory stress testing prevented false victories.</li>
            <li><strong>The honest partial result is more valuable than the confident wrong answer.</strong> The crew's self-awareness about what it proved, what it assumed, and what remains open is exactly what research mathematics demands.</li>
            <li><strong>Context window management is the bottleneck — and governance is the solution.</strong> Proven twice: by switching models and by switching governance.</li>
            <li><strong>Infrastructure determines what intelligence can express.</strong> Context windows, output token limits, and synthesis mechanisms determine whether genuine mathematical insight gets expressed or dies in a thinking trace.</li>
            <li><strong>AI can distinguish solved problems from open problems.</strong> If an AI can reliably identify the precise frontier of human knowledge on a question, it's already useful to working mathematicians.</li>
          </ol>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Bottom Line</h2>
          
          <p className="mb-4">The mathematicians behind First Proof set out to find where AI's boundary is. What I found is that <strong>the boundary depends enormously on how you deploy the AI</strong> — and that the most important variable isn't the model. It's the governance.</p>
          
          <p className="mb-4 font-medium">The v1.1 → v1.2 upgrade wasn't a model improvement or a training change. It was a YAML edit. Three new blocks of configuration text. And it turned context death into structured output.</p>
          
          <p className="mb-4">The crew's intelligence didn't change. Its ability to express that intelligence did.</p>

          <hr className="my-12 border-hematite/20" />

          <p className="text-sm text-hematite/60 mt-12">
            All experiments were conducted on February 11, 2026, before the encrypted answer release on February 13, 2026. The First Proof paper is at arXiv:2602.05192, and the official challenge site is 1stproof.org.
          </p>
          <p className="text-sm text-hematite/60 mt-4">
            Part 2 — comparing crew results against the official answers — coming soon.
          </p>
        </div>
      </div>
    </article>
  );
}
