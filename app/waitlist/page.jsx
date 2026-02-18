import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Join the Waitlist | DigitalEgo',
  description:
    'Be among the first to build with research-driven AI. Join the DigitalEgo waitlist.',
};

const ClientWaitlist = dynamic(() => import('./ClientWaitlist'), { ssr: false });

export default function WaitlistPage() {
  return <ClientWaitlist />;
}
