export const metadata = {
  title: 'About DigitalEgo.ai | Modular AI That Mirrors You',
  description:
    'Learn more about the philosophy, products, and people behind DigitalEgo.ai—an AI framework built to reflect your thinking, not just automate it.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">About DigitalEgo</h1>

      <div className="max-w-xl space-y-8 text-lg leading-relaxed">
        <p>
          DigitalEgo is more than just a chatbot framework—it’s a new way to design AI for human connection. Where most tools are trained to answer, ours are shaped to reflect.
        </p>

        <p>
          We’re building a <span className="font-semibold">multi-agent runtime</span> that lets people collaborate with AI the way they collaborate with colleagues: through conversation, context, and continuity. Our modular persona architecture makes it possible to assemble specialized “crews” of agents that mirror your thought process, preferences, and priorities. You don’t prompt them—you interact. You don’t configure them—you collaborate.
        </p>

        <p>
          Unlike automation built to replace, DigitalEgo augments. Every interaction is designed to feel like dialogue, not query resolution. It’s thoughtful augmentation—personal, contextual, and sometimes even poetic.
        </p>

        <p>
          We’re already shipping early products that prove the model works:
        </p>

        <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md">
          <li><span className="font-semibold">Crewly</span>: an AI-driven support crew for small business.</li>
          <li><span className="font-semibold">90 Minute Expert</span>: rapid-learning AI tutors.</li>
          <li><span className="font-semibold">Baron von Boost</span>: a persona-driven motivational app.</li>
        </ul>

        <p>
          Each is powered by the same underlying runtime: modular agents, persistent memory, and transparent reasoning. We’re building a future where AI doesn’t just respond—it resonates. With your style. Your rhythm. Your way of thinking.
        </p>

        <p className="text-sm italic text-slate-400">
          Built on nights and weekends. Backed by purpose. Shaped with intention. Now moving fast.
        </p>
      </div>
    </div>
  );
}
