'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: 'Sob medida', label: 'para sua operação' },
  { value: 'Automação', label: 'de processos' },
  { value: 'Gestão', label: 'mais centralizada' },
  { value: 'Suporte', label: 'próximo e direto' },
];

function AnimatedNumber({ value, suffix }: { value: string | number; suffix?: string }) {
  const display = typeof value === 'number' && value > 1000 ? value.toLocaleString() : value;

  return (
    <span className="text-4xl font-black tracking-[-0.06em] text-[#111111] lg:text-5xl">
      {display}
      {suffix ? <span className="ml-1 text-xl font-medium text-[#2A2A2A]">{suffix}</span> : null}
    </span>
  );
}

export function HeroSection() {
  return (
    <section id="inicio" className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden border-b border-[#E5E5E5] bg-[#FAFAFA] py-16 lg:py-20">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
          <div className="soft-pill mx-auto mb-6">
            Soluções sob medida para negócios que querem crescer
          </div>

          <h1 className="text-5xl font-black tracking-[0.06em] text-[#111111] sm:text-6xl lg:text-[78px] lg:leading-[0.9]">
            SISTEMAS QUE FAZEM SUA EMPRESA <span className="gradient-text">ESCALAR</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-[#4D4D4D] lg:text-lg">
            <strong className="font-semibold text-[#111111]">Desenvolvemos sistemas sob medida para organizar processos</strong>, <strong className="font-semibold text-[#111111]">automatizar tarefas</strong> e <strong className="font-semibold text-[#111111]">transformar operações manuais em fluxos mais simples e eficientes.</strong> 
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em]">
              Ver cases <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em]">
              <Play className="mr-2 h-4 w-4" />
              Falar no WhatsApp
            </Button>
          </div>

          <div className="mt-8 text-xs uppercase tracking-[0.18em] text-[#6C6C6C]">
            Menos trabalho manual. <span className="text-[#111111]">mais controle da operação.</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-12 overflow-hidden rounded-[28px] border border-[#E5E5E5] bg-white/60 py-4 shadow-[0_12px_30px_rgba(17,17,17,0.02)] backdrop-blur-[1px]"
        >
          <div className="grid items-center md:grid-cols-4 md:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center gap-3 px-6 py-4 text-center ${
                  index === 1 ? 'md:-ml-4 md:pr-8' : ''
                } ${index !== 0 ? 'md:border-l md:border-[#E5E5E5] md:pl-10' : ''}`}
              >
                <AnimatedNumber value={stat.value} />
                <span className="text-sm text-[#555555]">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
