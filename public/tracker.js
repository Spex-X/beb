// Sistema de Rastreamento Offline
class SimpleTracker {
  constructor() {
    this.events = this.loadEvents();
    this.sessionId = this.getSessionId();
  }

  getSessionId() {
    let sessionId = localStorage.getItem('session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('session_id', sessionId);
    }
    return sessionId;
  }

  loadEvents() {
    try {
      return JSON.parse(localStorage.getItem('tracking_events') || '[]');
    } catch {
      return [];
    }
  }

  saveEvents() {
    localStorage.setItem('tracking_events', JSON.stringify(this.events));
  }

  track(eventName, data = {}) {
    const event = {
      id: Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      eventName,
      data,
      url: window.location.href,
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenResolution: `${screen.width}x${screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`
    };

    this.events.push(event);
    this.saveEvents();

    // Manter apenas últimos 1000 eventos
    if (this.events.length > 1000) {
      this.events = this.events.slice(-1000);
      this.saveEvents();
    }

    console.log('📊 Event tracked:', event);
    return event;
  }

  getEvents(eventName = null) {
    if (eventName) {
      return this.events.filter(e => e.eventName === eventName);
    }
    return this.events;
  }

  getStats() {
    const pageViews = this.getEvents('PageView').length;
    const leads = this.getEvents('Lead').length;
    const scrolls = this.getEvents('Scroll').length;
    const clicks = this.getEvents('Click').length;

    return {
      totalEvents: this.events.length,
      pageViews,
      leads,
      scrolls,
      clicks,
      conversionRate: pageViews > 0 ? ((leads / pageViews) * 100).toFixed(2) + '%' : '0%',
      revenue: leads * 49.99
    };
  }

  exportData() {
    const dataStr = JSON.stringify({
      sessionId: this.sessionId,
      stats: this.getStats(),
      events: this.events,
      exportDate: new Date().toISOString()
    }, null, 2);

    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `tracking_data_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    
    URL.revokeObjectURL(url);
  }

  clearData() {
    this.events = [];
    localStorage.removeItem('tracking_events');
    localStorage.removeItem('session_id');
  }
}

// Inicializar tracker global
window.simpleTracker = new SimpleTracker();

// Funções de rastreamento
window.trackPageView = () => {
  window.simpleTracker.track('PageView');
};

window.trackLead = (buttonText, position) => {
  window.simpleTracker.track('Lead', {
    buttonText,
    position,
    value: 49.99,
    currency: 'BRL'
  });
};

window.trackScroll = (percentage) => {
  window.simpleTracker.track('Scroll', { percentage });
};

window.trackClick = (element, action) => {
  window.simpleTracker.track('Click', { element, action });
};

window.trackTime = (seconds) => {
  window.simpleTracker.track('TimeOnPage', { seconds });
};

// Auto-rastreamento
document.addEventListener('DOMContentLoaded', () => {
  window.trackPageView();

  // Rastreamento de scroll
  let scrollTracked = { 25: false, 50: false, 75: false, 100: false };
  
  window.addEventListener('scroll', () => {
    const scrollPercentage = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    
    Object.keys(scrollTracked).forEach(threshold => {
      if (scrollPercentage >= parseInt(threshold) && !scrollTracked[threshold]) {
        scrollTracked[threshold] = true;
        window.trackScroll(parseInt(threshold));
      }
    });
  });

  // Rastreamento de tempo na página
  let timeTracked = { 30: false, 60: false, 180: false };
  
  const startTime = Date.now();
  setInterval(() => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    Object.keys(timeTracked).forEach(seconds => {
      if (timeSpent >= parseInt(seconds) && !timeTracked[seconds]) {
        timeTracked[seconds] = true;
        window.trackTime(parseInt(seconds));
      }
    });
  }, 1000);

  // Rastreamento de cliques em links externos
  document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && target.href && target.href !== window.location.href) {
      window.trackClick('external_link', target.href);
    }
  });

  // Rastreamento de saída da página
  window.addEventListener('beforeunload', () => {
    window.simpleTracker.track('PageExit', {
      timeOnPage: Math.round((Date.now() - startTime) / 1000),
      finalScrollPercentage: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)
    });
  });
});

// Debug functions
window.showTrackingData = () => {
  console.log('📊 Tracking Data:', window.simpleTracker.getStats());
  console.log('📋 All Events:', window.simpleTracker.events);
};

window.exportTrackingData = () => {
  window.simpleTracker.exportData();
};

window.clearTrackingData = () => {
  if (confirm('Tem certeza que deseja limpar todos os dados de rastreamento?')) {
    window.simpleTracker.clearData();
    console.log('🗑️ Tracking data cleared');
  }
};
