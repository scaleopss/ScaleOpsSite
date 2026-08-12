'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Cases', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(17,17,17,0.04)] bg-[rgba(250,250,250,0.7)] backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="#inicio" className="text-lg font-black uppercase tracking-[0.14em] text-[#111111]" style={{ letterSpacing: '0.14em' }}>
          <span className="inline-block transform-gpu">ScaleOps</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm text-[#2A2A2A] transition hover:text-[#111111]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.16em]">Solicitar orçamento</Button>
        </div>

        <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E5E5] md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Abrir menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="border-t border-[#E5E5E5] bg-[#FAFAFA] p-4 md:hidden">
          <div className="section-shell flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="py-2 text-sm text-[#2A2A2A]" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 w-full rounded-full">Solicitar orçamento</Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
