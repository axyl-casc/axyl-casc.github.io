import { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type LayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

const links = [
  { label: 'Home', href: '/' },
  { label: 'GitHub', href: 'https://github.com/axyl-casc' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axyl-carefoot-schulz-7b3024200/' }
];

export function Layout({ title, subtitle, children }: LayoutProps) {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans leading-normal tracking-normal min-h-screen flex flex-col">
      <Header title={title} subtitle={subtitle} links={links} />
      {children}
      <Footer />
    </div>
  );
}
