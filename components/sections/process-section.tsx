'use client';

import { motion } from 'framer-motion';
import { Compass, Layers3, Sparkles, Wand2 } from 'lucide-react';

const steps = [
  { icon: Compass, title: 'Diagnóstico de operação', description: 'Entendemos processos, gargalos, metas e oportunidades antes de propor qualquer solução.' },
  { icon: Layers3, title: 'Arquitetura e produto', description: 'Mapeamos fluxo, regras de negócio e integrações para construir uma base tecnológica sólida.' },
  { icon: Wand2, title: 'Desenvolvimento em sprints', description: 'Construímos em etapas com validação contínua, segurança e foco em entregas com valor.' },
  { icon: Sparkles, title: 'Implantação + suporte', description: 'Acompanhamos o lançamento, ajustes e evolução da solução para garantir performance real.' },
];

export function ProcessSection() {
  return (
    <section id="processo" className="bg-[#FAFAFA] py-28">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <div className="soft-pill mx-auto mb-5">Como trabalhamos</div>
          <h2 className="text-4xl font-black tracking-[0.08em] text-[#111111] sm:text-5xl">
            Processo direto, <span className="gradient-text">estratégico e eficiente</span>
          </h2>
          <p className="mt-5 text-base leading-8 text-[#5B5B5B]">
            Nosso método foi desenhado para reduzir ruído, aumentar clareza e entregar soluções que apoiam o crescimento do negócio com segurança.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="card-surface p-6">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-white shadow-soft">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-[0.06em] text-[#111111]">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5E5E5E]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
