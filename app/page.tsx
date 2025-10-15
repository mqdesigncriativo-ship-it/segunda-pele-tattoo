export default function Site() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-400/30">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logooo.png" alt="Símbolo Segunda Pele" className="h-8 w-auto" />
            <span className="uppercase tracking-widest text-xs text-white/80">
              Estúdio Segunda Pele Tattoo
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#portfolio" className="opacity-80 hover:opacity-100">Portfólio</a>
            <a href="#projetos" className="opacity-80 hover:opacity-100">Projetos</a>
            <a href="#sobre" className="opacity-80 hover:opacity-100">Sobre</a>
            <a href="#artista" className="opacity-80 hover:opacity-100">Artista</a>
            <a href="#produtos" className="opacity-80 hover:opacity-100">Produtos</a>
            <a href="#contato" className="opacity-80 hover:opacity-100">Contato</a>
          </nav>
          <a href="#contato" className="hidden md:inline-flex bg-[#00bf7f] text-black px-4 py-2 rounded-xl font-semibold shadow-[0_10px_30px_rgba(0,0,0,.35)] hover:opacity-90 transition">
            Agendar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-[url('/street-bg.jpg')] bg-cover bg-center opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00bf7f1a] via-transparent to-[#00bf7f0d] mix-blend-lighten" />
          <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,.8)]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-28 md:py-40 relative flex flex-col items-center text-center">
          <img src="/logo-segunda-pele.png" alt="Segunda Pele Tattoo" className="w-64 md:w-80 lg:w-[420px] h-auto opacity-95 mb-5" />
          <h1 className="font-[700] [font-family:'Bebas_Neue',system-ui] whitespace-nowrap text-5xl md:text-7xl lg:text-8xl leading-none drop-shadow-[0_8px_40px_rgba(0,191,127,.15)]">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#00bf7f, #35f1c5 60%, #00bf7f)]">
              Arte como segunda pele
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-white/70 text-lg">
            Estúdio imerso na natureza, reservado e focado em experiência. Coberturas, fluidez líquida, geometria, realismo e peças autorais do Marcelo Costa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#portfolio" className="bg-[#00bf7f] text-black px-5 py-3 rounded-xl font-semibold shadow-[0_10px_30px_rgba(0,0,0,.35)] hover:opacity-90 transition">
              Ver portfólio
            </a>
            <a href="#projetos" className="px-5 py-3 rounded-xl border border-white/10 hover:border-white/25 transition">
              Projetos disponíveis
            </a>
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
          {/* Placeholders — substitua pelas suas imagens */}
          {Array.from({length:12}).map((_,i)=> (
            <a key={i} href="#" className="group relative overflow-hidden rounded-xl border border-white/10">
              <img src={`https://picsum.photos/seed/sp-${i}/800/1000`} alt="Trabalho" className="w-full h-full object-cover group-hover:scale-105 transition"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition"/>
              <span className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded-full bg-black/60 border border-white/10">Ver detalhe</span>
            </a>
          ))}
        </div>
      </section>

      {/* PROJETOS DISPONÍVEIS */}
      <section id="projetos" className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/5">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Projetos disponíveis</h2>
          <a href="#contato" className="hidden md:inline text-sm opacity-80 hover:opacity-100">Quer um projeto autoral?</a>
        </div>
        <p className="text-white/60 mt-2">Peças únicas, prontas pra virar pele. Reservas por WhatsApp.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {Array.from({length:6}).map((_,i)=> (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10">
              <img src={`https://picsum.photos/seed/proj-${i}/1000/800`} alt="Projeto disponível" className="h-56 w-full object-cover" />
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

      {/* AGENDA / EVENTOS */}

      {/* SOBRE */}
      <section id="sobre" className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/5">
        <h2 className="text-2xl md:text-3xl font-bold">Sobre o estúdio</h2>
        <p className="text-white/70 mt-3 max-w-3xl">Nosso espaço fica no verde do Ribeirão da Ilha, pensado para uma experiência reservada, confortável e imersiva.</p>
        {/* Grid 2x2 de fotos do estúdio */}
        <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
          {[1,2,3,4].map(i=> (
            <div key={i} className="relative rounded-2xl overflow-hidden border border-white/10">
              <img src={`/studio/${i}.jpg`} alt={`Estúdio ${i}`} className="w-full h-48 md:h-60 lg:h-72 object-cover"/>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5"/>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUTOS DIGITAIS */}
      <section id="produtos" className="mx-auto max-w-7xl px-4 py-16 md:py-24 border-t border-white/5">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Produtos digitais</h2>
          <span className="text-sm text-white/60">Baixe e use no seu fluxo de trabalho</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {[
            {title:'TAT2PRICE',desc:'Sistema de automação de orçamento para tatuadores. Calcule por hora, tamanho e extras.',href:'https://tat2price.com/'},
            {title:'Organic Brush Pack',desc:'13 pincéis autorais de fluidez líquida para Procreate.',href:'#'}
          ].map((p,i)=> (.map((p,i)=> (
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

      {/* CONTATO / LOCALIZAÇÃO */}
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
              <a href="https://www.instagram.com/m13.tattoo/" className="hover:text-white" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.tiktok.com/@m13tattoo?_t=ZM-90YS8Fbu1oy&_r=1" className="hover:text-white" target="_blank" rel="noreferrer">TikTok</a>
            </div>
          </div>
          <div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              {/* Substitua o q param pela sua localização exata */}
              <iframe
                title="Mapa do estúdio"
                src="https://www.google.com/maps?q=Rod.%20Baldicero%20Filomeno%2C%205151%20-%20Ribeir%C3%A3o%20da%20Ilha%2C%20Florian%C3%B3polis%20-%20SC%2C%2088064-002&output=embed"
                className="w-full h-[420px]"
              />
            </div>
            <p className="text-white/60 text-sm mt-3">Endereço exato e instruções de chegada serão enviados na confirmação de agendamento.</p>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logooo.png" alt="Segunda Pele" className="h-6 w-auto"/>
            <span className="text-sm text-white/60">© {new Date().getFullYear()} Segunda Pele Tattoo</span>
          </div>
          <div className="text-sm text-white/60">CNPJ: 34.812.595/0001-00 • Arte que vira pele • Floripa</div>
        </div>
      </footer>
    {/* Botão flutuante do WhatsApp */}
      <a href="https://wa.me/5548998214444" className="fixed left-3 bottom-4 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-black shadow-soft hover:opacity-90" aria-label="Falar no WhatsApp" target="_blank" rel="noreferrer">
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor"><path d="M19.11 17.24c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46-.16 0-.34-.02-.52-.02-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.28 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.72 4.02.66.28 1.17.45 1.57.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"/><path d="M26.67 5.33C24.27 2.93 21.03 1.6 17.6 1.6 9.87 1.6 3.6 7.87 3.6 15.6c0 2.47.64 4.88 1.86 7.02L3.2 30.4l7.98-2.1c2.07 1.12 4.4 1.7 6.75 1.7 7.73 0 14-6.27 14-14 0-3.43-1.33-6.67-3.73-9.07zm-9.09 22.93c-2.17 0-4.3-.58-6.15-1.68l-.44-.26-4.73 1.24 1.26-4.6-.29-.47c-1.16-1.89-1.78-4.07-1.78-6.31 0-6.75 5.49-12.24 12.24-12.24 3.27 0 6.35 1.27 8.67 3.58 2.31 2.32 3.58 5.4 3.58 8.67 0 6.75-5.49 12.24-12.24 12.24z"/></svg>
      </a>
    </div>
  )
}

