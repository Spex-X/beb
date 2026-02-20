import Image from "next/image";
import React from 'react';

declare global {
  interface Window {
    fbq: (command: string, eventName: string, parameters?: any) => void;
    gtag: (command: string, action: string, parameters?: any) => void;
    dataLayer: any[];
    scroll25?: boolean;
    scroll50?: boolean;
    scroll75?: boolean;
    scroll100?: boolean;
  }
}

export default function Home() {
  const checkoutUrl = "https://pay.kiwify.com.br/5IK1HKA";

  // Função de rastreamento universal
  const trackEvent = (eventName: string, data: any) => {
    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, data);
    }
    
    // Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, data);
    }
    
    // Console para debug
    console.log('📊 Event tracked:', eventName, data);
    
    // LocalStorage para backup
    if (typeof window !== 'undefined') {
      const events = JSON.parse(localStorage.getItem('tracking_events') || '[]');
      events.push({
        event: eventName,
        data: data,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      });
      localStorage.setItem('tracking_events', JSON.stringify(events));
    }
  };

  // Rastreamento de scroll
  const handleScroll = () => {
    const scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    
    if (scrollPercentage === 25 && !window.scroll25) {
      window.scroll25 = true;
      trackEvent('Scroll25', { scroll_percentage: 25 });
    }
    
    if (scrollPercentage === 50 && !window.scroll50) {
      window.scroll50 = true;
      trackEvent('Scroll50', { scroll_percentage: 50 });
    }
    
    if (scrollPercentage === 75 && !window.scroll75) {
      window.scroll75 = true;
      trackEvent('Scroll75', { scroll_percentage: 75 });
    }
    
    if (scrollPercentage === 100 && !window.scroll100) {
      window.scroll100 = true;
      trackEvent('Scroll100', { scroll_percentage: 100 });
    }
  };

  // Adicionar listener de scroll
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rastreamento de tempo na página
  React.useEffect(() => {
    const startTime = Date.now();
    
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000); // segundos
      
      if (timeSpent === 30) {
        trackEvent('Time30s', { time_spent_seconds: 30 });
      }
      
      if (timeSpent === 60) {
        trackEvent('Time60s', { time_spent_seconds: 60 });
      }
      
      if (timeSpent === 180) {
        trackEvent('Time180s', { time_spent_seconds: 180 });
      }
    };
    
    const interval = setInterval(trackTimeOnPage, 1000);
    return () => clearInterval(interval);
  }, []);

  // Rastreamento de clique em elementos específicos
  const trackClick = (element: string, action: string) => {
    trackEvent('Click', {
      element: element,
      action: action,
      page_location: window.location.href
    });
  };

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
              <span 
                className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-white transition"
                onClick={() => trackClick('benefit_tag', 'Receitas simples')}
              >
                🍎 Receitas simples
              </span>
              <span 
                className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-white transition"
                onClick={() => trackClick('benefit_tag', 'Ingredientes acessíveis')}
              >
                🥦 Ingredientes acessíveis
              </span>
              <span 
                className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-white transition"
                onClick={() => trackClick('benefit_tag', 'Nutrição adequada')}
              >
                🥕 Nutrição adequada para cada fase
              </span>
              <span 
                className="bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700 cursor-pointer hover:bg-white transition"
                onClick={() => trackClick('benefit_tag', 'Segurança e tranquilidade')}
              >
                💖 Mais segurança e tranquilidade para você
              </span>
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
              onClick={() => {
                trackEvent('Lead', {
                  content_name: 'Kit da Mamãe',
                  content_category: 'Ebooks',
                  value: 49.99,
                  currency: 'BRL',
                  button_text: 'QUERO COMEÇAR AGORA',
                  button_position: 'hero'
                });
                trackClick('cta_button', 'hero_cta_principal');
              }}
            >
              QUERO COMEÇAR AGORA
            </a>
          </div>
        </div>

        {/* Restante do código continua igual... */}
      </div>
    </div>
  );
}
