'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] p-6 text-white">
      <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[#111111] p-8 shadow-soft">
        <div className="mb-8 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-[#D5D5D5]">Admin</div>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.07em]">Entrar</h1>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#D5D5D5]">E-mail</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-[#8C8C8C]" placeholder="admin@exemplo.com" />
          </div>

          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#D5D5D5]">Senha</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-[#8C8C8C]" placeholder="••••••••" />
          </div>

          <Button className="w-full rounded-full px-5 py-3 text-xs uppercase tracking-[0.18em]">Entrar no painel</Button>
        </form>
      </div>
    </main>
  );
}
