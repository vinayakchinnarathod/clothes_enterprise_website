import { getProductsByCategory } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function HomePage() {
  const featured = getProductsByCategory();

  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-pink-300 ring-1 ring-pink-500/40">
            <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            New season drop — Men & Women
          </span>
          <div className="space-y-3">
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Curated looks for{" "}
              <span className="bg-gradient-to-tr from-pink-400 to-violet-400 bg-clip-text text-transparent">
                every day & every body.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-slate-400 md:text-base">
              Explore modern essentials for men and women. Built for comfort,
              designed to stand out. This is a demo ecommerce store — feel free
              to explore the layouts and interactions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/women"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-pink-500/30 transition hover:from-pink-400 hover:to-violet-400"
            >
              Shop women
            </a>
            <a
              href="/men"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-pink-400/80 hover:text-pink-200"
            >
              Shop men
            </a>
          </div>
          <dl className="grid grid-cols-3 gap-4 text-xs text-slate-400 sm:max-w-md">
            <div>
              <dt className="font-medium text-slate-200">Free shipping</dt>
              <dd>On all demo orders over ₹999.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">Easy returns</dt>
              <dd>30-day hassle-free policy.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-200">Made to last</dt>
              <dd>Premium fabrics & timeless fits.</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.18),_transparent_55%)]" />
          <div className="grid grid-cols-2 gap-4">
            {featured.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
              Featured for you
            </h2>
            <p className="text-xs text-slate-400 sm:text-sm">
              A mix of men&apos;s and women&apos;s bestsellers to get you
              started.
            </p>
          </div>
          <div className="flex gap-2 text-xs">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-300">
              Men & Women
            </span>
            <span className="hidden rounded-full border border-slate-700 px-3 py-1 text-slate-400 sm:inline">
              Smart casual • Minimal street • Office-ready
            </span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
