import { HardLink as Link } from '@/components/hard-link';

export function SiteFooter() {
  return (
    <footer className="bg-[#07070a] py-12 text-white">
      <div className="site-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img src="/brand/noisy-kin-ball-logo.png" alt="Noisy Kin-Ball" width="92" height="87" className="h-20 w-auto object-contain" loading="lazy" />
          <p className="mt-4 max-w-sm text-sm text-white/60">Le premier club francilien de Kin-Ball, à Noisy-le-Grand depuis 2013.</p>
        </div>
        <div className="text-sm">
          <p className="font-bold text-[#cba6ff]">Nous retrouver</p>
          <p className="mt-3 text-white/70"><strong className="text-white/90">Gymnase Marcel Cerdan</strong><br />Lundi · 20h30–22h30<br />Rue Jules Ferry · Noisy-le-Grand</p>
          <p className="mt-4 text-white/70"><strong className="text-white/90">Gymnase Cabrini</strong><br />Jeudi · 20h30–22h30<br />20 rue du Docteur Sureau · Noisy-le-Grand</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm">
          <p className="font-bold text-[#cba6ff]">En savoir plus</p>
          <Link href="/initiation" className="mt-1 text-white/70 hover:text-white">Rejoindre le club</Link>
          <Link href="/nous-contacter" className="text-white/70 hover:text-white">Nous contacter</Link>
          <a href="https://www.instagram.com/noisy_kinball/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">Instagram ↗</a>
          <Link href="/mentions-legales" className="text-white/70 hover:text-white">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
