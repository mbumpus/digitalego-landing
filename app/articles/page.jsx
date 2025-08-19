export const metadata = {
  title: "Articles | DigitalEgo.ai",
  description: "Explore reflective AI insights, frameworks, and thought leadership from the creators of DigitalEgo."
};

export default function ArticlesPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="space-y-8">
         <div>
          <a href="/articles/behind-the-curtain" className="text-2xl font-semibold text-sky-400 hover:underline">
            Behind the Curtain: How a Simple AI Experiment Became a Cognitive Framework
          </a>
        <div>
          <a href="/articles/gen-2-ai" className="text-2xl font-semibold text-sky-400 hover:underline">
            What Comes After Copilot? The Rise of Gen 2 AI
          </a>
          <p className="text-slate-300 mt-1">Gen 2 AI is about more than efficiency—it's about identity, alignment, and agency.</p>
        </div>
        <div>
          <a href="/articles/access-isnt-adoption" className="text-2xl font-semibold text-sky-400 hover:underline">
            Access Isn’t Adoption: Why Real AI Empowerment Starts with Identity
          </a>
          <p className="text-slate-300 mt-1">Making AI available isn’t enough. True adoption starts with alignment and reflective design.</p>
        </div>
        <div>
          <a href="/articles/recruit-personalities" className="text-2xl font-semibold text-sky-400 hover:underline">
            Don’t Engineer Prompts. Recruit Personalities.
          </a>
          <p className="text-slate-300 mt-1">Stop writing better prompts. Start building better agents. Persona-driven AI is the next leap forward.</p>
        </div>
      </div>
    </section>
  );
}
