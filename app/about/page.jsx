import dynamic from 'next/dynamic';

export const metadata = {
  title: 'About DigitalEgo.ai | Modular AI That Mirrors You',
  description:
    'Learn more about the philosophy and people behind DigitalEgo.ai—an AI framework built to reflect your thinking, not automate it.',
};

const AboutClient = dynamic(() => import('./AboutClient'), { ssr: false });

export default function AboutPage() {
  return <AboutClient />;
}
