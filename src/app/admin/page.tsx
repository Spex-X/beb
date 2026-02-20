'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";

declare global {
  interface Window {
    fbq: (command: string, eventName: string, parameters?: any) => void;
    gtag: (command: string, action: string, parameters?: any) => void;
    trackLead: (buttonText: string, position: string) => void;
    trackClick: (element: string, action: string) => void;
    trackScroll: (percentage: number) => void;
    trackTime: (seconds: number) => void;
    showTrackingData: () => void;
    exportTrackingData: () => void;
    clearTrackingData: () => void;
    simpleTracker: any;
  }
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Senha simples - você pode mudar quando quiser
  const ADMIN_PASSWORD = 'kitmamae2024';

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
      setError('');
    } else {
      setError('Senha incorreta! Tente novamente.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">🔐 Acesso Restrito</h1>
              <p className="text-gray-400">Painel Admin - Kit da Mamãe</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Senha de Acesso</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  placeholder="Digite sua senha"
                  required
                />
              </div>
              
              {error && (
                <div className="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
              >
                Acessar Painel
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Dica: A senha é o nome do produto + ano atual</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const checkoutUrl = "https://pay.kiwify.com.br/5IK1HKA";

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">🔐 Painel Admin - Kit da Mamãe</h1>
            <p className="text-gray-400">Acesso restrito - Monitoramento em tempo real</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
          >
            🚪 Sair
          </button>
        </header>

        {/* Status Cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Visitas</span>
              <span className="text-2xl">👁️</span>
            </div>
            <div className="text-2xl font-bold text-blue-400" id="admin-visitas">0</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Conversões</span>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-2xl font-bold text-green-400" id="admin-conversoes">0</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Taxa Conv.</span>
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-2xl font-bold text-purple-400" id="admin-taxa">0%</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Receita</span>
              <span className="text-2xl">💰</span>
            </div>
            <div className="text-2xl font-bold text-pink-400" id="admin-receita">R$ 0</div>
          </div>
        </section>

        {/* Configurações */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4">📊 Configurações de Rastreamento</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Facebook Pixel</span>
                <span className="px-3 py-1 bg-green-600 rounded text-sm">ATIVO</span>
              </div>
              <div className="text-sm text-gray-400">ID: 1120055003471811</div>
              
              <div className="flex justify-between items-center">
                <span>Google Analytics</span>
                <span className="px-3 py-1 bg-green-600 rounded text-sm">ATIVO</span>
              </div>
              <div className="text-sm text-gray-400">ID: G-9MX6X8R4X3</div>
              
              <div className="flex justify-between items-center">
                <span>Simple Tracker</span>
                <span className="px-3 py-1 bg-green-600 rounded text-sm">ATIVO</span>
              </div>
              <div className="text-sm text-gray-400">LocalStorage: OK</div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-xl font-bold mb-4">🔗 Links Importantes</h2>
            <div className="space-y-3">
              <a href={checkoutUrl} target="_blank" className="block bg-gray-700 hover:bg-gray-600 p-3 rounded transition">
                <div className="font-bold">🛒 Checkout Principal</div>
                <div className="text-sm text-gray-400">{checkoutUrl}</div>
              </a>
              
              <a href="https://business.facebook.com/adsmanager" target="_blank" className="block bg-gray-700 hover:bg-gray-600 p-3 rounded transition">
                <div className="font-bold">📘 Facebook Ads Manager</div>
                <div className="text-sm text-gray-400">Ver conversões no Facebook</div>
              </a>
              
              <a href="https://analytics.google.com" target="_blank" className="block bg-gray-700 hover:bg-gray-600 p-3 rounded transition">
                <div className="font-bold">📈 Google Analytics</div>
                <div className="text-sm text-gray-400">Ver métricas no GA4</div>
              </a>
            </div>
          </div>
        </section>

        {/* Eventos em Tempo Real */}
        <section className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
          <h2 className="text-xl font-bold mb-4">⚡ Eventos em Tempo Real</h2>
          <div className="bg-gray-900 rounded p-4 h-64 overflow-y-auto font-mono text-sm" id="admin-eventos">
            <div className="text-gray-500">Aguardando eventos...</div>
          </div>
        </section>

        {/* Ações Rápidas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && window.showTrackingData) {
                window.showTrackingData();
                alert('Dados exibidos no console! Pressione F12 para ver.');
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition"
          >
            <div className="font-bold">📊 Ver Dados</div>
            <div className="text-sm text-gray-300">Exibir estatísticas no console</div>
          </button>

          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && window.exportTrackingData) {
                window.exportTrackingData();
              }
            }}
            className="bg-green-600 hover:bg-green-700 p-4 rounded-lg transition"
          >
            <div className="font-bold">💾 Exportar Dados</div>
            <div className="text-sm text-gray-300">Baixar arquivo JSON</div>
          </button>

          <button 
            onClick={() => {
              if (typeof window !== 'undefined' && window.clearTrackingData) {
                if (confirm('Tem certeza que deseja limpar todos os dados de rastreamento?')) {
                  window.clearTrackingData();
                  alert('Dados limpos com sucesso!');
                  location.reload();
                }
              }
            }}
            className="bg-red-600 hover:bg-red-700 p-4 rounded-lg transition"
          >
            <div className="font-bold">🗑️ Limpar Dados</div>
            <div className="text-sm text-gray-300">Apagar histórico</div>
          </button>
        </section>

        {/* Debug Console */}
        <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-4">🔍 Console de Debug</h2>
          <div className="bg-black text-green-400 p-4 rounded font-mono text-sm h-32 overflow-y-auto" id="admin-console">
            <div>Console de debug pronto...</div>
          </div>
          <button 
            onClick={() => {
              document.getElementById('admin-console').innerHTML = '';
            }}
            className="mt-4 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition"
          >
            Limpar Console
          </button>
        </section>

        {/* Preview da Landing Page */}
        <section className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-4">👁️ Preview Landing Page</h2>
          <div className="bg-gray-900 rounded p-4">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Tenha em mãos o Kit da Mamãe com mais de <span className="text-pink-600 font-bold">500 Receitas</span> para o seu Bebê 🥕👶
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Mais de 78% das mamães enfrentam dificuldades na introdução alimentar...
              </p>
            </div>
            <div className="text-center">
              <a
                href={checkoutUrl}
                className="inline-flex h-14 items-center justify-center rounded-full bg-pink-500 px-10 text-lg font-extrabold text-white shadow-lg transition hover:bg-pink-600 hover:shadow-xl"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.trackLead) {
                    window.trackLead('QUERO COMEÇAR AGORA', 'admin_preview');
                  }
                }}
              >
                QUERO COMEÇAR AGORA
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a href="/" className="text-blue-400 hover:text-blue-300 underline">
              ← Voltar para Landing Page
            </a>
          </div>
        </section>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Atualizar métricas em tempo real
          function updateAdminMetrics() {
            if (typeof window !== 'undefined' && window.simpleTracker) {
              const stats = window.simpleTracker.getStats();
              document.getElementById('admin-visitas').textContent = stats.pageViews;
              document.getElementById('admin-conversoes').textContent = stats.leads;
              document.getElementById('admin-taxa').textContent = stats.conversionRate;
              document.getElementById('admin-receita').textContent = 'R$ ' + stats.revenue.toFixed(2);
            }
          }

          // Interceptar eventos do Simple Tracker
          if (typeof window !== 'undefined') {
            const originalTrack = window.simpleTracker?.track;
            if (originalTrack) {
              window.simpleTracker.track = function(eventName, data) {
                const eventDiv = document.getElementById('admin-eventos');
                const timestamp = new Date().toLocaleTimeString('pt-BR');
                const eventData = \`[\${timestamp}] \${eventName}: \${JSON.stringify(data)}\`;
                
                eventDiv.innerHTML = eventData + '<br>' + eventDiv.innerHTML;
                eventDiv.scrollTop = eventDiv.scrollHeight;
                
                const consoleDiv = document.getElementById('admin-console');
                consoleDiv.innerHTML = eventData + '<br>' + consoleDiv.innerHTML;
                consoleDiv.scrollTop = consoleDiv.scrollHeight;
                
                originalTrack.call(this, eventName, data);
                updateAdminMetrics();
              };
            }
          }

          // Atualizar métricas a cada 2 segundos
          setInterval(updateAdminMetrics, 2000);
        `
      }} />
    </div>
  );
}
