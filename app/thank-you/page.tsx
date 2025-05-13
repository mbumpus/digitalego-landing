// app/thank-you/page.tsx

export const metadata = {
  title: 'Thank You | DigitalEgo',
  description: 'You’re officially on the waitlist. Jules is excited to meet you soon.',
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#061525] text-white flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">You're on the list! 🎉</h1>
        <p className="text-lg text-gray-300 mb-6">
          Thank you for joining the DigitalEgo waitlist. Jules is excited to meet you soon.
        </p>
        <div className="mb-8">
          <img
            src="/images/jules-hero.png"
            alt="Jules, your reflective AI companion"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-6 rounded transition"
          >
            Back to Home
          </a>
          <a
            href="https://digitalego.ai/waitlist"
            className="border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded transition"
          >
            Invite a Friend
          </a>
        </div>
      </div>
    </div>
  );
}
