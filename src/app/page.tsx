import Image from "next/image";

export default function Home() {
  const checkoutUrl = "https://pay.kirvano.com/9c420722-c300-434b-94c1-18ddc51f4392";

  return (
    <div className="min-h-screen bg-pink-200 text-gray-800">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 sm:text-3xl lg:text-4xl">
              Tenha em mãos o Kit da Mamãe com mais de <span className="text-pink-600 font-bold">500 Receitas</span> para o seu Bebê 🥕👶
            </h2>
            <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
              Mais de 78% das mamães enfrentam dificuldades na introdução alimentar e acabam se sentindo perdidas nessa fase tão importante.
            </p>
            <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
              Com o Kit da Mamãe, você vai ter receitas práticas, saudáveis e testadas para garantir uma alimentação equilibrada desde os primeiros meses.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-2xl mx-auto">
              <span className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700">🍎 Receitas simples</span>
              <span className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700">🥦 Ingredientes acessíveis</span>
              <span className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700">🥕 Nutrição adequada para cada fase</span>
              <span className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700">💖 Mais segurança e tranquilidade para você</span>
            </div>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto font-semibold">
              👉 Comece hoje a introdução alimentar do seu bebê com confiança.
            </p>
          </div>
          
          <div className="relative mx-auto aspect-[4/3] w-full max-w-4xl overflow-hidden rounded-2xl mb-6">
            <Image
              src="/clone-assets/baner1.png.webp"
              alt="Kit de eBooks"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              className="object-cover"
              priority
            />
          </div>
          
          <div className="text-center">
            <a
              href={checkoutUrl}
              className="inline-flex h-14 items-center justify-center rounded-full bg-pink-500 px-10 text-lg font-extrabold text-white shadow-lg transition hover:bg-pink-600 hover:shadow-xl"
            >
              QUERO COMEÇAR AGORA
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl text-pink-600">Comprando hoje você recebe:</h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[500px] flex flex-col">
              <div className="relative w-full h-[28rem] sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                <Image
                  src="/clone-assets/guiaalimentar.webp"
                  alt="Guia Alimentar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
              <h4 className="font-extrabold text-center mb-3 text-lg text-pink-600">GUIA ALIMENTAR</h4>
              <p className="text-base text-zinc-800 text-center leading-relaxed flex-grow">
                Um material completo para ajudar mamães e papais a iniciarem a alimentação dos bebês de forma saudável, prática e segura. Nele, você encontra orientações simples, cardápios e receitas que facilitam cada etapa do processo, garantindo mais variedade, nutrição e sabor no prato do seu pequeno.
              </p>
            </div>

            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[500px] flex flex-col">
              <div className="relative w-full h-[28rem] sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                <Image
                  src="/clone-assets/100receitas.webp"
                  alt="+100 Receitas"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
              <h4 className="font-extrabold text-center mb-3 text-lg text-pink-600">+100 RECEITAS</h4>
              <p className="text-base text-zinc-800 text-center leading-relaxed flex-grow">
                Um eBook prático e cheio de sabor para tornar a fase da introdução alimentar muito mais fácil e nutritiva. São 100 receitas variadas, balanceadas e fáceis de preparar, que vão ajudar você a oferecer refeições saudáveis e deliciosas para o seu bebê, sem complicação.
              </p>
            </div>

            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[500px] flex flex-col">
              <div className="relative w-full h-[28rem] sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                <Image
                  src="/clone-assets/100receitass.webp"
                  alt="Sucos Saudáveis"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 25vw"
                  className="object-contain"
                />
              </div>
              <h4 className="font-extrabold text-center mb-3 text-lg text-pink-600">SUCOS SAUDÁVEIS</h4>
              <p className="text-base text-zinc-800 text-center leading-relaxed flex-grow">
                Um guia prático com 20 receitas de sucos naturais, nutritivos e fáceis de preparar. Feitos com frutas frescas e combinações equilibradas, esses sucos ajudam a complementar a introdução alimentar, trazendo mais sabor, vitaminas e energia para o dia a dia do seu pequeno.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl text-pink-600">Não para por aí, você também leva:</h3>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[400px] flex flex-col">
                <div className="relative w-full h-[28rem] sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                  <Image
                    src="/clone-assets/cardapioparabebes.png.webp"
                    alt="Cardápio Semanal"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                    className="object-contain"
                  />
                </div>
                <h4 className="font-extrabold text-center mb-3 text-lg text-pink-600">Cardápio Semanal Pronto para Bebês</h4>
              </div>
              <div className="text-center -mt-4 mb-4">
                <p className="text-sm text-gray-800 font-semibold">
                  <span className="text-pink-600 font-bold">DE R$27,90</span> por R$0,00
                </p>
              </div>
            </div>

            <div>
              <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow min-h-[400px] flex flex-col">
                <div className="relative w-full h-[28rem] sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-4">
                  <Image
                    src="/clone-assets/tabelaalimentarporidades.png.webp"
                    alt="Tabela de Alimentos"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                    className="object-contain"
                  />
                </div>
                <h4 className="font-extrabold text-center mb-3 text-lg text-pink-600">Tabela de Alimentos por Idade</h4>
              </div>
              <div className="text-center -mt-4 mb-4">
                <p className="text-sm text-gray-800 font-semibold">
                  <span className="text-pink-600 font-bold">DE R$27,90</span> por R$0,00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl text-pink-600">O que as mamães acham:</h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative w-full h-[28rem] sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center">
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
              <div className="relative w-full h-[28rem] sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center">
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
              <div className="relative w-full h-[28rem] sm:h-80 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center">
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
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl text-pink-600">ESCOLHA SUA OFERTA!</h3>

          <div className="mx-auto w-full max-w-2xl rounded-2xl border-2 border-white/30 bg-white p-8 shadow-lg text-center">
            <div className="relative w-full h-64 overflow-hidden rounded-xl border-2 border-white/20 flex items-center justify-center mb-6">
              <Image
                src="/clone-assets/ccta.png"
                alt="Oferta"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                className="object-contain"
              />
            </div>
            
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Kit Completo da Mamãe</h4>
              <p className="text-lg text-gray-600 mb-4">Tudo que você precisa para a alimentação do seu bebê</p>
              <div className="text-3xl font-bold text-pink-600 mb-2">R$ 7,90</div>
              <p className="text-sm text-gray-500"><span className="text-white">De R$ 97,90</span></p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <a
                href={checkoutUrl}
                className="inline-flex h-12 items-center justify-center rounded-full bg-pink-500 px-8 text-sm font-extrabold text-white shadow-sm transition hover:bg-pink-600"
              >
                QUERO RECEBER O KIT DA MAMÃE
              </a>
              <p className="text-sm font-semibold text-zinc-700">
                🔒 Pagamento 100% seguro
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-extrabold mb-6 text-center sm:text-2xl lg:text-3xl text-pink-600">Dúvidas Frequentes</h3>
          
          <div className="mx-auto w-full max-w-3xl space-y-4">
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Como recebo os eBooks após a compra?</h4>
              <p className="text-gray-600">Após a confirmação do pagamento, você recebe acesso imediato por e-mail com todos os links para download dos materiais.</p>
            </div>
            
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Os materiais são adequados para qual idade?</h4>
              <p className="text-gray-600">O kit é completo e cobre desde o início da introdução alimentar (6 meses) até os 2 anos de idade.</p>
            </div>
            
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Qual forma de pagamento é aceita?</h4>
              <p className="text-gray-600">Aceitamos cartão de crédito, boleto bancário e Pix. O pagamento é 100% seguro e processado pela Kirvano.</p>
            </div>
            
            <div className="border-2 border-white/30 rounded-2xl p-6 bg-white shadow-lg">
              <h4 className="font-bold text-lg text-gray-800 mb-2">Tenho suporte se tiver dúvidas?</h4>
              <p className="text-gray-600">Sim! Oferecemos suporte por e-mail para tirar todas as suas dúvidas sobre o uso dos materiais.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
