import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickBooking from './components/QuickBooking';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <QuickBooking />

        {/* Locations */}
        <section id="locations" className="relative py-16 bg-gradient-to-b from-black to-[#0b0f14]">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-extrabold">Locations</h2>
              <span className="text-xs sm:text-sm text-white/60">UK nationwide • Europe-wide</span>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {['London','Manchester','Birmingham','Leeds','Glasgow','Bristol','Paris','Berlin','Madrid','Rome','Amsterdam','Brussels'].map((c)=> (
                <div key={c} className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-center text-sm text-white/80">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="relative py-16 bg-[#0b0f14]">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Gallery</h2>
            <p className="mt-2 text-white/70">Precision moves, premium fleet, enclosed and open transport.</p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
