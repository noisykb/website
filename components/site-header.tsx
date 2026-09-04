import { HardLink as Link } from '@/components/hard-link';

const navigation = [
  { href: '/le-club', label: 'Le club' },
  { href: '/le-kin-ball', label: 'Le Kin-Ball' },
  { href: '/videos', label: 'Vidéos' },
  { href: '/actualites', label: 'Actualités' },
];

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/15 text-white">
      <div className="site-shell flex h-20 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3 text-white no-underline" aria-label="Noisy Kin-Ball — Accueil">
          <img src="/brand/noisy-kin-ball-mark-white.png" alt="" width="52" height="52" className="size-12 object-contain" />
          <span className="hidden text-sm font-extrabold uppercase tracking-[0.08em] sm:block">Noisy Kin-Ball</span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-extrabold uppercase tracking-[0.065em] text-white/85 no-underline transition-colors hover:text-white">{item.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/initiation" className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white no-underline transition-colors hover:bg-white hover:text-[#09090d]">Essayer</Link>
          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-full border border-white/30 px-4 py-2 text-sm font-bold [&::-webkit-details-marker]:hidden">Menu</summary>
            <nav className="absolute right-0 top-12 grid min-w-56 overflow-hidden rounded-2xl bg-white p-2 text-[#09090d] shadow-2xl" aria-label="Navigation mobile">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-sm font-bold no-underline hover:bg-[#f1ebf8]">{item.label}</Link>
              ))}
              <Link href="/initiation" className="rounded-xl px-4 py-3 text-sm font-bold no-underline hover:bg-[#f1ebf8]">Nous rejoindre</Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
