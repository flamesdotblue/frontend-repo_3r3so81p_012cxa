import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('New Request from EuroTow Solutions Website');
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:Eurotowsolutlions@gmail.com?subject=${subject}&body=${body}`;
  };

  const waText = encodeURIComponent(
    `Hello EuroTow Solutions, I need help with ${form.service || 'your services'}. Name: ${form.name}. Phone: ${form.phone}. ${form.message}`
  );

  return (
    <section id="contact" className="relative bg-[#0b224b] py-16">
      <div className="mx-auto max-w-6xl px-6 text-white">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">Contact Us</h2>
            <p className="mt-3 text-white/80">
              24/7 Dispatch • Fast Response • Professional Service
            </p>

            <div className="mt-6 space-y-4">
              <a href="tel:+447561616464" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10"><Phone className="h-5 w-5" /></div>
                <span className="font-medium">+44 7561 616464</span>
              </a>
              <a href="https://wa.me/447561616464?text=Hi%20EuroTow%20Solutions%2C%20I%20need%20assistance." target="_blank" rel="noreferrer" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10"><MessageCircle className="h-5 w-5" /></div>
                <span className="font-medium">WhatsApp</span>
              </a>
              <a href="mailto:Eurotowsolutlions@gmail.com" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10"><Mail className="h-5 w-5" /></div>
                <span className="font-medium">Eurotowsolutlions@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10"><MapPin className="h-5 w-5" /></div>
                <span className="font-medium">124-128 City Road, London, England, EC1V 2NX</span>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-white/10 p-4 text-sm">
              We cover the entire United Kingdom and all European countries. Call us now for immediate dispatch.
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-xl font-bold text-[#0b224b]">Request a Quote</h3>
            <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-[#2a2a2a]">Name</label>
                <input name="name" value={form.name} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a4d8f]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2a2a2a]">Phone</label>
                <input name="phone" value={form.phone} onChange={onChange} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a4d8f]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2a2a2a]">Service</label>
                <select name="service" value={form.service} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a4d8f]">
                  <option value="">Select a service</option>
                  <option>Transport</option>
                  <option>Breakdown</option>
                  <option>Towing</option>
                  <option>Jumpstart</option>
                  <option>Freight Transport</option>
                  <option>Cargo</option>
                  <option>Roadside Assistance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#2a2a2a]">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} rows={4} className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1a4d8f]" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="inline-flex items-center rounded-md bg-[#1a4d8f] px-5 py-2.5 font-semibold text-white hover:bg-[#163f74] transition">
                  Send via Email
                </button>
                <a
                  href={`https://wa.me/447561616464?text=${waText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md bg-[#0b224b] px-5 py-2.5 font-semibold text-white hover:bg-[#081a39] transition"
                >
                  Message on WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
