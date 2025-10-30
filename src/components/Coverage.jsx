import { Globe2, CheckCircle2 } from 'lucide-react';

export default function Coverage() {
  const highlights = [
    'UK nationwide coverage',
    'Cross-border transport permits',
    'Ferry and customs coordination',
    'Fully insured and compliant',
  ];

  const countries = ['United Kingdom', 'France', 'Germany', 'Spain', 'Italy', 'Netherlands', 'Belgium', 'Poland'];

  return (
    <section id="coverage" className="relative py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b224b]/5 px-3 py-1 text-[#0b224b]">
              <Globe2 className="h-4 w-4" />
              <span className="text-sm font-semibold">Coverage</span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#0b224b]">
              United Kingdom and European Countries
            </h2>
            <p className="mt-3 text-[#3f3f41]">
              We operate across mainland UK and all major European destinations. Whether it’s a single vehicle, fleet movement, or urgent recovery—our team handles end-to-end logistics with care.
            </p>

            <ul className="mt-6 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#1a4d8f]" />
                  <span className="text-[#2a2a2a]">{h}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-md bg-[#1a4d8f] px-5 py-3 font-semibold text-white shadow hover:bg-[#163f74] transition"
            >
              Request Transport
            </a>
          </div>

          <div className="rounded-2xl border border-[#eaeaea] p-6 bg-[#f5f5f5]">
            <h3 className="text-lg font-bold text-[#0b224b]">Popular routes</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {countries.map((c) => (
                <span key={c} className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm text-[#3f3f41] shadow-sm ring-1 ring-black/5">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-[#3f3f41]">
              Ask about other destinations across Europe — we’ll make it happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
