import Link from 'next/link';

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] p-8 text-white">
      <div className="mx-auto max-w-5xl rounded-[28px] border border-white/10 bg-white/5 p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#CFCFCF]">Painel admin</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.07em]">Dashboard</h1>
          </div>
          <Link href="/" className="rounded-full border border-white/20 px-4 py-2 text-sm text-white">Ver site</Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {['Projetos', 'Clientes', 'Pacotes', 'Configurações'].map((item) => (
            <div key={item} className="rounded-[22px] border border-white/10 bg-[#111111] p-5">
              <p className="text-sm text-[#D5D5D5]">{item}</p>
              <p className="mt-4 text-3xl font-black tracking-[-0.05em]">[SUBSTITUIR]</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-[#111111] p-6">
          <h2 className="text-xl font-bold">Gestão de conteúdos</h2>
          <p className="mt-3 text-sm leading-7 text-[#D5D5D5]">
            Este painel foi preparado para receber CRUD de projetos, clientes, preços, estatísticas e metas do site. Conecte ao Supabase para ativar autenticação e persistência real.
          </p>
        </div>
      </div>
    </main>
  );
}
