import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contato" className="bg-[#FAFAFA] pb-28">
      <div className="section-shell">
        <div className="rounded-[32px] border border-[#E5E5E5] bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.15),_rgba(250,250,250,1)_45%,_rgba(253,186,116,0.08)_100%)] p-8 shadow-soft sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="soft-pill mb-5">Contato</div>
              <h2 className="max-w-xl text-4xl font-black tracking-[0.08em] text-[#111111] sm:text-5xl">
                Quer transformar sua operação em <span className="gradient-text">um diferencial real?</span>
              </h2>
            </div>
            <Button className="w-full rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] lg:w-auto">
              Falar com a ScaleOps <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
