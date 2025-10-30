import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[82vh] md:h-[92vh] overflow-hidden bg-black">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradients for contrast - non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-white backdrop-blur">
            Black glass aesthetic • Futuristic motion • 24/7 Dispatch
          </div>
          <h1 className="mt-5 text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Precision Vehicle Transport, Built For Speed
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-lg text-white/90">
            UK nationwide and European movements. Enclosed, supercar, classic, and multi-vehicle logistics handled with care and urgency.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#booking" className="rounded-md bg-[#0ea5e9] px-5 py-3 text-sm font-semibold text-black hover:bg-[#22d3ee] transition shadow">
              Quick Booking
            </a>
            <a href="#gallery" className="rounded-md bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
