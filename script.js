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

  // dropdown toggle behavior (Our Products)
  document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const parent = btn.closest('.dropdown');
      if (!parent) return;
      const open = parent.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  // close dropdowns when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown.open').forEach(d => {
      d.classList.remove('open');
      const b = d.querySelector('.dropdown-toggle'); if (b) b.setAttribute('aria-expanded','false');
    });
  });

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
  // pause/hide background video when hero isn't visible (desktop)
  const hero = document.querySelector('.hero');
  if (bg && hero) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (window.innerWidth <= 720) {
          bg.style.display = 'none';
          try { bg.pause(); } catch (e) {}
          return;
        }
        if (entry.intersectionRatio > 0.3) {
          bg.style.display = '';
          const p = bg.play(); if (p && p.catch) p.catch(()=>{});
        } else {
          try { bg.pause(); } catch (e) {}
          bg.style.display = 'none';
        }
      });
    }, { threshold: [0, 0.3, 0.6, 1] });
    observer.observe(hero);
    // also pause when navigating to anchors other than the landing hero
    window.addEventListener('hashchange', () => {
      const h = location.hash;
      const isHero = !h || h === '#hero' || h === '#';
      if (!isHero) {
        try { bg.pause(); } catch (e) {}
        bg.style.display = 'none';
      }
    });
  }
});