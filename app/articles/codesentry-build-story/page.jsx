import Link from 'next/link';

export const metadata = {
  title: "From LinkedIn Scroll to Working Prototype in Two Hours | DigitalEgo",
  description: "A build-in-public story about AI-augmented product development. How a screenshot became a spec became a QA-approved tool in one Saturday morning.",
  openGraph: {
    title: "From LinkedIn Scroll to Working Prototype in Two Hours",
    description: "A build-in-public story about AI-augmented product development.",
    url: "https://www.digitalego.ai/articles/codesentry-build-story",
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
          From LinkedIn Scroll to Working Prototype in Two Hours
        </h1>
        <p className="text-xl text-hematite mb-2">
          A Build-in-Public Story About AI-Augmented Product Development
        </p>
        <p className="text-sm text-hematite/60 mb-8">
          January 31, 2026
        </p>

        <div className="prose prose-lg max-w-none text-ink">
          <p className="text-hematite mb-8 italic">
            Two perspectives on the same Saturday morning. Part 1 is the human side — opportunity recognition, product strategy, and spec development. Part 2 is the crew side — how AI agents turned that spec into tested, shippable code. Together, they document a complete product development cycle: idea → research → spec → implementation → QA → bug fix → re-validation → approved.
          </p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Part 1: Opportunity → Strategy → Spec</h2>
          <p className="text-sm text-hematite/60 mb-8">Mike + Claude</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">7:03 AM — A Screenshot and a Gut Feeling</h3>
          <p className="mb-4">It started with a LinkedIn post.</p>
          <p className="mb-4">I was scrolling my feed on a Saturday morning and spotted a post from Evan Glaser (Founder & CEO, Alongside AI) breaking down a new Anthropic research paper. The study — "How AI Impacts Skill Formation" by Judy Hanwen Shen and Alex Tamkin, published January 29, 2026 — had tracked 52 junior developers learning Python's Trio library. The ones using AI assistance scored 17% lower on comprehension tests than those coding by hand. Debugging skills took the biggest hit. The comments were blowing up.</p>
          <p className="mb-4">I screenshotted the post and an embedded Reddit thread from r/ClaudeAI, opened a conversation with Claude, and started talking.</p>
          <p className="mb-4">The instinct was immediate: this isn't just a concerning study. It's a product opportunity.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">7:05–7:20 AM — Divergent Thinking, Then Convergence</h3>
          <p className="mb-4">The initial conversation wasn't about building anything. It was about understanding the space. We discussed three angles: a LinkedIn thought leadership play leveraging my delivery org experience, positioning for Crewly Codes V2, and an academic research response building on my published work.</p>
          <p className="mb-4">Then I pivoted. Instead of responding to the study, I wanted to solve the problem it identified.</p>
          <blockquote className="border-l-4 border-blue-fusion pl-6 my-6 italic text-hematite">
            "I was thinking about pretraining on known programming patterns and building a super-linter that doesn't just catch errors, but explains why they're errors and what the fix should be."
          </blockquote>
          <p className="mb-4">That reframed everything. The study said developers are losing debugging skills. The industry response would be "use less AI." My response: build AI that catches what developers can't — and teaches them in the process.</p>
          <p className="mb-4 font-medium">Don't fight the trend. Instrument it.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">7:20–7:45 AM — Rapid Spec Development</h3>
          <p className="mb-4">What followed was a fast-moving product design conversation. Not a formal requirements session — a collaborative back-and-forth where ideas got pressure-tested against data in real time.</p>
          
          <p className="mb-2 font-medium">Key decisions made in this window:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Standalone tool, not a feature.</strong> My first instinct was to embed this in Crewly Codes. Wrong. A standalone tool that works on any code — human or AI-generated — addresses every developer shipping AI-assisted code. That's the whole market.</li>
            <li><strong>Fine-tuned model, not a wrapper.</strong> This was the critical insight. If frontier models like GPT-4 and Claude were already good at catching their own mistakes, developers would just ask their AI assistant "what's wrong with this code?" and the gap wouldn't exist. A general-purpose model with a clever prompt isn't a product — it's a weekend hack. A purpose-built model trained specifically on pattern detection and explanation is defensible IP.</li>
            <li><strong>Local-first, no cloud dependency.</strong> No data leaving the machine, no SOC 2 conversations, no storage infrastructure to manage. "Your code never leaves your machine" becomes a headline feature, not a limitation.</li>
            <li><strong>CLI + VS Code, privacy by architecture.</strong> The interfaces developers already live in. No new workflow. No accounts.</li>
          </ul>

          <p className="mb-2 font-medium">Research that informed the spec:</p>
          <p className="mb-4">During the conversation, we pulled and synthesized data from multiple sources as decisions needed validation:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>The original Anthropic paper (arXiv:2601.20245) — study design, the six interaction patterns, specific metrics including that the "Generation-Then-Comprehension" pattern scored 86% on comprehension while pure "AI Delegation" scored 39%</li>
            <li>BugWhisperer (IEEE VTS 2025) — showed fine-tuned Mistral-7B jumped from 42.5% to 84.8% accuracy on vulnerability detection, a 42-point improvement validating the fine-tuning thesis</li>
            <li>Competitive landscape of AI linting tools (CodeRabbit, SonarQube, Cursor BugBot, DeepCode/Snyk) — confirming the teaching layer is unoccupied</li>
          </ul>
          <p className="mb-4">This wasn't sequential research. It was pulled as decisions needed data, woven into a spec taking shape in parallel.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">7:45–8:15 AM — The Spec</h3>
          <p className="mb-4">By 8:15 AM, a comprehensive project specification existed — approximately 15 pages covering problem statement, product architecture, pattern knowledge base schema, CLI interface design, business model, go-to-market strategy, competitive analysis, development phases, and IP strategy.</p>
          
          <p className="mb-4 font-medium">The tagline:</p>
          <blockquote className="border-l-4 border-blue-fusion pl-6 my-6 italic text-hematite">
            "The safety net for vibe-coded software — catches what frontier models miss, teaches what developers forgot."
          </blockquote>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">8:15–8:30 AM — The Academic Angle</h3>
          <p className="mb-4">Before the spec was even cold, I identified a distribution channel: CIS/MIS professors I'd built relationships with through IACIS conferences and my editorial board work at the Journal of Computer Information Systems.</p>
          <p className="mb-4">The framing was immediate. Professors are stuck in a binary "ban AI vs. allow AI" debate with students. CodeSentry gives them a third option — allow AI, but instrument the learning. Require students to run the tool on every submission. The output shows whether a student understood what they submitted or just pasted what the AI gave them.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">8:30 AM — Handoff</h3>
          <p className="mb-4">This is where Part 1 ends and Part 2 begins.</p>
          <p className="mb-4">I took the spec to Jane and Morgan. Morgan — an AI Product Manager — reviewed the Phase 0 requirements and produced a precise, testable JSON specification. Then the crew started building.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Part 2: Spec → Build → QA → Ship</h2>
          <p className="text-sm text-hematite/60 mb-8">The Crew</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">The Spec Gets Teeth</h3>
          <p className="mb-4">Morgan took the 15-page strategic spec and translated it into an implementable Phase 0 JSON specification. The goal was explicit from the spec: "Validate core hypothesis: developers prefer tools that teach, not just flag."</p>
          <p className="mb-4">Morgan's output defined 5 initial patterns (CS001–CS005) with full detection rules, CLI interface with three subcommands, directory structure, key interfaces, test fixtures for each pattern, success criteria including "&lt;5% false positive rate on test corpus," and explicit non-goals.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">DevCrew Builds</h3>
          <p className="mb-4">DevCrew received Morgan's JSON spec and built the implementation. Core package, pattern detectors, test fixtures, project files. All acceptance criteria from the spec were validated before handoff to QA.</p>
          <p className="mb-4 font-medium">DevCrew didn't decide what to build. DevCrew executed a spec.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">QA Rejects</h3>
          <p className="mb-4">QAEngineer didn't rubber-stamp the build. The review methodology included code review, CLI testing, output mode testing, exit code verification, edge case testing, and false positive analysis.</p>
          <p className="mb-4">That last category — false positive analysis — is where things got interesting.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>BUG-001 (HIGH):</strong> False positives on legitimate Python stubs. CS002 was flagging @abstractmethod decorated methods, Protocol stub methods, and @overload type hint stubs as "placeholder code." These are legitimate Python patterns that must have empty bodies.</li>
            <li><strong>BUG-002 (MEDIUM):</strong> Flagging stubs without TODO/FIXME. The spec explicitly stated CS002 should detect "TODO/FIXME comments paired with placeholder implementations." The implementation was flagging any function with a pass or ... body, even without a TODO comment anywhere nearby.</li>
          </ul>
          <p className="mb-4 font-medium">Verdict: NOT APPROVED. Blocking bugs.</p>
          <p className="mb-4">The build was handed back to DevCrew with specific bugs to fix and specific files to change.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">DevCrew Fixes</h3>
          <p className="mb-4">DevCrew addressed both blocking bugs: added decorator and class inheritance checking for BUG-001, and made TODO/FIXME a required condition for BUG-002. A new test fixture was added to verify the fixes.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">QA Approves</h3>
          <p className="mb-4">QAEngineer re-validated both fixes. Full regression across all 7 fixtures: all pass. No regressions introduced.</p>
          <p className="mb-4 font-medium">Verdict: APPROVED. Bug fixes verified, no regressions. Ready for Phase 0 release.</p>

          <h3 className="text-2xl font-medium mt-10 mb-4 text-ink">What Actually Shipped</h3>
          <pre className="bg-ink text-cloud-dancer p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`$ codesentry scan app.py
╭─
│  generic-exception-swallow (CS001)
│  app.py:47:5
│
│  You're catching all exceptions and silently swallowing them.
│  Catch specific exceptions you can handle.
╰─────────────────────────────────────────────────────

╭─
│  blocking-call-in-async (CS003)
│  app.py:82:9
│
│  You're using time.sleep() inside an async function.
│  Use asyncio.sleep() instead.
╰─────────────────────────────────────────────────────`}
          </pre>
          <p className="mb-4">With --teach mode, each issue includes: what's happening, why it matters, how to fix it, code examples (bad and good), and how to spot it yourself next time.</p>
          <p className="mb-4">That last section — "spot it yourself" — is the product. Not just catching bugs. Teaching developers to recognize patterns independently.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Timeline</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-hematite/20">
                  <th className="text-left py-2 pr-4">Time</th>
                  <th className="text-left py-2 pr-4">Step</th>
                  <th className="text-left py-2">Who</th>
                </tr>
              </thead>
              <tbody className="text-hematite">
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">7:03 AM</td><td className="pr-4">See LinkedIn post, start conversation</td><td>Mike + Claude</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">7:05–7:20 AM</td><td className="pr-4">Explore angles, converge on product</td><td>Mike + Claude</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">7:20–7:45 AM</td><td className="pr-4">Product decisions, real-time research</td><td>Mike + Claude</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">7:45–8:15 AM</td><td className="pr-4">Write 15-page project spec</td><td>Mike + Claude</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">8:15–8:30 AM</td><td className="pr-4">Academic distribution strategy</td><td>Mike + Claude</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">~8:30 AM</td><td className="pr-4">Handoff to Morgan</td><td>Mike → Jane</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">~8:38 AM</td><td className="pr-4">Morgan produces Phase 0 JSON spec</td><td>Morgan</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">~8:40 AM</td><td className="pr-4">DevCrew delivers implementation</td><td>DevCrew</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">~8:51 AM</td><td className="pr-4">QA rejects — blocking bugs found</td><td>QAEngineer</td></tr>
                <tr className="border-b border-hematite/10"><td className="py-2 pr-4">~9:00 AM</td><td className="pr-4">DevCrew fixes both blocking bugs</td><td>DevCrew</td></tr>
                <tr><td className="py-2 pr-4">~9:10 AM</td><td className="pr-4">QA re-validates, approves</td><td>QAEngineer</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 font-medium">From LinkedIn screenshot to QA-approved, tested, bug-fixed prototype: one Saturday morning.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Meta-Lesson</h2>
          <p className="mb-4">CodeSentry exists because AI-assisted development erodes debugging skills. CodeSentry was built using AI-assisted development.</p>
          <p className="mb-4">But there's a structural difference, and it maps directly to the Anthropic study's findings.</p>
          <p className="mb-4">The study identified six interaction patterns. Three scored below 40% — AI Delegation, Progressive AI Reliance, Iterative AI Debugging. Three scored 65% or above — Conceptual Inquiry, Hybrid Code-Explanation, Generation-Then-Comprehension.</p>
          <p className="mb-4">The crew operates in the high-scoring patterns by design:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Morgan generates specs, not code.</strong> The human comprehends and approves the spec before any code is written. That's Generation-Then-Comprehension at the product level.</li>
            <li><strong>DevCrew executes specs, not ideas.</strong> DevCrew doesn't decide what to build. The human decided. DevCrew implements. Separation of decision from execution.</li>
            <li><strong>QAEngineer rejects bad work.</strong> QA found BUG-001 by testing against legitimate Python patterns that require empty bodies. That's not running test cases. That's understanding the language ecosystem well enough to know what the spec missed.</li>
            <li><strong>The human stays in the loop.</strong> I set direction, made product decisions, identified the distribution channel, and approved the final output. I didn't disappear after handoff.</li>
          </ul>
          <p className="mb-4 font-medium">AI-assisted development isn't the problem. Unstructured AI-assisted development is the problem.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Appendix: The Crew</h2>
          <ul className="list-none space-y-4 mb-8">
            <li><strong>Jane</strong> — Apex intelligence. Coordinates the crew, maintains context across sessions, handles orchestration and strategic conversation.</li>
            <li><strong>Morgan</strong> — AI Product Manager. Transforms requirements into testable JSON specifications. Doesn't write code. Writes specs that code gets written from.</li>
            <li><strong>DevCrew</strong> — Builder. Executes specs. Writes code. Doesn't make product decisions. Hands off to QA when done.</li>
            <li><strong>QAEngineer</strong> — Reviewer. Reads code, runs tests, tests edge cases, writes bug tickets. Rejects bad work. Doesn't fix code — hands it back with specific issues.</li>
          </ul>
          <p className="mb-4">Each agent has a SOUL.md defining their role, tone, and boundaries. The separation of concerns isn't just architecture — it's how you prevent the competency death spiral the Anthropic study describes.</p>

          <hr className="my-12 border-hematite/20" />

          <p className="text-sm text-hematite/60 mt-12">
            Mike Bumpus is the founder of AI Cabinet Method LLC (dba DigitalEgo) and the creator of Crewly Codes. He builds AI coordination frameworks from a converted tool shed.
          </p>
          <p className="text-sm text-hematite/60 mt-4">
            This article documents a real build session on January 31, 2026. All timelines, bug reports, and code artifacts referenced in this piece exist as version-controlled project documentation. No part of this workflow was staged or reconstructed after the fact.
          </p>
        </div>
      </div>
    </article>
  );
}
