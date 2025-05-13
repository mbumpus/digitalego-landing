export const metadata = {
  title: 'Thank You | DigitalEgo.ai',
  description: 'Thanks for joining the waitlist for DigitalEgo.ai.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#080405] text-white flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF007F]">Thank You</h1>
      <p className="text-xl md:text-2xl max-w-xl text-slate-300 mb-6">
        You’re officially on the list.
      </p>
      <p className="text-base max-w-lg text-slate-400">
        You’ll be among the first to meet Jules—and experience what it means to reflect, not just respond. Keep an eye on your inbox.
      </p>

      <a
        href="/"
        className="mt-10 inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded text-lg transition-all"
      >
        Return Home
      </a>

      <footer className="mt-16 text-sm text-slate-500 italic">
        Built on nights and weekends. Backed by purpose. Shaped with intention.
      </footer>
    </div>
  );
}
