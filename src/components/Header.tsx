import { ThemeController } from './ThemeController';

type NavLink = { label: string; href: string };

type HeaderProps = {
  title: string;
  subtitle: string;
  links: NavLink[];
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
};

export function Header({ title, subtitle, links, theme, onThemeChange }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container mx-auto text-center py-10 relative">
        <div className="absolute right-2 top-2">
          <ThemeController theme={theme} onChange={onThemeChange} />
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
        <nav className="flex justify-center space-x-4 mt-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="underline">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
