'use client';

import { motion } from 'framer-motion';
import { BadgeCheck, BriefcaseBusiness, Cpu, TimerReset } from 'lucide-react';

const items = [
  { icon: BadgeCheck, title: 'Processo profissional', description: 'Estrutura clara, documentação e organização em cada etapa do projeto.' },
  { icon: TimerReset, title: 'Prazo e comunicação', description: 'Cronograma transparente, acompanhamentos objetivos e decisões sem ruído.' },
  { icon: Cpu, title: 'Tecnologia de ponta', description: 'Stack moderna, arquitetura pensada para performance e escalabilidade.' },
  { icon: BriefcaseBusiness, title: 'Entrega com impacto', description: 'Foco em soluções que melhoram operação, produtividade e controle do negócio.' },
];

export function CredibilitySection() {
  return (
    <section className="bg-[#0A0A0A] py-28 text-white">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <div className="soft-pill border-white/20 bg-white/5 text-white/75">Credibilidade</div>
          <h2 className="mt-5 text-4xl font-black tracking-[0.08em] sm:text-5xl">
            Tecnologia que combina <span className="gradient-text">clareza, segurança e resultado</span>.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map(({ icon: Icon, title, description }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                <Icon size={20} />
              </div>
              <h3 className="text-xl font-bold tracking-[-0.04em] text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#D5D5D5]">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
