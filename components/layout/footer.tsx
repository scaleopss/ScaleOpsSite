import Link from 'next/link';

const menuLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Cases', href: '#portfolio' },
  { label: 'Valores', href: '#valores' },
];

const socialLinks = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'WhatsApp', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="text-lg font-bold uppercase tracking-[0.22em]">ScaleOps</div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#CFCFCF]">
              Transformamos processos em plataformas, automações e sistemas que aumentam eficiência, produtividade e controle para empresas que querem crescer com inteligência.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DADADA]">Menu</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#D5D5D5]">
              {menuLinks.map((link) => (
                <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DADADA]">Redes</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#D5D5D5]">
              {socialLinks.map((link) => (
                <li key={link.label}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-[#B3B3B3]">
          © 2026 ScaleOps. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
