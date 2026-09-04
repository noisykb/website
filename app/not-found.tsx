import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#11152b] px-5 text-center text-white">
      <div>
        <p className="font-mono text-sm font-bold text-[#cba6ff]">ERREUR 404</p>
        <h1 className="mt-5 text-6xl font-black tracking-[-0.07em] md:text-8xl">Hors terrain.</h1>
        <p className="mx-auto mt-5 max-w-md text-white/70">Cette page n’existe plus ou a changé d’adresse.</p>
        <Link href="/" className="button-primary mt-8">Retour à l’accueil</Link>
      </div>
    </main>
  );
}
