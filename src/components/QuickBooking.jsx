import { useState } from 'react';
import { Car, MapPin, Calendar, Clock } from 'lucide-react';

export default function QuickBooking() {
  const [form, setForm] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    vehicle: 'Car',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Quick Booking Request\nPickup: ${form.pickup}\nDrop-off: ${form.dropoff}\nDate: ${form.date} ${form.time}\nVehicle: ${form.vehicle}`
    );
    window.open(`https://wa.me/447561616464?text=${msg}`, '_blank');
  };

  return (
    <section id="booking" className="relative -mt-20 sm:-mt-28 z-20 pb-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 text-white shadow-2xl">
          <div className="flex items-center gap-2 text-white/80">
            <Car className="h-5 w-5" />
            <h2 className="text-lg sm:text-xl font-bold">Quick Booking</h2>
          </div>

          <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-3">
            <div className="col-span-1 md:col-span-2">
              <label className="text-xs text-white/70">Pickup</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg bg-black/40 ring-1 ring-white/10 px-3 py-2">
                <MapPin className="h-4 w-4 text-white/60" />
                <input
                  name="pickup"
                  value={form.pickup}
                  onChange={onChange}
                  placeholder="Postcode or address"
                  className="w-full bg-transparent placeholder-white/40 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label className="text-xs text-white/70">Drop-off</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg bg-black/40 ring-1 ring-white/10 px-3 py-2">
                <MapPin className="h-4 w-4 text-white/60" />
                <input
                  name="dropoff"
                  value={form.dropoff}
                  onChange={onChange}
                  placeholder="Postcode or address"
                  className="w-full bg-transparent placeholder-white/40 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/70">Date</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg bg-black/40 ring-1 ring-white/10 px-3 py-2">
                <Calendar className="h-4 w-4 text-white/60" />
                <input type="date" name="date" value={form.date} onChange={onChange} className="w-full bg-transparent focus:outline-none" required />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/70">Time</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg bg-black/40 ring-1 ring-white/10 px-3 py-2">
                <Clock className="h-4 w-4 text-white/60" />
                <input type="time" name="time" value={form.time} onChange={onChange} className="w-full bg-transparent focus:outline-none" required />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/70">Vehicle</label>
              <select name="vehicle" value={form.vehicle} onChange={onChange} className="mt-1 w-full rounded-lg bg-black/40 ring-1 ring-white/10 px-3 py-2 focus:outline-none">
                <option>Car</option>
                <option>Supercar</option>
                <option>Classic</option>
                <option>4x4 / SUV</option>
                <option>Van</option>
              </select>
            </div>

            <div className="md:col-span-5 flex items-end justify-end">
              <button type="submit" className="mt-2 inline-flex w-full md:w-auto items-center justify-center rounded-lg bg-[#0ea5e9] px-6 py-3 font-semibold text-black hover:bg-[#22d3ee] transition">
                Book via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
