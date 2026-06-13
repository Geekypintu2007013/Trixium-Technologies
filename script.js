document.addEventListener('DOMContentLoaded', function () {
  // set year
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) {
        nav.classList.remove('open');
        nav.style.display = '';
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth <= 720 && nav) nav.classList.remove('open');
      }
    });
  });
  // background video behavior: hide/pause on small screens to save bandwidth
  const bg = document.getElementById('bgVideo');
  function handleVideoOnResize(){
    if(!bg) return;
    if(window.innerWidth <= 720){
      try{ bg.pause(); }catch(e){}
      bg.style.display = 'none';
    } else {
      bg.style.display = '';
      const p = bg.play(); if(p && p.catch) p.catch(()=>{});
    }
  }
  handleVideoOnResize();
  window.addEventListener('resize', handleVideoOnResize);
});
