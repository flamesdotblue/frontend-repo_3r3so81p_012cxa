import { Truck, Car, Wrench, BatteryCharging, Package, LifeBuoy } from 'lucide-react';

const services = [
  {
    title: 'Transport',
    desc: 'Safe and secure vehicle transport across the UK and Europe.',
    Icon: Truck,
  },
  {
    title: 'Breakdown',
    desc: 'On-site support and recovery when your vehicle lets you down.',
    Icon: Wrench,
  },
  {
    title: 'Towing',
    desc: 'Light to heavy-duty towing with professional operators.',
    Icon: Car,
  },
  {
    title: 'Jumpstart',
    desc: 'Fast battery jumpstarts to get you moving again.',
    Icon: BatteryCharging,
  },
  {
    title: 'Freight Transport',
    desc: 'Reliable logistics for goods and specialist cargo.',
    Icon: Package,
  },
  {
    title: 'Roadside Assistance',
    desc: 'Immediate help for flats, lockouts, and minor repairs.',
    Icon: LifeBuoy,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#f5f5f5] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b224b]">Our Services</h2>
          <p className="mt-3 text-[#3f3f41] max-w-2xl mx-auto">
            Transportation available throughout the United Kingdom and all European countries.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, desc, Icon }) => (
            <div key={title} className="group rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:shadow-md transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1a4d8f]/10 text-[#1a4d8f]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-[#0b224b]">{title}</h3>
              <p className="mt-2 text-[#3f3f41]">{desc}</p>
              <div className="mt-4 text-sm font-semibold text-[#1a4d8f] opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
