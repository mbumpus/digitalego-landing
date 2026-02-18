import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Newsletter | DigitalEgo',
  description:
    'Research updates, product launches, and insights on building AI that amplifies human thinking.',
};

const ClientWaitlist = dynamic(() => import('./ClientWaitlist'), { ssr: false });

export default function WaitlistPage() {
  return <ClientWaitlist />;
}
