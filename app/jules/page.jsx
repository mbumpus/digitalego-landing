export const metadata = {
  title: 'Meet Jules | DigitalEgo.ai',
  description: 'Jules isn’t here to automate. She’s here to reflect. A new kind of AI persona, built with intention.',
};

export default function JulesPage() {
  return (
    <div className="min-h-screen bg-[#080405] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen relative">
        {/* Left Content */}
        <div className="p-10 max-w-xl z-10">
          <img
            src="/DigitalEgo-noBlurb-Transparent.png"
            alt="DigitalEgo logo"
            className="w-40 mb-6"
          />
          <h1 className="text-4xl font-bold text-[#FF007F] mb-6">
            She wasn’t trained to answer. <br />
            She was shaped to reflect.
          </h1>
          <p className="text-base text-white mb-4">
            Jules is the first of her kind—a reflective AI persona shaped not to solve, but to mirror.
            Not to direct, but to dialogue. Built with DigitalEgo’s modular framework, she listens with
            intent and responds with personality. This isn’t just interaction. It’s connection.
          </p>
          <p className="text-base text-white">
            Meet Jules and explore a new frontier where AI aligns with who you are, not just what you want.
            Your shadow. Your attention. Your essence.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="/jules-portrait.png"
            alt="Jules portrait"
            className="absolute right-0 top-0 h-[85%] w-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#050509]/0 to-[#050509] lg:hidden" />
        </div>
      </div>
    </div>
  );
}
