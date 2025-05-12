// app/jules/page.jsx

export const metadata = {
  title: 'Meet Jules | Reflective AI by DigitalEgo.ai',
  description:
    'Jules isn’t here to answer your questions. She’s here to reflect your thinking. Explore the first persona in the DigitalEgo.ai suite.',
};

export default function JulesLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-screen">
        {/* Left Column (Text Content) */}
        <div className="flex flex-col justify-center items-start p-10 md:p-20">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FF007F] mb-8">
            She wasn’t trained to answer.
            <br />
            She was shaped to reflect.
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Jules is the first of her kind—a reflective AI persona shaped not to solve, but to mirror. Not to direct, but to dialogue. Built with DigitalEgo’s modular framework, she listens with intent and responds with personality. This isn’t just interaction. It’s connection.
          </p>
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Meet Jules and explore a new frontier where AI aligns with who you are, not just what you want. Your rhythms. Your patterns. Your perspective.
          </p>
          <a
            href="/waitlist"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded text-lg transition-all"
          >
            Join the Waitlist
          </a>
        </div>

        {/* Right Column (Image) */}
        <div className="relative w-full h-full">
          <img
            src="/jules-portrait.png"
            alt="Jules AI Persona"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <footer className="text-center text-slate-500 text-sm py-4 italic">
        &copy; 2025 DigitalEgo.ai. All rights reserved.
      </footer>
    </div>
  );
}
