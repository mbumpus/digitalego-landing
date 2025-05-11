import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#061525] text-white flex flex-col items-center justify-center px-6 py-20 text-center">
    <img src="/DigitalEgo_logo_TM_alt.png" alt="DigitalEgo.AI Logo" className="w-40 mb-6" />
    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Not just a chatbot. <br />
        A mirror.
      </h1>

      <p className="text-xl md:text-2xl max-w-2xl text-slate-300 mb-10">
        Jules wasn’t trained to answer. <br className="hidden sm:inline" />
        She was shaped to reflect.
      </p>

      <a
        href="/waitlist"
        className="bg-blue-600 hover:bg-blue-500 hover:underline text-white px-6 py-3 rounded text-lg transition-all"

      >
        Join the Waitlist
      </a>
      
      <footer className="mt-20 text-sm text-slate-500 italic">
        Built on nights and weekends. Backed by purpose. Shaped with intention.
      </footer>
    </div>
  );
}
