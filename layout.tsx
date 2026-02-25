import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";

export const metadata: Metadata = {
  title: "Aurora Threads | Modern Fashion",
  description: "Modern ecommerce demo for men and women clothing."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 text-lg font-bold">
                    A
                  </span>
                  <div>
                    <div className="text-sm font-semibold tracking-tight">
                      Aurora Threads
                    </div>
                    <div className="text-xs text-slate-400">
                      Everyday style, elevated.
                    </div>
                  </div>
                </div>
                <nav className="flex items-center gap-6 text-sm font-medium">
                  <a
                    href="/"
                    className="text-slate-100 transition hover:text-pink-400"
                  >
                    Home
                  </a>
                  <a
                    href="/men"
                    className="text-slate-300 transition hover:text-pink-400"
                  >
                    Men
                  </a>
                  <a
                    href="/women"
                    className="text-slate-300 transition hover:text-pink-400"
                  >
                    Women
                  </a>
                  <a
                    href="/cart"
                    className="text-slate-300 transition hover:text-pink-400"
                  >
                    Cart
                  </a>
                </nav>
              </div>
            </header>
            <main className="flex-1">
              <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
            </main>
            <footer className="border-t border-slate-800 bg-slate-950/80">
              <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  © {new Date().getFullYear()} Aurora Threads. Demo store only.
                </p>
                <p className="text-slate-500">
                  Built with Next.js 15 & Tailwind CSS.
                </p>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
