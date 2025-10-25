import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Star } from 'lucide-react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const cycleTheme = () => {
    setTheme((t) => (t === 'system' ? 'dark' : t === 'dark' ? 'light' : 'system'));
  };

  const themeIcon = theme === 'light' ? <Sun size={18} /> : theme === 'dark' ? <Moon size={18} /> : <Star size={18} />;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg shadow-yellow-500/30" />
            <span className="font-semibold tracking-wide text-yellow-300">Rahamat Ali</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-yellow-300 transition-colors">
                {l.label}
              </a>
            ))}
            <button
              aria-label="Toggle theme"
              onClick={cycleTheme}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition"
            >
              {themeIcon}
              <span className="hidden lg:inline">{theme[0].toUpperCase() + theme.slice(1)}</span>
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={cycleTheme}
              className="inline-flex items-center rounded-md border border-white/10 bg-white/5 p-2 text-gray-200 hover:bg-white/10 transition"
            >
              {themeIcon}
            </button>
            <button
              aria-label="Open menu"
              className="inline-flex items-center rounded-md border border-white/10 bg-white/5 p-2 text-gray-200 hover:bg-white/10 transition"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-gray-200 hover:bg-white/10"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
