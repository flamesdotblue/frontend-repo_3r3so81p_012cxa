import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X, Phone, MessageCircle } from 'lucide-react';

const services = [
  'Car Delivery',
  'Multi Car Collection & Delivery',
  'Classic Car Movements',
  'Supercar Movements',
  'Enclosed Car Movements',
  'European Car Movements',
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItem = 'px-3 py-2 rounded-md text-sm font-semibold hover:text-white/90';

  return (
    <header className={`${scrolled ? 'backdrop-blur bg-black/30 ring-1 ring-white/10' : 'bg-transparent'} fixed inset-x-0 top-0 z-50 transition-all`}> 
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl text-white">
        <a href="#home" className="flex items-center gap-2 font-extrabold">
          <span className="text-lg sm:text-xl tracking-tight">EuroTow Solutions</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <a href="#home" className={navItem}>Home</a>

          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onClick={() => setServicesOpen((v) => !v)}
              className={`${navItem} inline-flex items-center gap-1`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-[320px] rounded-xl border border-white/10 bg-black/70 backdrop-blur shadow-xl p-2">
                {services.map((s) => (
                  <a
                    key={s}
                    href="#booking"
                    className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#locations" className={navItem}>Locations</a>
          <a href="#gallery" className={navItem}>Gallery</a>
          <a href="#contact" className={navItem}>Contact Us</a>

          <div className="ml-2 flex items-center gap-2">
            <a
              href="tel:+447561616464"
              className="inline-flex items-center gap-2 rounded-md bg-[#0ea5e9] px-3 py-2 text-sm font-semibold text-black hover:bg-[#22d3ee] transition"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href="https://wa.me/447561616464?text=Hi%20EuroTow%20Solutions%2C%20I%20need%20assistance."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20 transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 text-white">
            <a href="#home" className="block px-2 py-2 rounded hover:bg-white/10" onClick={() => setOpen(false)}>Home</a>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-2 rounded hover:bg-white/10">
                <span>Services</span>
                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <div className="mt-1 space-y-1">
                {services.map((s) => (
                  <a key={s} href="#booking" className="block rounded px-3 py-2 text-sm hover:bg-white/10" onClick={() => setOpen(false)}>
                    {s}
                  </a>
                ))}
              </div>
            </details>
            <a href="#locations" className="block px-2 py-2 rounded hover:bg-white/10" onClick={() => setOpen(false)}>Locations</a>
            <a href="#gallery" className="block px-2 py-2 rounded hover:bg-white/10" onClick={() => setOpen(false)}>Gallery</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-white/10" onClick={() => setOpen(false)}>Contact Us</a>

            <div className="mt-2 flex items-center gap-2">
              <a href="tel:+447561616464" className="inline-flex items-center gap-2 rounded-md bg-[#0ea5e9] px-3 py-2 text-sm font-semibold text-black hover:bg-[#22d3ee] transition">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href="https://wa.me/447561616464?text=Hi%20EuroTow%20Solutions%2C%20I%20need%20assistance." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
