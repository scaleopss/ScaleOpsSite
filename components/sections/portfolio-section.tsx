'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { category: 'SaaS', title: 'FlowControl', subtitle: 'Plataforma de gestão operacional', accent: 'from-violet-500 via-fuchsia-500 to-pink-500' },
  { category: 'ERP', title: 'Nexa Core', subtitle: 'Sistema de operação e rastreio', accent: 'from-blue-500 via-indigo-500 to-violet-500' },
  { category: 'AUTOMAÇÃO', title: 'Delta Pulse', subtitle: 'Automação de processos internos', accent: 'from-orange-400 via-pink-500 to-rose-500' },
  { category: 'DASHBOARD', title: 'Metria Ops', subtitle: 'Painel de dados e indicadores', accent: 'from-emerald-400 via-cyan-500 to-blue-500' },
  { category: 'INTEGRAÇÃO', title: 'Orbita One', subtitle: 'Integração entre sistemas e equipes', accent: 'from-slate-700 via-slate-900 to-black' },
  { category: 'PLATAFORMA', title: 'Lume CRM', subtitle: 'CRM e gestão comercial em uma visão', accent: 'from-yellow-400 via-orange-500 to-rose-500' },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-[#FAFAFA] py-28">
      <div className="section-shell">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="soft-pill mb-4">Cases</div>
            <h2 className="text-4xl font-black tracking-[0.08em] text-[#111111] sm:text-5xl">Soluções que geram eficiência, controle e crescimento.</h2>
          </div>
          <Link href="#" className="hidden items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-[#111111] md:inline-flex">
            Ver todos os cases <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className="group relative overflow-hidden rounded-[26px] border border-[#E5E5E5] bg-white shadow-sm">
              <div className="relative h-80 overflow-hidden">
                <div className={`h-full w-full bg-gradient-to-br ${project.accent} transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,_rgba(17,17,17,0.72),_rgba(17,17,17,0.05)_55%,_rgba(17,17,17,0.05))]" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                  {project.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="text-2xl font-black tracking-[0.08em]">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{project.subtitle}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
