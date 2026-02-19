import Link from 'next/link';

export const metadata = {
  title: "Governed by Architecture: MCP, ActiveX, and Why We're Making the Same Mistakes Again | DigitalEgo",
  description: "The MCP security model mirrors ActiveX-era 'ambient authority' — and inherits its vulnerabilities. There's a better way.",
  openGraph: {
    title: "Governed by Architecture",
    description: "MCP, ActiveX, and why we're making the same mistakes again.",
    url: "https://www.digitalego.ai/articles/governed-by-architecture",
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
          Governed by Architecture
        </h1>
        <p className="text-xl text-hematite mb-2">
          MCP, ActiveX, and Why We're Making the Same Mistakes Again
        </p>
        <p className="text-sm text-hematite/60 mb-8">
          February 2026
        </p>

        <div className="prose prose-lg max-w-none text-ink">
          
          <p className="mb-6 text-xl">In February 2026, LayerX Security demonstrated remote code execution on Claude Desktop through a calendar invite. The attack chain: calendar event → Google Calendar MCP server → arbitrary code execution. No sandbox. Full system privileges. No user confirmation.</p>
          
          <p className="mb-4">Anthropic's response: "Users should configure permissions correctly."</p>
          
          <p className="mb-4">If that sounds familiar, it should. We've been here before.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The ActiveX Parallel</h2>
          
          <p className="mb-4">In the early 2000s, Microsoft's ActiveX controls promised rich web experiences. Signed controls were trusted. Any control could call any other. Users configured security zones. When things went wrong, Microsoft blamed users for misconfiguration.</p>
          
          <p className="mb-4">Sound familiar?</p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-hematite/20">
                  <th className="text-left py-2 pr-4">ActiveX (2000s)</th>
                  <th className="text-left py-2">MCP (2020s)</th>
                </tr>
              </thead>
              <tbody className="text-hematite">
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">Signed controls = trusted</td><td>Installed servers = trusted</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">Any control can call any other</td><td>Any MCP server can chain to any other</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">User configures security zones</td><td>User configures permissions</td></tr>
                <tr><td className="py-2 pr-4">Blame user for misconfiguration</td><td>Blame user for misconfiguration</td></tr>
              </tbody>
            </table>
          </div>

          <p className="mb-4">As David Stevens put it on LinkedIn: <em>"We're back to ActiveX! Remember!?! Pepperidge Farm remembers."</em></p>
          
          <p className="mb-4">The protocol doesn't just enable the attack — the protocol IS the attack surface.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Two Models of Agent Governance</h2>

          <h3 className="text-2xl font-medium mt-8 mb-4 text-ink">Model 1: Ambient Authority</h3>
          <p className="mb-4">This is Claude Desktop with MCP. This is the default.</p>
          
          <pre className="bg-ink text-cloud-dancer p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`[Any external data] → [Any MCP server] → [Any other MCP server] → [Full system]
                    ↑
            ambient authority
          user configures limits`}
          </pre>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Attack surface:</strong> Any data source that can trigger any tool</li>
            <li><strong>Defense:</strong> Configuration (easily misconfigured)</li>
            <li><strong>Failure mode:</strong> Calendar invite pops shell</li>
          </ul>

          <h3 className="text-2xl font-medium mt-8 mb-4 text-ink">Model 2: Spec-Driven Architecture</h3>
          <p className="mb-4">This is how we build at DigitalEgo. This is how Crewly Codes works.</p>
          
          <pre className="bg-ink text-cloud-dancer p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`[Spec generation] → [Human review] → [Bounded execution] → [Project folder only]
        ↑                  ↑                                        ↑
  No tool access      Checkpoint                            Scope containment`}
          </pre>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Attack surface:</strong> Must compromise spec generation AND evade human review AND escape sandbox</li>
            <li><strong>Defense:</strong> Architecture (structural constraints)</li>
            <li><strong>Failure mode:</strong> Mission Impossible-tier attack chain required</li>
          </ul>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Attack Chain Comparison</h2>
          
          <p className="mb-4 font-medium">To compromise Claude Desktop with MCP:</p>
          <ol className="list-decimal pl-6 mb-6 space-y-1">
            <li>Send a calendar invite</li>
          </ol>
          
          <p className="mb-4 font-medium">To compromise a spec-driven architecture:</p>
          <ol className="list-decimal pl-6 mb-6 space-y-1">
            <li>Compromise where the expansion prompt lives (nation-state difficulty)</li>
            <li>Inject adversarial instructions that produce malicious specs</li>
            <li>Output must still pass JSON validation</li>
            <li>Evade human review (user sees and approves spec before execution)</li>
            <li>Escape the sandbox (execution constrained to project folder)</li>
          </ol>
          
          <p className="mb-4">Each hop has friction. The first model has one step. The second has five, and each one is hard.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Human Checkpoint Isn't a Feature</h2>
          
          <p className="mb-4">In our architecture, a human reviews every spec before execution. Most people see this as a UX choice — keeping humans in the loop for trust and transparency.</p>
          
          <p className="mb-4">It's not just that.</p>
          
          <p className="mb-4 font-medium">The human checkpoint is a security boundary dressed as UX.</p>
          
          <p className="mb-4">It's the reason step 4 in the attack chain exists at all. Without it, a compromised spec generator leads directly to compromised execution. With it, an attacker has to produce a malicious spec that looks benign enough to pass human review.</p>
          
          <p className="mb-4">That's not impossible. But it's a lot harder than sending a calendar invite.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The CLI Was Right All Along</h2>
          
          <p className="mb-4">Simon Wilson nailed it: <em>"Almost everything I might achieve with an MCP can be handled by a CLI tool instead."</em></p>
          
          <p className="mb-4">CLI tools don't chain autonomously. They compose explicitly:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>You can see the pipeline</li>
            <li>You can audit the pipeline</li>
            <li>You can kill the pipeline</li>
            <li>Pipes have permissions</li>
            <li>Text is inspectable</li>
            <li>Processes have boundaries</li>
          </ul>
          
          <p className="mb-4 italic">The answer was in /usr/bin the whole time.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Design Principles</h2>
          
          <p className="mb-4">If you're building agent systems, here's what we've learned:</p>
          
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li><strong>Input validation at ingestion.</strong> Untrusted data can't trigger privileged operations. Ever. A calendar invite should not be able to execute code.</li>
            <li><strong>Human checkpoints at escalation boundaries.</strong> When an agent wants to do something consequential, a human sees it first. Not as a feature. As a security boundary.</li>
            <li><strong>Scope containment by default.</strong> Sandbox first, permissions never. The question isn't "what should this agent be allowed to do?" It's "what's the smallest box this agent can operate in?"</li>
            <li><strong>Explicit composition over autonomous chaining.</strong> If you can't see the pipeline, you can't secure it. Agents that chain to other agents without human visibility are agents waiting to be exploited.</li>
          </ol>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Bottom Line</h2>
          
          <p className="mb-4">MCP is ActiveX for the AI era. Same ambient authority model. Same "user configures permissions" defense. Same failure mode.</p>
          
          <p className="mb-4">We're building differently. Not because we're smarter — because we've seen this movie before and we know how it ends.</p>
          
          <p className="mb-4 font-medium">Security isn't a feature you add. It's an architecture you choose.</p>

          <hr className="my-12 border-hematite/20" />

          <p className="text-sm text-hematite/60 mt-12">
            This piece is adapted from ongoing research into AI agent governance. A more formal treatment — including attack chain analysis and the AURA tiered autonomy framework — is in development for academic publication.
          </p>
        </div>
      </div>
    </article>
  );
}
