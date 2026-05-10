import { ReactNode } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

type LayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
};

const links = [
  { label: 'Home', href: '/' },
  { label: 'GitHub', href: 'https://github.com/axyl-casc' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/axyl-carefoot-schulz-7b3024200/' }
];

export function Layout({ title, subtitle, children, theme, onThemeChange }: LayoutProps) {
  return (
    <div className="bg-base-200 text-base-content font-sans leading-normal tracking-normal min-h-screen flex flex-col">
      <Header title={title} subtitle={subtitle} links={links} theme={theme} onThemeChange={onThemeChange} />
      {children}
      <Footer />
    </div>
  );
}
