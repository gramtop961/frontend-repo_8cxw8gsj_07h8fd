import { Star } from "lucide-react";

const phones = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1199,
    img: "https://images.unsplash.com/photo-1695048134095-0aa60ec1bc88?q=80&w=1600&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 999,
    img: "https://images.unsplash.com/photo-1606011334315-025e4baab810?q=80&w=1600&auto=format&fit=crop",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Google Pixel 8",
    price: 799,
    img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1600&auto=format&fit=crop",
    rating: 4.6,
  },
];

const accessories = [
  {
    id: 101,
    name: "MagSafe Fast Charger",
    price: 49,
    img: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1600&auto=format&fit=crop",
    rating: 4.5,
  },
  {
    id: 102,
    name: "Wireless Earbuds",
    price: 89,
    img: "https://images.unsplash.com/photo-1585386959984-a41552231683?q=80&w=1600&auto=format&fit=crop",
    rating: 4.4,
  },
  {
    id: 103,
    name: "Protective Case",
    price: 29,
    img: "https://images.unsplash.com/photo-1616440537199-f3c6f1e5254d?q=80&w=1600&auto=format&fit=crop",
    rating: 4.3,
  },
];

function ProductCard({ item }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-zinc-900">{item.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(item.rating) ? "fill-amber-400" : "opacity-30"}`} />
          ))}
          <span className="ml-2 text-xs text-zinc-500">{item.rating.toFixed(1)}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold">${item.price}</span>
          <button className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div id="phones" className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Featured Phones</h2>
          <p className="mt-1 text-sm text-zinc-600">Top-rated models with in-store open-box verification.</p>
        </div>
        <a href="#collection" className="text-sm font-semibold text-blue-600 hover:text-blue-700">Pick up with open‑box check →</a>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {phones.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
      </div>

      <div id="accessories" className="mt-14 mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Must‑have Accessories</h2>
        <p className="mt-1 text-sm text-zinc-600">Chargers, cases, and audio picks that pair perfectly.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {accessories.map((a) => (
          <ProductCard key={a.id} item={a} />
        ))}
      </div>
    </section>
  );
}
