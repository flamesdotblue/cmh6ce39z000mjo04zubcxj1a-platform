import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const apply = () => {
      const useDark = theme === 'dark' || (theme === 'system' && mq.matches);
      root.classList.toggle('dark', useDark);
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [theme]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1f] via-black to-[#05060a] text-gray-100 selection:bg-yellow-400/30 selection:text-yellow-100">
      <Header theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <MainSections />
      </main>
      <Footer />
    </div>
  );
}
