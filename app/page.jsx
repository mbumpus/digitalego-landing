import React from 'react';

export default function LandingPage() {
  return (
    <div className="bg-[#061525] text-white flex flex-col justify-center items-center min-h-screen text-center p-4">
      <img src="/DigitalEgo_logo_TM_alt.png" alt="DigitalEgo.AI Logo" className="max-w-[80%] h-auto" />
      <h1 className="text-3xl md:text-5xl font-bold mt-8">Meet the Minds Behind the Mirror.</h1>
      <p className="text-xl italic mt-4">Explore your own Digital Ego—or chat with history's greatest.</p>
      <a href="/waitlist" className="mt-6 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-lg">Join the Waitlist</a>
      <p className="text-sm text-slate-400 italic mt-6">"Learning never exhausts the mind." —Leonardo da Vinci, now Digital.</p>
     
      <footer className="absolute bottom-4 text-xs text-slate-400 text-center">
        <p>
          &copy; 2025 DigitalEgo.AI. All rights reserved. DigitalEgo.AI™ is a trademark of AI Cabinet Method LLC.
        </p>
        <p>
          <a rel="me" href="https://me.dm/@mikebumpus" className="text-sky-400 hover:underline">
            Follow on Mastodon
          </a>
        </p>
      </footer>
    </div>
  );
}
