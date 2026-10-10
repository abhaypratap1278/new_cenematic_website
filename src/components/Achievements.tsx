import { useRef } from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';
import { RailButtons } from './Rail';

function Laurel({ side }: { side: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 30 64" className={`h-14 w-auto text-[#d9b46a] ${side === 'r' ? '-scale-x-100' : ''}`} aria-hidden>
      <path d="M26 62C10 52 4 36 8 4" fill="none" stroke="currentColor" strokeWidth="1.4" />
      {[10, 18, 26, 34, 42, 50].map((y, i) => (
        <ellipse key={y} cx={i < 2 ? 9 : 8 + i * 1.6} cy={y} rx="5" ry="2.2" fill="currentColor" opacity="0.85" transform={`rotate(-40 ${8 + i * 1.6} ${y})`} />
      ))}
    </svg>
  );
}

export default function Achievements() {
  const rail = useRef<HTMLDivElement>(null);
  const issuers = Array.from(new Set(certifications.map((c) => c.issuer)));

  return (
    <>
      <SectionHeading kicker="Awards season" title="Top Moments" />

      <div className="gutter grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [perspective:1400px]">
        {achievements.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 50, rotateX: 18 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-8% 0px' }}
            transition={{ duration: 0.9, delay: i * 0.08, ease: EASE }}
          >
            <Tilt max={8} className="group h-full rounded-2xl">
              <article className="relative flex h-full min-h-[340px] flex-col items-center overflow-hidden rounded-2xl bg-[radial-gradient(120%_80%_at_50%_0%,#2a1f10,#0d0b08_60%,#07070a)] px-5 pb-6 pt-8 text-center ring-1 ring-[#d9b46a]/20 transition duration-500 group-hover:ring-[#d9b46a]/60">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9b46a]/70 to-transparent" />
                <div aria-hidden className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#d9b46a]/10 blur-3xl transition duration-700 group-hover:bg-[#d9b46a]/25" />
                <div className="relative flex items-center gap-1">
                  <Laurel side="l" />
                  <div className="px-1">
                    <p className="text-[9px] font-bold uppercase leading-tight tracking-[0.24em] text-[#d9b46a]">{a.laurel}</p>
                  </div>
                  <Laurel side="r" />
                </div>
                <h3 className="relative mt-6 font-display text-[2.1rem] leading-[0.92] tracking-wide text-bone">{a.title}</h3>
                <p className="relative mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9b46a]">{a.org}</p>
                <p className="relative mt-4 text-[13px] leading-relaxed text-bone/70">{a.detail}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="link"
                    className="relative mt-auto inline-flex min-h-10 items-center gap-1 pt-5 text-xs font-semibold tracking-wide text-bone underline decoration-[#d9b46a]/60 underline-offset-4 hover:decoration-[#d9b46a]"
                  >
                    View certificate ↗
                  </a>
                )}
              </article>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Original event and project photo gallery */}
      <div className="gutter mt-16">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2">Behind the milestones</p>
            <h3 className="mt-2 font-display text-3xl text-bone sm:text-4xl">Photo Archive</h3>
          </div>
          <p className="text-xs text-smoke">Original event and project photos</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[
            { src: '/portfolio/images/iitb1.jpg', label: 'IIT Bombay · Techfest' },
            { src: '/portfolio/images/iitb2.jpg', label: 'IIT Bombay · Techfest' },
            { src: '/portfolio/images/iitb3.jpg', label: 'IIT Bombay · Techfest' },
            { src: '/portfolio/images/iitb4.jpg', label: 'IIT Bombay · Techfest' },
            { src: '/portfolio/images/iiitm1.jpg', label: 'Tech for Seva · IIITM' },
            { src: '/portfolio/images/iiitm2.jpg', label: 'Tech for Seva · IIITM' },
            { src: '/portfolio/images/iiitm3.jpg', label: 'Tech for Seva · IIITM' },
            { src: '/portfolio/images/iiitm4.jpg', label: 'Tech for Seva · IIITM' },
            { src: '/portfolio/images/techno1.jpg', label: 'Technoparv · Project Exhibition' },
            { src: '/portfolio/images/techno2.jpg', label: 'Technoparv · Project Exhibition' },
            { src: '/portfolio/images/techno3.jpg', label: 'Technoparv · Project Exhibition' },
            { src: '/portfolio/images/techno4.jpg', label: 'Technoparv · Project Exhibition' },
            { src: '/portfolio/images/techno5.jpg', label: 'Technoparv · Project Exhibition' },
            { src: '/portfolio/images/techno6.jpg', label: 'Technoparv · Project Exhibition' },
            { src: '/portfolio/images/photo1.jpg', label: 'Portfolio Photo' },
            { src: '/portfolio/images/photo2.jpg', label: 'Portfolio Photo' },
            { src: '/portfolio/images/photo3.jpg', label: 'Portfolio Photo' },
            { src: '/portfolio/images/photo4.jpg', label: 'Portfolio Photo' },
            { src: '/portfolio/images/photo5.jpg', label: 'Portfolio Photo' },
            { src: '/portfolio/images/photo7.jpg', label: 'Portfolio Photo' },
            { src: '/portfolio/images/photo8.jpg', label: 'Portfolio Photo' },
            { src: '/portfolio/images/photo9.jpg', label: 'Portfolio Photo' },
            { src: '/portfolio/images/photo10.jpg', label: 'Portfolio Photo' },
          ].map((photo, i) => (
            <motion.figure key={photo.src} className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-ink-2 ring-1 ring-white/10" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (i % 4) * 0.04 }}>
              <img src={photo.src} alt={photo.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-3 pb-3 pt-8 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90">{photo.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>

      {/* certifications rail */}
      <div className="mt-16">
        <div className="gutter mb-2 flex flex-wrap items-end justify-between gap-2">
          <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">
            Certified <span className="text-mist">· {certifications.length} credentials</span>
          </h3>
          <p className="text-xs text-smoke">{issuers.join(' · ')}</p>
        </div>
        <div className="group/rail relative">
          <div ref={rail} className="rail gutter flex snap-x gap-3 overflow-x-auto py-5">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                className="group relative flex w-[230px] shrink-0 snap-start flex-col justify-between rounded-xl bg-ink-2 p-4 ring-1 ring-white/10 transition hover:-translate-y-1 hover:ring-white/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.04, ease: EASE }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-crimson-2">{c.issuer}</span>
                  {c.link ? <a href={c.link} target="_blank" rel="noreferrer" data-cursor="link" aria-label={`Open ${c.name}`} className="text-sm text-smoke transition hover:text-bone">↗</a> : <span className="text-[9px] text-smoke">DETAILS</span>}
                </div>
                <p className="mt-6 text-sm font-medium leading-snug text-bone">{c.name}</p>
              </motion.div>
            ))}
          </div>
          <RailButtons rail={rail} />
        </div>
      </div>
    </>
  );
}
