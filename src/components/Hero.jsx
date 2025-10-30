import Spline from '@splinetool/react-spline';
import { Phone, MessageCircle } from 'lucide-react';

const HERO_HEADLINE = '24/7 Vehicle Transport & Roadside Assistance';
const SUBTITLE = 'Fast, reliable towing and transport across the UK and all European countries';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[78vh] md:h-[88vh] overflow-hidden bg-[#0b224b]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient to improve text contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b224b]/70 via-[#0b224b]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm backdrop-blur">
            <span className="font-semibold">EuroTow Solutions</span>
            <span className="opacity-80">• United Kingdom & Europe</span>
          </div>

          <h1 className="mt-6 text-3xl leading-tight font-extrabold sm:text-5xl md:text-6xl">
            {HERO_HEADLINE}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/90">
            {SUBTITLE}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+447561616464"
              className="inline-flex items-center gap-2 rounded-md bg-[#1a4d8f] px-5 py-3 font-semibold text-white shadow hover:bg-[#163f74] transition"
            >
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a
              href="https://wa.me/447561616464?text=Hi%20EuroTow%20Solutions%2C%20I%20need%20assistance."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-white/90 text-[#0b224b] px-5 py-3 font-semibold shadow hover:bg-white transition"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 font-semibold text-white hover:bg-white/20 transition"
            >
              Get a Quote
            </a>
          </div>

          <div className="mt-6 text-sm text-white/80">
            Available 24/7 • Rapid Dispatch • Professional Operators
          </div>
        </div>
      </div>
    </section>
  );
}
