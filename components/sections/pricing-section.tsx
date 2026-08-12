'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Diagnóstico',
    tag: 'Estratégia',
    price: 'R$ 2.900',
    highlight: false,
    items: ['Análise de processos', 'Arquitetura inicial', 'Roadmap de implementação'],
  },
  {
    name: 'Scale',
    tag: 'Popular',
    price: 'R$ 7.800',
    highlight: true,
    items: ['MVP funcional', 'Integrações essenciais', 'Acompanhamento e ajustes'],
  },
  {
    name: 'Operação',
    tag: 'Premium',
    price: 'R$ 16.500',
    highlight: false,
    items: ['Sistema completo', 'Fluxos customizados', 'Suporte e evolução contínua'],
  },
];

export function PricingSection() {
  return (
    <section id="valores" className="bg-[#FAFAFA] py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <div className="soft-pill mx-auto mb-4">Valores</div>
          <h2 className="text-4xl font-black tracking-[0.08em] text-[#111111] sm:text-5xl">Soluções para empresas que precisam evoluir com consistência.</h2>
          <p className="mt-5 text-base leading-8 text-[#5B5B5B]">Estratégia clara, tecnologia sólida e desenvolvimento feito para escalar sua operação.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article key={plan.name} layout initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className={`relative rounded-[28px] border p-7 ${plan.highlight ? 'border-violet-400 bg-[#111111] text-white shadow-soft' : 'border-[#E5E5E5] bg-white text-[#111111]'}`}>
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 via-pink-500 to-orange-400 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  <span className="inline-flex items-center gap-1"><Star size={12} className="fill-current" /> Popular</span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold tracking-[-0.05em]">{plan.name}</h3>
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${plan.highlight ? 'bg-white/10 text-white/80' : 'bg-[#F3F3F3] text-[#3D3D3D]'}`}>
                  {plan.tag}
                </span>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-4xl font-black tracking-[-0.06em]">{plan.price}</span>
                <span className={`pb-2 text-sm ${plan.highlight ? 'text-white/70' : 'text-[#666]'}`}>/ projeto</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6">
                    <span className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ${plan.highlight ? 'bg-white/10 text-white' : 'bg-[#F3F3F3] text-[#111111]'}`}>
                      <Check size={12} />
                    </span>
                    <span className={plan.highlight ? 'text-white/80' : 'text-[#4E4E4E]'}>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.highlight ? 'default' : 'outline'} className="mt-8 w-full rounded-full px-5 py-3 text-xs uppercase tracking-[0.18em]">
                Solicitar proposta
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
