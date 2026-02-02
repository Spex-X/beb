import Image from "next/image";

export default function Home() {
  const checkoutUrl = "https://pay.kirvano.com/9c420722-c300-434b-94c1-18ddc51f4392";

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-zinc-900">
              <Image
                src="/clone-assets/logo.png"
                alt="Logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">NutriBaby</span>
              <span className="text-xs text-zinc-500">Ebooks com desconto</span>
            </div>
          </div>

          <a
            href={checkoutUrl}
            className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-900 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
          >
            QUERO RECEBER O KIT DA MAMÃE
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-white to-zinc-50">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Acesso imediato (PDF)
              </div>
              <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
                Kit de eBooks para Introdução Alimentar do Bebê
              </h1>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
                Materiais completos para ajudar mamães e papais a iniciarem a alimentação dos bebês
                de forma saudável, prática e segura.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={checkoutUrl}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
                >
                  QUERO RECEBER O KIT DA MAMÃE
                </a>
                <a
                  href="#ofertas"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
                >
                  Ver ofertas
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-600 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="font-semibold text-zinc-900">Conteúdo completo</p>
                  <p className="mt-1">Cardápios, tabelas e receitas práticas.</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <p className="font-semibold text-zinc-900">Para 6m a 2 anos</p>
                  <p className="mt-1">Receitas pensadas para essa fase.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-200/70 via-amber-200/50 to-pink-200/70 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src="/clone-assets/hero.png"
                    alt="Kit de eBooks"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <p className="text-xs font-semibold text-zinc-500">Inclui</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">Guia Alimentar</p>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <p className="text-xs font-semibold text-zinc-500">Inclui</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">+100 Receitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
            Comprando hoje você recebe:
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">GUIA ALIMENTAR</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Um material completo para orientar a introdução alimentar de forma saudável, prática
                e segura, com orientações simples, cardápios e receitas.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">+100 RECEITAS</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Um eBook prático e cheio de sabor para tornar essa fase mais fácil e nutritiva, com
                receitas variadas, balanceadas e fáceis de preparar.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-emerald-700">SUCOS SAUDÁVEIS</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                Guia com 20 receitas de sucos naturais, nutritivos e fáceis, feitos com frutas e
                combinações equilibradas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
              Não para por aqui — você também leva:
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">Cardápio Semanal Pronto para Bebês</p>
                <p className="mt-2 text-sm text-zinc-600">
                  <span className="line-through">DE R$27,90</span> <span className="font-semibold">por R$0,00</span>
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-zinc-900">Tabela de Alimentos por Idade</p>
                <p className="mt-2 text-sm text-zinc-600">
                  <span className="line-through">DE R$27,90</span> <span className="font-semibold">por R$0,00</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ofertas" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 text-white shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">ESCOLHA SUA OFERTA!</h2>
                <p className="mt-2 text-sm text-zinc-200">
                  <span className="font-semibold">Pagamento 100% seguro</span>
                </p>
              </div>
              <a
                href={checkoutUrl}
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-zinc-100"
              >
                QUERO RECEBER O KIT DA MAMÃE
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
              Perguntas Frequentes (FAQ)
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4">
              <details className="group rounded-2xl border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold text-zinc-900">
                  O que eu vou receber?
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Você receberá acesso imediato a um eBook digital com receitas saudáveis para bebês,
                  incluindo cardápios semanais, sucos naturais, tabelas de alimentos e bônus.
                </p>
              </details>
              <details className="group rounded-2xl border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold text-zinc-900">
                  Funciona no celular?
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Sim. O material é em PDF e pode ser aberto em celular, tablet ou computador.
                </p>
              </details>
              <details className="group rounded-2xl border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold text-zinc-900">
                  Para qual idade é indicado?
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  As receitas foram pensadas para bebês de 6 meses a 2 anos, com possibilidade de
                  adaptação para a família.
                </p>
              </details>
              <details className="group rounded-2xl border border-zinc-200 bg-white p-5">
                <summary className="cursor-pointer list-none font-semibold text-zinc-900">
                  E se eu tiver problemas para acessar?
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Entre em contato com o suporte pelo botão de atendimento/WhatsApp e você receberá o
                  material sem problemas.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
                  Pronta para facilitar sua rotina?
                </h2>
                <p className="mt-2 text-sm text-zinc-600">
                  Clique no botão e garanta seu acesso imediato.
                </p>
              </div>
              <a
                href={checkoutUrl}
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
              >
                QUERO RECEBER O KIT DA MAMÃE
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-600 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} NutriBaby</p>
          <a href={checkoutUrl} className="font-semibold text-zinc-900 hover:underline">
            Acessar oferta
          </a>
        </div>
      </footer>
    </div>
  );
}
