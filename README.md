# ScaleOpsSite

Site de portfólio pessoal para motion design, com landing page pública e painel administrativo privado para gerenciar projetos, clientes, pacotes e métricas.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui-inspired components
- Supabase Auth + Postgres + Storage
- Vercel deployment

## Estrutura principal

- app/
  - page.tsx: landing page pública
  - admin/page.tsx: painel administrativo inicial
- components/
  - layout/: navbar e footer
  - sections/: todas as seções do site
  - ui/: botão base
- lib/: utilitários

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Crie o arquivo `.env.local` com base no `.env.example`:

```bash
cp .env.example .env.local
```

3. Preencha as variáveis:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anon
SUPABASE_SERVICE_ROLE_KEY=sua-chave-service-role
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

4. Inicie o projeto:

```bash
npm run dev
```

5. Acesse:

- Site público: http://localhost:3000
- Admin: http://localhost:3000/admin

## Configuração do Supabase

### 1) Crie o projeto

Acesse o Supabase e crie um novo projeto.

### 2) Ative a autenticação

No painel do Supabase:

- Authentication > Providers
- Ative Email/password
- Crie o usuário principal do admin

### 3) Configure o Storage

Crie os buckets:

- project-covers
- project-gallery
- client-logos

### 4) Tabelas sugeridas

```sql
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  category text,
  accent_color text,
  cover_url text,
  description_short text,
  description_long text,
  client text,
  external_link text,
  featured boolean default false,
  published boolean default true,
  created_at timestamptz default now()
);

create table public.client_logos (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  logo_url text not null,
  created_at timestamptz default now()
);

create table public.pricing_plans (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  price text,
  highlight boolean default false,
  items jsonb,
  created_at timestamptz default now()
);

create table public.hero_stats (
  id uuid default gen_random_uuid() primary key,
  label text not null,
  value text not null,
  suffix text,
  sort_order int default 0
);
```

### 5) Políticas de segurança

Configure regras para que:

- o site público possa ler projetos publicados
- o admin autenticado possa inserir, editar e excluir itens
- o storage permita upload do admin para os buckets

## Deploy no Vercel

1. Conecte o repositório no Vercel.
2. Defina as variáveis de ambiente no projeto.
3. Faça o deploy.

## Observações

- Os textos marcados com `[SUBSTITUIR]` são placeholders para você preencher com seus dados reais.
- A landing page já está implementada com visual premium dark/light e animações.
- O painel admin está estruturado como base para CRUD em Supabase e pode ser expandido com autenticação, formulários e upload real.
