
export default function Site() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-400/30">
      <style>{`
        :root{ --accent:#00bf7f; }
        .accent{ color: var(--accent) }
        .bg-accent{ background: var(--accent) }
        .ring-accent{ --tw-ring-color: var(--accent) }
        .shadow-soft{ box-shadow: 0 10px 30px rgba(0,0,0,.35) }
        .accent-gradient{ background:linear-gradient(90deg,#00bf7f 0%,#35f1c5 60%,#00bf7f 100%); -webkit-background-clip:text; background-clip:text; color:transparent; }
        .title-glow{ text-shadow:0 8px 40px rgba(0,191,127,.15) }
        .street-vignette{ box-shadow: inset 0 0 160px rgba(0,0,0,.8) }
        .spray svg path{ filter: drop-shadow(0 6px 18px rgba(0,191,127,.18)); }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-segunda-pele.png" alt="Segunda Pele Tattoo" className="h-8 w-auto" />
            <span className="uppercase tracking-widest text-xs text-white/60">Ribeirão da Ilha • Florianópolis</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#portfolio" className="opacity-80 hover:opacity-100">Portfólio</a>
            <a href="#projetos" className="opacity-80 hover:opacity-100">Projetos</a>
            <a href="#agenda" className="opacity-80 hover:opacity-100">Agenda</a>
            <a href="#sobre" className="opacity-80 hover:opacity-100">Sobre</a>
            <a href="#produtos" className="opacity-80 hover:opacity-100">Produtos</a>
            <a href="#contato" className="opacity-80 hover:opacity-100">Contato</a>
          </nav>
          <a href="#contato" className="hidden md:inline-flex bg-accent text-black px-4 py-2 rounded-xl font-semibold shadow-soft hover:opacity-90 transition">Agendar</a>
        </div>
      </header>

      {/* HERO street */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/street-bg.jpg')] bg-cover bg-center opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00bf7f1a] via-transparent to-[#00bf7f0d] mix-blend-lighten" />
          <div className="absolute inset-0 street-vignette" />
          <div className="absolute inset-0 opacity-[0.06]">
            <svg viewBox="0 0 800 400" className="w-full h-full">
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff"/>
                  <stop offset="100%" stopColor="#00bf7f"/>
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#g2)" strokeWidth="0.6">
                {Array.from({length:80}).map((_,i)=> (
                  <path key={i} d={\`M-50 \${i*6} C \${150+i*3} \${50+i*4}, \${450-i*2} \${80+i*3}, 900 \${140+i*4}\`} />
                ))}
              </g>
            </svg>
          </div>
          <div className="spray absolute left-6 top-8 opacity-30">
            <svg width="160" height="120" viewBox="0 0 200 150" fill="none">
              <path d="M10 110 Q 60 20, 140 100" stroke="#00bf7f" strokeWidth="6" strokeLinecap="round"/>
              <circle cx="150" cy="90" r="3" fill="#00bf7f"/>
              <circle cx="160" cy="82" r="2" fill="#00bf7f"/>
            </svg>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-28 md:py-36 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight title-glow">
            Arte como <span className="accent-gradient">segunda pele</span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/70 text-lg">
            Estúdio imerso na natureza, reservado e focado em experiência. Coberturas, fluidez líquida, geometria, realismo e peças autorais do Marcelo Costa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className="bg-accent text-black px-5 py-3 rounded-xl font-semibold shadow-soft hover:opacity-90 transition">Ver portfólio</a>
            <a href="#projetos" className="px-5 py-3 rounded-xl border border-white/10 hover:border-white/25 transition">Projetos disponíveis</a>
          </div>
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Portfólio</h2>
            <p className="text-white/60 mt-2">Seleção de trabalhos recentes. Clique para ampliar.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {['Cobertura','Fluidez líquida','Geometria','Realismo','Pontilhismo','Todos'].map(x=> (
              <button key={x} className="px-3 py-1.5 rounded-full border border-white/10 text-sm hover:border-white/25">{x}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-8">
          {Array.from({length:12}).map((_,i)=> (
            <a key={i} href="#" className="group relative overflow-hidden rounded-xl border border-white/10">
              <img src={\`https://picsum.photos/seed/sp-\${i}/800/1000\`} alt="Trabalho" className="w-full h-full object-cover group-hover:scale-105 transition"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition"/>
              <span className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded-full bg-black/60 border border-white/10">Ver detalhe</span>
            </a>
          ))}
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/5">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Projetos disponíveis</h2>
          <a href="#contato" className="hidden md:inline text-sm opacity-80 hover:opacity-100">Quer um projeto autoral?</a>
        </div>
        <p className="text-white/60 mt-2">Peças únicas, prontas pra virar pele. Reservas por WhatsApp.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10">
              <img src={\`https://picsum.photos/seed/proj-\${i}/1000/800\`} alt="Projeto disponível" className="h-56 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Projeto #{i+1}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10">Suminagashi</span>
                </div>
                <p className="text-sm text-white/60 mt-1">Tamanho sugerido: costas ou braço. Exclusivo.</p>
                <div className="flex gap-2 mt-4">
                  <a href="https://wa.me/5548998214444?text=Quero%20reservar%20o%20Projeto" className="bg-accent text-black px-4 py-2 rounded-xl font-semibold hover:opacity-90 transition">Reservar</a>
                  <button className="px-4 py-2 rounded-xl border border-white/10 hover:border-white/25">Ver mais</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-bold">Agenda e eventos</h2>
        <p className="text-white/60 mt-2">Últimos horários do mês e workshops no estúdio.</p>
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/10">
          <iframe title="Agenda" src="https://calendar.google.com/calendar/embed?hl=pt_BR" className="w-full h-[520px]"/>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Sobre o estúdio</h2>
            <p className="text-white/70 mt-3 leading-relaxed">
              A Segunda Pele Tattoo nasceu para unir técnica e espírito criativo. No nosso espaço, em meio ao verde do Ribeirão da Ilha, tudo é pensado para uma experiência reservada, confortável e imersiva. Marcelo Costa, há 23 anos no mercado, é referência em coberturas e em linguagens como fluidez líquida (suminagashi), linhas orgânicas, geometria, realismo e pontilhismo.
            </p>
            <ul className="mt-6 space-y-2 text-white/70 text-sm">
              <li>• Atendimento por agendamento</li>
              <li>• Projetos autorais e modulares</li>
              <li>• Processo freehand quando a peça pede</li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1513908957990-b2790723edbf?q=80&w=1600&auto=format&fit=crop" alt="Estúdio" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/5"/>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/5">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Produtos digitais</h2>
          <span className="text-sm text-white/60">Baixe e use no seu fluxo de trabalho</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {[
            {title:'TAT2PRICE',desc:'Sistema de automação de orçamento para tatuadores. Calcule por hora, tamanho e extras.',href:'https://tat2price.com/'},
            {title:'Organic Brush Pack',desc:'13 pincéis autorais de fluidez líquida para Procreate.',href:'#'},
            {title:'Templates & Mockups',desc:'Kits para apresentar projetos modulares ao cliente.',href:'#'},
          ].map((p,i)=> (
            <a key={i} href={p.href} className="group rounded-2xl border border-white/10 p-5 hover:border-white/25 transition">
              <div className="h-40 rounded-xl bg-gradient-to-br from-white/5 to-transparent mb-4"/>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-white/60 mt-1">{p.desc}</p>
              <span className="inline-flex items-center gap-2 mt-4 text-sm accent">Conhecer
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contato</h2>
            <p className="text-white/70 mt-2">Fala com a gente pra orçamento, agenda e projetos.</p>
            <form className="mt-6 space-y-3">
              <input type="text" placeholder="Seu nome" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring ring-accent"/>
              <input type="email" placeholder="Seu e-mail" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring ring-accent"/>
              <textarea placeholder="Mensagem" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring ring-accent"/>
              <div className="flex gap-3">
                <button type="button" className="bg-accent text-black px-5 py-3 rounded-xl font-semibold hover:opacity-90">Enviar</button>
                <a href="https://wa.me/5548998214444" className="px-5 py-3 rounded-xl border border-white/10 hover:border-white/25">Falar no Whats</a>
              </div>
            </form>
            <div className="mt-6 flex gap-4 text-sm text-white/60">
              <a href="https://instagram.com" className="hover:text-white">Instagram</a>
              <a href="https://tiktok.com" className="hover:text-white">TikTok</a>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Mapa do estúdio"
                src="https://www.google.com/maps?q=Ribeir%C3%A3o%20da%20Ilha%2C%20Florian%C3%B3polis&output=embed"
                className="w-full h-[420px]"
              />
            </div>
            <p className="text-white/60 text-sm mt-3">Endereço exato e instruções de chegada serão enviados na confirmação de agendamento.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logooo.png" alt="Segunda Pele" className="h-6 w-auto"/>
            <span className="text-sm text-white/60">© {new Date().getFullYear()} Segunda Pele Tattoo</span>
          </div>
          <div className="text-sm text-white/60">Arte que vira pele • Floripa</div>
        </div>
      </footer>
    </div>
  )
}
