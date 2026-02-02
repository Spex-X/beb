import Image from "next/image";

export default function Home() {
  const checkoutUrl = "https://pay.kirvano.com/9c420722-c300-434b-94c1-18ddc51f4392";

  return (
    <div className="min-h-screen bg-[--nb-purple] text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-2xl">
            <Image
              src="/clone-assets/baner1.png.webp"
              alt="Kit de eBooks"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl">Comprando hoje você recebe:</h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[500px] flex flex-col">
              <div className="relative w-full h-96 sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                <Image
                  src="/clone-assets/guiaalimentar.webp"
                  alt="Guia Alimentar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
              <h4 className="font-extrabold text-center mb-3 text-lg text-[--nb-purple]">GUIA ALIMENTAR</h4>
              <p className="text-base text-zinc-800 text-center leading-relaxed flex-grow">
                Um material completo para ajudar mamães e papais a iniciarem a alimentação dos bebês de forma saudável, prática e segura. Nele, você encontra orientações simples, cardápios e receitas que facilitam cada etapa do processo, garantindo mais variedade, nutrição e sabor no prato do seu pequeno.
              </p>
            </div>

            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[500px] flex flex-col">
              <div className="relative w-full h-96 sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                <Image
                  src="/clone-assets/100receitas.webp"
                  alt="+100 Receitas"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
              <h4 className="font-extrabold text-center mb-3 text-lg text-[--nb-purple]">+100 RECEITAS</h4>
              <p className="text-base text-zinc-800 text-center leading-relaxed flex-grow">
                Um eBook prático e cheio de sabor para tornar a fase da introdução alimentar muito mais fácil e nutritiva. São 100 receitas variadas, balanceadas e fáceis de preparar, que vão ajudar você a oferecer refeições saudáveis e deliciosas para o seu bebê, sem complicação.
              </p>
            </div>

            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[500px] flex flex-col">
              <div className="relative w-full h-96 sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                <Image
                  src="/clone-assets/100receitass.webp"
                  alt="Sucos Saudáveis"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
              <h4 className="font-extrabold text-center mb-3 text-lg text-[--nb-purple]">SUCOS SAUDÁVEIS</h4>
              <p className="text-base text-zinc-800 text-center leading-relaxed flex-grow">
                Um guia prático com 20 receitas de sucos naturais, nutritivos e fáceis de preparar. Feitos com frutas frescas e combinações equilibradas, esses sucos ajudam a complementar a introdução alimentar, trazendo mais sabor, vitaminas e energia para o dia a dia do seu pequeno.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl">Não para por aí, você também leva:</h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[400px] flex flex-col">
              <div className="relative w-full h-96 sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                <Image
                  src="/clone-assets/cardapioparabebes.png.webp"
                  alt="Cardápio Semanal"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-contain"
                />
              </div>
              <h4 className="font-extrabold text-center mb-3 text-lg text-[--nb-purple]">Cardápio Semanal Pronto para Bebês</h4>
              <p className="text-sm text-zinc-700 text-center flex-grow">
                <span className="line-through">DE R$27,90</span> por R$0,00
              </p>
            </div>

            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[400px] flex flex-col">
              <div className="relative w-full h-96 sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                <Image
                  src="/clone-assets/tabelaalimentarporidades.png.webp"
                  alt="Tabela de Alimentos"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                  className="object-contain"
                />
              </div>
              <h4 className="font-extrabold text-center mb-3 text-lg text-[--nb-purple]">Tabela de Alimentos por Idade</h4>
              <p className="text-sm text-zinc-700 text-center flex-grow">
                <span className="line-through">DE R$27,90</span> por R$0,00
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl">O que as mamães acham:</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-96 sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center">
                <Image
                  src="/clone-assets/provasocial01.webp"
                  alt="Depoimento 1"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-96 sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center">
                <Image
                  src="/clone-assets/provasocial02.png.webp"
                  alt="Depoimento 2"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-96 sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center">
                <Image
                  src="/clone-assets/provasocial03.png.webp"
                  alt="Depoimento 3"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl">ESCOLHA SUA OFERTA!</h3>

          <div className="mx-auto w-full max-w-2xl rounded-2xl border-2 border-white/30 bg-white p-6 shadow-lg">
            <div className="relative w-full h-[32rem] sm:h-[36rem] overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center">
              <Image
                src="/clone-assets/cta.png.webp"
                alt="Oferta"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                className="object-contain"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-zinc-700">
                🔒 Pagamento 100% seguro
              </p>
              <a
                href={checkoutUrl}
                className="inline-flex h-12 items-center justify-center rounded-full bg-[--nb-pink] px-8 text-sm font-extrabold text-white shadow-sm transition hover:bg-[--nb-pink-2]"
              >
                QUERO RECEBER O KIT DA MAMÃE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
