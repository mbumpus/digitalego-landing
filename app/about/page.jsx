export const metadata = {
  title: 'About DigitalEgo.ai | Modular AI That Mirrors You',
  description:
    'Learn more about the philosophy and people behind DigitalEgo.ai—an AI framework built to reflect your thinking, not automate it.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold mb-4">About DigitalEgo</h1>
      <p className="text-lg max-w-xl">
        DigitalEgo is a modular AI framework built to reflect how you think—not just respond to what you ask.
      </p>
      <p className="text-sm text-gray-500 mt-4">Built in spare hours. Shaped with intention.</p>
    </div>
  );
}
