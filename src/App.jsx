import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import SelfCollection from "./components/SelfCollection";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <ProductGrid />
      <SelfCollection />
      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-zinc-600 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p>© {new Date().getFullYear()} Volt Mobile. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#phones" className="hover:text-blue-600">Phones</a>
              <a href="#accessories" className="hover:text-blue-600">Accessories</a>
              <a href="#collection" className="hover:text-blue-600">Self‑Collection</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
