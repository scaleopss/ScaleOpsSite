'use client';

import { motion } from 'framer-motion';

export function ToolSection() {
  return (
    <section id="solucoes" className="bg-[#0A0A0A] py-28 text-white">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="soft-pill border-white/20 bg-white/5 text-white/80">Nossa stack</div>
          <h2 className="mt-6 text-4xl font-black tracking-[0.08em] sm:text-5xl">
            JavaScript, TypeScript, CSS, SQL e <span className="gradient-text">arquitetura sólida</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#D5D5D5]">
            Trabalhamos com a melhor combinação entre agilidade, integração e escalabilidade para transformar ideias em produtos digitais confiáveis, com performance e atuação real no negócio.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-[560px]">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#171717] p-5 shadow-soft">
            <div className="rounded-[20px] border border-white/10 bg-[#111111] p-4">
              <div className="mb-4 flex items-center gap-2">
                {[1, 2, 3].map((item) => (
                  <span key={item} className="h-2.5 w-2.5 rounded-full bg-white/30" />
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[#C9C9C9]">
                  <span>Timeline</span>
                  <span>00:42</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div initial={{ width: 0 }} animate={{ width: '72%' }} transition={{ repeat: Infinity, repeatType: 'mirror', duration: 3.2, ease: 'linear' }} className="h-full rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400" />
                </div>
                <div className="grid gap-3 md:grid-cols-[1.5fr_0.8fr]">
                  <div className="rounded-2xl border border-white/10 bg-[#1E1E1E] p-4">
                    <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#D5D5D5]">
                      <span>Cena 04</span>
                      <span>HD</span>
                    </div>
                    <div className="h-40 rounded-2xl bg-[radial-gradient(circle_at_top,_#d8b4fe,_#1e1b4b_35%,_#111827_100%)]" />
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-[#1E1E1E] p-3">
                      <div className="h-16 rounded-xl bg-[linear-gradient(135deg,_#f9a8d4,_#c084fc)]" />
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#1E1E1E] p-3">
                      <div className="h-16 rounded-xl bg-[linear-gradient(135deg,_#7dd3fc,_#4f46e5)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div animate={{ x: [0, 180, 280, 110, 0], y: [0, 20, 10, 25, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }} className="absolute left-4 top-16 h-4 w-4 rounded-full bg-gradient-to-r from-violet-500 to-orange-400 shadow-[0_0_20px_rgba(236,72,153,0.8)]" />
        </motion.div>
      </div>
    </section>
  );
}
