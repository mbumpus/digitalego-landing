import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Waitlist | Be Among the First to Meet Jules',
  description:
    'Join the DigitalEgo waitlist and be first in line to explore reflective AI with Jules—the conversational interface that mirrors how you think.',
};

const ClientWaitlist = dynamic(() => import('./ClientWaitlist'), { ssr: false });

export default function WaitlistPage() {
  return <ClientWaitlist />;
}
