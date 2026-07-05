window.addEventListener('DOMContentLoaded', () => {
  (function sendVisit(){
    fetch('/api/log', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: window.location.pathname + window.location.search,
        ua: window.navigator.userAgent
      })
    })
    .catch(() => { /* Fail silently */ });
  })();
});