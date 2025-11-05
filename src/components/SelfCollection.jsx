import { MapPin, ShieldCheck, Package, Clock } from "lucide-react";
import { useState } from "react";

export default function SelfCollection() {
  const [form, setForm] = useState({ center: "Downtown Hub", date: "", time: "", name: "", phone: "" });

  function onSubmit(e) {
    e.preventDefault();
    alert(`Slot requested at ${form.center} on ${form.date} ${form.time}. We\'ll text ${form.phone} to confirm!`);
    setForm({ center: "Downtown Hub", date: "", time: "", name: "", phone: "" });
  }

  return (
    <section id="collection" className="relative border-t border-zinc-200 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900">Self‑Collection Centers</h2>
          <p className="mt-3 max-w-prose text-zinc-600">
            Choose a center near you, reserve a time, and unbox your purchase with a specialist. Verify the IMEI, test features, and confirm accessories before you leave.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-blue-600" />
              <div>
                <h4 className="font-semibold text-zinc-900">Open‑box verification</h4>
                <p className="text-sm text-zinc-600">Inspect device condition, confirm seal, and run quick tests.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <Package className="mt-0.5 h-5 w-5 text-blue-600" />
              <div>
                <h4 className="font-semibold text-zinc-900">Guaranteed stock</h4>
                <p className="text-sm text-zinc-600">Real‑time stock allocation the moment you book your slot.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <Clock className="mt-0.5 h-5 w-5 text-blue-600" />
              <div>
                <h4 className="font-semibold text-zinc-900">Fast pickup</h4>
                <p className="text-sm text-zinc-600">Average time in‑center is under 10 minutes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
              <MapPin className="mt-0.5 h-5 w-5 text-blue-600" />
              <div>
                <h4 className="font-semibold text-zinc-900">Across the city</h4>
                <p className="text-sm text-zinc-600">Find locations downtown, midtown, and near transit hubs.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-zinc-900">Reserve a pickup slot</h3>
          <p className="mt-1 text-sm text-zinc-600">Slots are held for 30 minutes. Bring a valid ID for verification.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <label className="grid gap-1">
              <span className="text-sm font-medium text-zinc-700">Collection Center</span>
              <select
                value={form.center}
                onChange={(e) => setForm((f) => ({ ...f, center: e.target.value }))}
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                <option>Downtown Hub</option>
                <option>Midtown Tech Park</option>
                <option>Airport Express</option>
              </select>
            </label>

            <div className="grid grid-cols-2 gap-4">
              <label className="grid gap-1">
                <span className="text-sm font-medium text-zinc-700">Date</span>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </label>
              <label className="grid gap-1">
                <span className="text-sm font-medium text-zinc-700">Time</span>
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </label>
            </div>

            <label className="grid gap-1">
              <span className="text-sm font-medium text-zinc-700">Full Name</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-sm font-medium text-zinc-700">Phone Number</span>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder="(555) 123-4567"
                className="w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>

            <button type="submit" className="mt-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700">
              Book my open‑box slot
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
