import Link from 'next/link';

export const metadata = {
  title: "Your Website Is Invisible to 800 Million People | DigitalEgo",
  description: "Every week, 800 million people ask ChatGPT to help them find things. 97% of websites have no AI identity. They're not blocked — they're just invisible.",
  openGraph: {
    title: "Your Website Is Invisible to 800 Million People",
    description: "And robots.txt can't fix it.",
    url: "https://www.digitalego.ai/articles/invisible-to-800-million",
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
          Your Website Is Invisible to 800 Million People
        </h1>
        <p className="text-xl text-hematite mb-2">
          And robots.txt can't fix it.
        </p>
        <p className="text-sm text-hematite/60 mb-8">
          February 2, 2026
        </p>

        <div className="prose prose-lg max-w-none text-ink">
          
          <p className="mb-6 text-xl">Every week, 800 million people ask ChatGPT to help them find things. Products. Services. Answers. Companies.</p>
          
          <p className="mb-4 text-2xl font-medium">97% of websites have no AI identity.</p>
          
          <p className="mb-4">They're not blocked. They're just... invisible. AI agents don't know they exist.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The New Discovery Layer</h2>
          
          <p className="mb-4">Search is fragmenting. Google still dominates, but increasingly, people start with AI:</p>
          
          <ul className="list-none pl-0 mb-6 space-y-2 italic text-hematite">
            <li>"Hey ChatGPT, find me a contractor in Denver"</li>
            <li>"Perplexity, what's the best CRM for small teams?"</li>
            <li>"Claude, summarize the options for X"</li>
          </ul>
          
          <p className="mb-4">These aren't searches. They're conversations with systems that synthesize answers from... somewhere.</p>
          
          <p className="mb-4 font-medium">If your site isn't in that "somewhere," you don't exist.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Broken Bargain</h2>
          
          <p className="mb-4">For 30 years, the web ran on a simple exchange: crawlers index your content, search engines send you traffic.</p>
          
          <p className="mb-4">AI broke that deal.</p>
          
          <p className="mb-4">Cloudflare's 2025 data shows Anthropic's crawler hit sites 500,000 times for every single visitor it sent back. Five hundred thousand to one.</p>
          
          <p className="mb-4">That's not indexing. That's extraction.</p>
          
          <p className="mb-4">And publishers noticed. 79% of top news sites now block at least one AI crawler. The response is understandable.</p>
          
          <p className="mb-4">But blocking comes with a cost.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Trap</h2>
          
          <p className="mb-4">A recent Wharton/Rutgers study tracked what happened when major publishers blocked AI bots:</p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>23% total traffic loss</strong></li>
            <li><strong>14% drop in human traffic</strong> (not just bot removal — actual readers)</li>
          </ul>
          
          <p className="mb-4">The mechanism isn't fully understood, but the pattern is clear: block AI, lose visibility. Allow AI, train your competitors for free.</p>
          
          <p className="mb-4">robots.txt gives you exactly two options: block or allow. On or off. Exploited or invisible.</p>
          
          <p className="mb-4 font-medium">There's no way to say: "Yes, you can read this. No, you can't train on it. Here's the version I want you to see."</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Third Option</h2>
          
          <p className="mb-4">That's why I've been working on Machine Web Protocol (MWP).</p>
          
          <p className="mb-4">MWP is a simple protocol that lets websites publish AI-readable content on their terms:</p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Selective exposure:</strong> Decide what AI agents see</li>
            <li><strong>Machine-optimized format:</strong> Plain text, structured for LLM consumption</li>
            <li><strong>Terms built in:</strong> Signal how your content can be used</li>
          </ul>
          
          <p className="mb-4">It's not a replacement for your website. It's a parallel channel — one designed for machines.</p>
          
          <p className="mb-4 italic">Think of it like RSS, but for AI agents.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">How It Works</h2>
          
          <p className="mb-4">A site implementing MWP adds a <code className="bg-hematite/10 px-1 rounded">/machine/</code> directory with plain text files:</p>
          
          <pre className="bg-ink text-cloud-dancer p-4 rounded-lg overflow-x-auto text-sm mb-6">
{`Source-URL: https://acme.com/about
Published: 2026-01-15T10:00:00Z
Author: Acme Corp
Title: About Acme Corp
Categories: company, widgets, enterprise
---
We're a widget company founded in 2019. We make 
enterprise-grade widgets for teams who need reliability...`}
          </pre>
          
          <p className="mb-4">Header declares metadata. Body provides clean, machine-readable content. No HTML, no JavaScript, no parsing required.</p>
          
          <p className="mb-4">AI agents check for MWP before (or instead of) scraping HTML. They get clean content. You control what they see.</p>
          
          <p className="mb-4">Simple. No JavaScript rendering. No parsing complex DOM structures. Just text.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Why Now</h2>
          
          <p className="mb-4">The window is closing.</p>
          
          <p className="mb-4">News publishers expect 43% of their search traffic to disappear in the next three years. Google's AI Overviews now appear on 60% of searches. The answer box is eating the click.</p>
          
          <p className="mb-4">The old playbook — SEO, backlinks, keyword optimization — was built for a world where humans click through to read. That world is shrinking.</p>
          
          <p className="mb-4 font-medium">The sites that thrive in the AI era won't be the ones with the best meta tags. They'll be the ones with the best machine interfaces.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">Check Your Site</h2>
          
          <p className="mb-4">Before you do anything else: find out where you stand.</p>
          
          <p className="mb-4">I built a free tool that checks your site's AI visibility in about 10 seconds:</p>
          
          <p className="mb-6">
            <a 
              href="https://machinewebprotocol.com/check" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-fusion hover:text-ink font-medium"
            >
              machinewebprotocol.com/check
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </p>
          
          <p className="mb-4">It'll tell you what AI crawlers can see, what you're blocking, and whether you have any AI identity files in place.</p>

          <hr className="my-12 border-hematite/20" />

          <h2 className="text-3xl font-medium mt-12 mb-6 text-ink">The Spec Is Open</h2>
          
          <p className="mb-4">MWP is open source (Apache 2.0).</p>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Full spec → <a href="https://github.com/mbumpus/mwp-spec" target="_blank" rel="noopener noreferrer" className="text-blue-fusion hover:text-ink">github.com/mbumpus/mwp-spec</a></li>
            <li>Implementation guides → <a href="https://mwp.foundation" target="_blank" rel="noopener noreferrer" className="text-blue-fusion hover:text-ink">mwp.foundation</a></li>
          </ul>
          
          <p className="mb-4">This isn't a product pitch. It's a protocol proposal. I think the web needs this, and I'm building it in public.</p>
          
          <p className="mb-4">If you have feedback, open an issue. If you think this is the wrong approach, tell me why.</p>
          
          <p className="mb-4">The current system — block or be exploited — isn't sustainable. We need a third option.</p>
          
          <p className="mb-4 font-medium">MWP is my attempt to build one.</p>

          <hr className="my-12 border-hematite/20" />

          <p className="text-sm text-hematite/60 mt-12">
            Mike Bumpus builds AI infrastructure at DigitalEgo. He's currently focused on agent protocols, traceable reasoning systems, and making sure the web doesn't accidentally become invisible.
          </p>
        </div>
      </div>
    </article>
  );
}
