'use client';

import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section className="bg-[#FAFAFA] py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_1.25fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
          <div className="relative overflow-hidden rounded-[32px] border border-[#E5E5E5] bg-[#F3F3F3] p-4 shadow-soft">
            <div className="aspect-[4/5] rounded-[26px] bg-[radial-gradient(circle_at_top,_#f5d0fe,_#f7f7f7_35%,_#dbeafe_100%)]" />
          </div>
          <div className="absolute -bottom-4 left-6 rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#111111] shadow-sm">
            Desenvolvimento sob medida
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="soft-pill mb-6">QUEM SOMOS</div>
          <h2 className="max-w-xl text-4xl font-black tracking-[0.08em] text-[#111111] sm:text-5xl">
            A <span className="gradient-text">ScaleOps</span> transforma operação em vantagem competitiva.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-[#4C4C4C]">
            <p>
              Somos uma empresa de desenvolvimento de sistemas sob medida, focada em conectar <strong className="text-[#111111]">processos, pessoas e tecnologia</strong> para criar soluções que realmente funcionam no dia a dia do negócio.
            </p>
            <p>
              Ajudamos empresas a automatizar tarefas, centralizar dados, otimizar decisões e entregar experiências digitais mais rápidas, seguras e escaláveis — sem depender de ferramentas genéricas que travam o crescimento.
            </p>
          </div>

          <p className="mt-8 text-xl font-medium text-[#111111]">Não criamos software só para parecer moderno. Criamos software para gerar resultado real.</p>
        </motion.div>
      </div>
    </section>
  );
}
