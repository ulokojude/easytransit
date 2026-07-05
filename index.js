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


// Tab Interaction Controller (Track Shipment vs Instant Quote)
const tabs = document.querySelectorAll('.widget-tab');
const panels = document.querySelectorAll('.widget-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    const targetId = tab.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});

// Tracking Button Demonstration Event Handler
const trackBtn = document.getElementById('trackBtn');
const trackInput = document.getElementById('track-id');

trackBtn.addEventListener('click', () => {
  const code = trackInput.value.trim();
  if(code === "") {
    alert("Please specify a valid shipment tracking key reference sequence.");
  } else {
    alert(`Initializing secure lookups across operational nodes for sequence: ${code}`);
  }
});

// Mobile Navbar Responsiveness Burger Toggle Linker
const burger = document.getElementById('burgerMenu');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  if(navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '80px';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.backgroundColor = 'white';
    navLinks.style.padding = '24px';
    navLinks.style.boxShadow = '0 10px 10px rgba(0,0,0,0.05)';
  }
});