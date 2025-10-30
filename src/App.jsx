import Hero from './components/Hero';
import Services from './components/Services';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import { useEffect, useState } from 'react';

export default function App() {
  // Simple shrink-on-scroll header effect
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#2a2a2a]">
      {/* Header */}
      <header className={`${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'} fixed inset-x-0 top-0 z-50 transition-all`}>
        <div className="mx-auto flex h-16 items-center justify-between px-6 max-w-6xl">
          <a href="#home" className="flex items-center gap-2 font-extrabold text-[#0b224b]">
            <span className="text-xl">EuroTow Solutions</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-semibold text-[#0b224b]">
            <a href="#services" className="hover:text-[#1a4d8f]">Services</a>
            <a href="#coverage" className="hover:text-[#1a4d8f]">Coverage</a>
            <a href="#contact" className="hover:text-[#1a4d8f]">Contact</a>
            <a href="tel:+447561616464" className="rounded-md bg-[#1a4d8f] px-3 py-1.5 text-white hover:bg-[#163f74]">Call +44 7561 616464</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main className="pt-16">
        <Hero />
        <Services />
        <Coverage />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-[#f5f5f5] py-6">
        <div className="mx-auto max-w-6xl px-6 text-sm text-[#3f3f41] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} EuroTow Solutions. All rights reserved.</p>
          <p>Registered Address: 124-128 City Road, London, England, EC1V 2NX • UK & European Coverage</p>
        </div>
      </footer>
    </div>
  );
}
