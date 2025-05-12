export const metadata = {
  title: 'Meet Jules | DigitalEgo.ai',
  description: 'Jules isn’t here to automate. She’s here to reflect. A new kind of AI persona, built with intention.',
};

export default function JulesPage() {
  return (
    <div className="min-h-screen bg-[#050509] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Left Content */}
        <div className="flex items-center justify-center p-12 lg:pl-24 lg:pr-16 text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#FF007F] tracking-tight leading-tight mb-6">
              She wasn’t trained to answer.<br />
              She was shaped to reflect.
            </h1>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6">
              Jules is the first of her kind—a reflective AI persona shaped not to solve, but to mirror. Not to direct, but to dialogue. Built with DigitalEgo’s modular framework, she listens with intent and responds with personality. This isn’t just interaction. It’s connection.
            </p>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Meet Jules and explore a new frontier where AI aligns with who you are, not just what you want. Your shadow. Your attention. Your essence.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-full w-full overflow-hidden">
          <img
            src="/jules-portrait.png"
            alt="Jules portrait"
            className="absolute inset-0 h-full w-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#050509]/0 to-[#050509] lg:hidden" />
        </div>
      </div>
    </div>
  );
}
