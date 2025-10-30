import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-extrabold">EuroTow Solutions</h3>
          <p className="mt-3 text-white/70 max-w-sm">
            Premium vehicle logistics across the UK and Europe. Enclosed, supercar, classic, and multi-car movements — 24/7.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-white/60" /> +44 7561 616464</li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-white/60" /> WhatsApp available 24/7</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-white/60" /> Eurotowsolutlions@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-white/60" /> 124-128 City Road, London, England, EC1V 2NX</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60">Coverage</h4>
          <p className="mt-3 text-white/70">United Kingdom and all major European countries.</p>
          <div className="mt-4 flex gap-2">
            <a href="tel:+447561616464" className="rounded-md bg-[#0ea5e9] px-4 py-2 text-sm font-semibold text-black hover:bg-[#22d3ee] transition">Call Now</a>
            <a href="https://wa.me/447561616464?text=Hi%20EuroTow%20Solutions%2C%20I%20need%20assistance." target="_blank" rel="noreferrer" className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} EuroTow Solutions • UK & European Coverage
      </div>
    </footer>
  );
}
