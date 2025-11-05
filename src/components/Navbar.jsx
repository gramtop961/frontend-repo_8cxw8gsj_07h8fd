import { Smartphone, MapPin, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
            <Smartphone className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Volt Mobile</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#phones" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Phones</a>
          <a href="#accessories" className="text-sm font-medium text-zinc-700 hover:text-blue-600">Accessories</a>
          <a href="#collection" className="inline-flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-blue-600">
            <MapPin className="h-4 w-4" />
            Collection
          </a>
        </nav>

        <button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:border-blue-300 hover:bg-blue-50">
          <ShoppingCart className="h-4 w-4" />
          Cart
        </button>
      </div>
    </header>
  );
}
