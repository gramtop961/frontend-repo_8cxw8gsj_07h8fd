import { ShieldCheck, Package, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-200 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-200 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <span className="inline-block rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/20">New</span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
            Shop phones your way — then unbox at our Self‑Collection Centers
          </h1>
          <p className="mt-4 max-w-xl text-zinc-600">
            Discover the latest smartphones and accessories online, then pick up at a nearby center where you can open the box, verify, and check stock on the spot before you take it home.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#phones" className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700">
              Shop Phones
            </a>
            <a href="#collection" className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 shadow-sm hover:border-blue-300">
              <MapPin className="h-4 w-4" />
              Find a Collection Center
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-zinc-700">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-blue-600"/>Open-box verify</div>
            <div className="flex items-center gap-2"><Package className="h-4 w-4 text-blue-600"/>Sealed stock</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-blue-600"/>Near you</div>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop"
              alt="Latest smartphone on a minimal desk"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
