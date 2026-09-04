import { SiteHeader } from '@/components/site-header';

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#11152b] pb-16 pt-36 text-white md:pb-24 md:pt-44">
      <SiteHeader />
      <div aria-hidden="true" className="absolute -right-24 -top-36 size-[28rem] rounded-full border-[4.5rem] border-[#7412b9]/85" />
      <div className="site-shell relative z-10">
        <p className="eyebrow text-[#cba6ff]">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] md:text-8xl">{title}</h1>
        {intro ? <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{intro}</p> : null}
      </div>
    </section>
  );
}
