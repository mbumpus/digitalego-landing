import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Waitlist | Be Among the First to Experience Synthetic Enablement™',
  description:
    'Join the DigitalEgo waitlist and be first in line to explore how DigitalEgo can change the way you *do* AI.',
};

const ClientWaitlist = dynamic(() => import('./ClientWaitlist'), { ssr: false });

export default function WaitlistPage() {
  return <ClientWaitlist />;
}
