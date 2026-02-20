# 📊 Sistema de Rastreamento Completo

## 🎯 O que foi implementado

### 1. **Facebook Pixel** (ID: 1120055003471811)
- PageView: Automatico ao carregar página
- Lead: Ao clicar nos CTAs
- Dados: Produto, valor, moeda

### 2. **Google Analytics** (ID: G-9MX6X8R4X3)
- PageView: Automatico ao carregar página
- Conversion: Ao clicar nos CTAs
- Fluxo: "banana" (código: 9996902962)

### 3. **Simple Tracker** (Offline/Local)
- Armazenamento local no navegador
- Backup dos dados mesmo sem internet
- Exportação para análise

## 📱 Como usar o rastreamento

### Acessar dados offline:
1. **Abra o console do navegador** (F12)
2. **Digite:** `showTrackingData()` e pressione Enter
3. **Veja as estatísticas:** visitas, conversões, taxa

### Exportar dados:
1. **No console:** `exportTrackingData()`
2. **Download automático:** Arquivo JSON com todos os eventos

### Limpar dados:
1. **No console:** `clearTrackingData()`
2. **Confirme:** Limpa todos os dados locais

## 📊 Painel Visual

### Acesso:
1. **Abra o arquivo:** `analytics-dashboard.html`
2. **No navegador:** Arraste o arquivo para a aba
3. **Visualização:** Gráficos e métricas em tempo real

### Funcionalidades:
- **Métricas principais:** Visitas, conversões, taxa, receita
- **Dispositivos:** Mobile vs Desktop
- **Fontes de tráfego:** Direto, orgânico, social
- **Eventos recentes:** Tabela com últimos eventos
- **Console debug:** Logs em tempo real

## 🔍 Eventos Rastreados

### Automaticos:
- `PageView`: Carregamento da página
- `Scroll25/50/75/100`: Percentuais de scroll
- `Time30/60/180`: Tempo na página (segundos)
- `PageExit`: Saída da página

### Manuais:
- `Lead`: Cliques nos CTAs
- `Click`: Cliques em elementos específicos
- `external_link`: Cliques em links externos

## 📈 Como analisar os dados

### 1. **Facebook Ads Manager**
- Acesse: business.facebook.com/adsmanager
- Veja: Performance de campanhas
- Otimize: Para conversões

### 2. **Google Analytics 4**
- Acesse: analytics.google.com
- Veja: Relatórios em tempo real
- Analise: Comportamento do usuário

### 3. **Simple Tracker (Offline)**
- Console: `showTrackingData()`
- Export: `exportTrackingData()`
- Visual: `analytics-dashboard.html`

## 🎯 Métricas Importantes

### Taxa de Conversão:
```
Taxa = (Conversões / Visitas) × 100
Meta: > 3% (bom), > 5% (excelente)
```

### ROI:
```
ROI = (Receita - Custo) / Custo × 100
Meta: > 200% (lucro 2x o investimento)
```

### Custo por Aquisição:
```
CPA = Custo Total / Número de Conversões
Meta: < R$ 20 (para produto de R$ 49,99)
```

## 🛠️ Troubleshooting

### Pixel não funciona:
1. Verifique se o ID está correto
2. Use o Facebook Pixel Helper
3. Limpe cache do navegador

### Analytics não registra:
1. Verifique o ID de medição
2. Use o Google Tag Assistant
3. Aguarde 24-48h

### Tracker offline não salva:
1. Verifique localStorage disponível
2. Limpe dados antigos
3. Recarregue a página

## 📱 Monitoramento Mobile

### Teste em dispositivos:
1. **Abra no celular**
2. **Teste os CTAs**
3. **Verifique o console**
4. **Confirme os eventos**

### Debug mobile:
- Chrome: `chrome://inspect`
- Safari: Web Inspector
- Android: USB Debugging

## 🔄 Backup e Exportação

### Backup automático:
- **LocalStorage:** Salva automaticamente
- **Capacidade:** Até 1000 eventos
- **Duração:** Permanece no navegador

### Exportação manual:
- **Formato:** JSON
- **Conteúdo:** Todos os eventos + metadados
- **Uso:** Análise em Excel/Planilhas

---

**🎯 Dica:** Use múltiplas fontes de dados para ter uma visão completa do comportamento dos usuários!
