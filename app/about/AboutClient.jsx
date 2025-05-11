export const metadata = {
  title: 'About DigitalEgo.ai | Modular AI That Mirrors You',
  description:
    'Learn more about the philosophy and people behind DigitalEgo.ai—an AI framework built to reflect your thinking, not automate it.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">About DigitalEgo</h1>

      <div className="max-w-2xl space-y-6 text-lg leading-relaxed">
        <p>
          DigitalEgo is more than just a chatbot framework—it’s a shift in how we design AI for human connection. Where most tools are trained to answer, ours are shaped to reflect.
        </p>

        <p>
          Built on a modular persona architecture, DigitalEgo.AI mirrors your thought process, preferences, and priorities. You don’t prompt it—you converse with it. You don’t configure it—you collaborate with it.
        </p>

        <p>
          Every interaction with a DigitalEgo agent is designed to feel like dialogue, not query resolution. This isn’t automation for its own sake. It’s intentional augmentation. Thoughtful. Personal. Sometimes even poetic.
        </p>

        <p>
          We’re building a future where AI doesn't just respond—it resonates. With your style. Your rhythm. Your way of thinking.
        </p>

        <p className="text-sm text-gray-400 mt-8 italic">
          Built on nights and weekends. Backed by purpose. Shaped with intention.
        </p>
      </div>
    </div>
  );
}
