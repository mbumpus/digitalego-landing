export const metadata = {
  title: "Behind the Curtain: How a Simple AI Experiment Became a Cognitive Framework",
  description:
    "How a tone experiment called Jules evolved into a structured Cabinet of AI personas—and ultimately the DigitalEgo framework for reflective, decision-support AI.",
  alternates: {
    canonical:
      "https://medium.com/@bumpusma/behind-the-curtain-how-a-simple-ai-experiment-became-a-cognitive-framework-226a4b293c5f",
  },
  openGraph: {
    title: "Behind the Curtain",
    description:
      "From a single persona to a multi-agent Cabinet: the origins of DigitalEgo’s reflective AI framework.",
    url: "https://www.digitalego.ai/articles/behind-the-curtain",
    images: [
      {
        url: "/images/behind-the-curtain-cover.png",
        width: 1200,
        height: 630,
        alt: "Behind the Curtain cover image",
      },
    ],
  },
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-4 text-white">
      <h1 className="text-4xl font-bold mb-4">
        Behind the Curtain: How a Simple AI Experiment Became a Cognitive Framework
      </h1>
      <p className="text-sm italic mb-6">
        Originally published on Medium on Aug 4, 2025. Republished here with permission by the author.
      </p>

      <img
        src="/images/behind-the-curtain-cover.png"
        alt="Cover image for Behind the Curtain article"
        className="w-full rounded-xl shadow-lg mb-8"
      />

      <p className="mb-4">
        This piece traces how a small tone experiment—<span className="italic">Jules</span>—grew into a structured method for
        building reflective AI. What began as, in your words, “I didn’t set out to build a framework” evolved into
        the <span className="font-semibold">DigitalEgo</span> approach: personas that don’t just answer, they help you think.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Origins: Jules</h2>
      <p className="mb-4">
        Jules started as a deliberate voice: dry wit, low agreeableness, high conscientiousness—designed as a foil, not a friend.
        The result was a mirror with opinions: a persona that challenged assumptions and sharpened decisions through
        constructive pushback. :contentReference[oaicite:0]{index=0}
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">From One Voice to a Cabinet</h2>
      <p className="mb-4">
        The experiment expanded into an ensemble: a Cabinet of distinct personas—Risk-Averse Advisor, Growth Strategist,
        Pragmatist, Idealist—debating with role clarity (Challenger, Synthesizer, Historian, Strategist). Each persona carried
        structured traits (Big Five scores, value hierarchies, decision thresholds) and language patterns tuned to identity. :contentReference[oaicite:1]{index=1}
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Engineered Friction → Clearer Decisions</h2>
      <p className="mb-4">
        Conflict wasn’t a bug—it was the mechanism. You intentionally introduced tension, rivalries, and constraints so ideas
        could be stress-tested. The more the personas disagreed, the more distinct (and useful) they became—sharpening
        reasoning and revealing blind spots. :contentReference[oaicite:2]{index=2}
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Method → Framework: DigitalEgo</h2>
      <p className="mb-4">
        The Cabinet matured into a framework for reflective AI systems that support decision-making, creative ideation, and
        leadership reflection. The goal wasn’t to mimic your choices but to challenge, refine, and extend them—turning AI into a
        thinking partner rather than a tool. Portions draw on research accepted for <span className="italic">Issues in Information Systems</span>,
        Vol. 26 (2025). :contentReference[oaicite:3]{index=3}
      </p>

      <blockquote className="mb-6 p-4 border-l-4 border-slate-600 bg-slate-900/40 italic">
        “Could I make a chatbot feel more… human?”
      </blockquote>

      <p className="mb-4">
        The answer became less about “human-like” and more about <span className="font-semibold">useful</span>: not automation for its own sake,
        but a reliable counterpart that argues well, listens better, and ultimately improves judgment. :contentReference[oaicite:4]{index=4}
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-2">Read the Original</h2>
      <p className="mb-2">
        For the full narrative (and more Jules lore), read the original on Medium:
      </p>
      <p className="mb-8">
        <a
          href="https://medium.com/@bumpusma/behind-the-curtain-how-a-simple-ai-experiment-became-a-cognitive-framework-226a4b293c5f"
          className="text-sky-400 hover:underline"
        >
          Behind the Curtain: How a Simple AI Experiment Became a Cognitive Framework
        </a>
      </p>

      <footer className="text-xs text-slate-500 mt-8 border-t border-gray-800 pt-4">
        © 2025 Mike Bumpus. All rights reserved.<br />
        AI Cabinet Method™ and DigitalEgo™ are trademarks of AI Cabinet Method LLC.<br />
        Portions of this article are based on research accepted for publication in <em>Issues in Information Systems</em>, Vol. 26 (2025). :contentReference[oaicite:5]{index=5}
      </footer>
    </article>
  );
}
