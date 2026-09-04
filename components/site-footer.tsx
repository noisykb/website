import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-[#061522] py-12 text-white">
      <div className="site-shell grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-2xl font-black tracking-[-0.04em]">Noisy Kin-Ball</p>
          <p className="mt-3 max-w-sm text-sm text-white/60">Le premier club francilien de Kin-Ball, à Noisy-le-Grand depuis 2013.</p>
        </div>
        <div className="text-sm">
          <p className="font-bold text-[#dfff45]">Nous retrouver</p>
          <p className="mt-3 text-white/70">Gymnase Marcel Cerdan<br />Rue Jules Ferry<br />93160 Noisy-le-Grand</p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm">
          <p className="font-bold text-[#dfff45]">En savoir plus</p>
          <Link href="/nous-rejoindre" className="mt-1 text-white/70 hover:text-white">Rejoindre le club</Link>
          <Link href="/nous-contacter" className="text-white/70 hover:text-white">Nous contacter</Link>
          <Link href="/mentions-legales" className="text-white/70 hover:text-white">Mentions légales</Link>
        </div>
      </div>
    </footer>
  );
}
