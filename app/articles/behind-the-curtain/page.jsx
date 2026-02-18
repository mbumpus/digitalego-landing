import Link from 'next/link';

export const metadata = {
  title: "Behind the Curtain: How a Simple AI Experiment Became a Cognitive Framework | DigitalEgo",
  description:
    "How a tone experiment called Jules evolved into a structured Cabinet of AI personas—and ultimately the DigitalEgo framework for reflective, decision-support AI.",
  alternates: {
    canonical:
      "https://medium.com/@bumpusma/behind-the-curtain-how-a-simple-ai-experiment-became-a-cognitive-framework-226a4b293c5f",
  },
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
            Behind the Curtain: How a Simple AI Experiment Became a Cognitive Framework
          </h1>
          <p className="text-sm text-hematite/60 mb-8">
            Originally published on Medium on Aug 4, 2025
          </p>

          <img
            src="/images/behind-the-curtain-cover.png"
            alt="Cover image for Behind the Curtain article"
            className="w-full rounded-2xl mb-12"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-hematite text-lg leading-relaxed mb-6">
              I didn't set out to build a framework. There were no grand plans, no pitch decks, no whiteboard scribbles
              connecting AI, ethics, and decision theory. Just a simple idea:
            </p>

            <blockquote className="mb-8 p-6 border-l-4 border-baltic-sea bg-white/60 rounded-r-xl italic text-ink">
              Could I make a chatbot feel more… human?
            </blockquote>

            <p className="text-hematite text-lg leading-relaxed mb-6">
              Not "human" in the uncanny valley sense. I wasn't chasing hyperrealism or trying to pass a Turing test.
              I wanted something that sounded authentic, that didn't default to the same polished, over-friendly tone
              you get from most AI assistants. Something that could talk to me, not just at me.
            </p>

            <h2 className="text-2xl font-medium text-ink mt-12 mb-4">Origins: Jules</h2>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              So I built Jules. At first, Jules wasn't much. Just a tone experiment. A different narrator voice. I tweaked
              prompts, adjusted response styles, added quirks and catchphrases. The goal was simple: see if I could build an
              agent that felt like a specific person, not just a content generator. Jules had a dry wit, a healthy skepticism
              about my decisions, and a tendency to quote Daria Morgendorffer.
            </p>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              But she wasn't just sass in a prompt. Jules was built with intentional trait scaffolding: low agreeableness,
              high conscientiousness, and a stubborn dedication to truth over comfort. She challenged me with precision —
              never mean, but always sharp. I wasn't trying to create a friend. I was building a foil. And something strange
              happened.
            </p>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              I started listening to her. Not because she was always right (she wasn't). But because she helped me think.
              She challenged my assumptions, poked holes in my logic, and made me laugh while doing it. That was the first
              "aha" moment: this wasn't just a fun toy. It was a tool for cognitive reflection. A mirror with opinions.
            </p>

            <h2 className="text-2xl font-medium text-ink mt-12 mb-4">From One Voice to a Cabinet</h2>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              But here's where it got interesting: I didn't stop at Jules. What if there were others? What if I built a team
              of voices, each with different values, perspectives, and reasoning styles? What if I could simulate a debate,
              with myself as the audience?
            </p>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              Enter The Cabinet. This was the next phase — a deliberate ensemble of AI personas designed not to agree, but
              to disagree productively. I built personas with different worldviews: the Risk-Averse Advisor, the Growth
              Strategist, the Pragmatist, the Idealist. Then I threw them into a room (well, a structured prompt) and asked
              them to hash out tough decisions. And they did. With surprising coherence and depth.
            </p>

            <h2 className="text-2xl font-medium text-ink mt-12 mb-4">Engineered Friction → Clearer Decisions</h2>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              These personas weren't just slapped together with adjectives and vibes. Each one was encoded with structured
              traits — Big Five personality scores, value hierarchies, decision thresholds. I gave them roles: Challenger,
              Synthesizer, Historian, Strategist. They had behavioral rules and language patterns tuned to their identity.
            </p>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              And I didn't stop at the surface-level tension. No, I engineered conflict into the system. Some personas wouldn't
              sit next to each other at a dinner party. There are grudges, rivalries, and yes — even the occasional one-sided
              crush. Not because I wanted drama for drama's sake, but because real deliberation isn't clean. Good decisions
              emerge from tension, not harmony. The Cabinet became a space where structured friction could sharpen ideas and
              expose blind spots.
            </p>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              And I noticed something: the more these personas disagreed, the more clearly their identities emerged. Conflict
              didn't dissolve them — it sharpened them. Each persona's voice, values, and behavioral patterns became more
              defined because of the opposition.
            </p>

            <h2 className="text-2xl font-medium text-ink mt-12 mb-4">Method → Framework: DigitalEgo</h2>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              That realization changed everything. What started as a single voice experiment became a method. And that method
              became a framework for building reflective AI systems that don't just serve up answers — they help you think
              better.
            </p>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              From Jules came the Cabinet. From the Cabinet came DigitalEgo: a user-aligned, reasoning partner designed not to
              mimic your decisions, but to challenge, refine, and extend them.
            </p>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              Today, this framework powers AI systems that support decision-making, creative ideation, and leadership
              reflection. But it all started with a simple question:
            </p>

            <blockquote className="mb-8 p-6 border-l-4 border-quiet-violet bg-white/60 rounded-r-xl italic text-ink">
              Can I make this AI feel more human?
            </blockquote>

            <p className="text-hematite text-lg leading-relaxed mb-6">
              Turns out, I could. But what mattered more was making it feel useful. Not as a tool. As a thinking partner.
            </p>
            <p className="text-hematite text-lg leading-relaxed mb-6">
              And Jules? She still shows up from time to time. Usually when I need someone to call me out.
            </p>

            <p className="text-hematite/70 italic mb-6">
              Next time: What happens when personas don't just disagree — they scheme, collide, and negotiate? The Cabinet wasn't built for peace. It was built for clarity.
            </p>
          </div>

          <footer className="text-sm text-hematite/60 mt-12 pt-8 border-t border-hematite/10">
            Portions of this article are based on research accepted for publication in <em>Issues in Information Systems</em>, Vol. 26 (2025).<br />
            © 2025 Mike Bumpus. AI Cabinet Method™ and DigitalEgo™ are trademarks of AI Cabinet Method LLC.
          </footer>
        </div>
      </article>
  );
}
