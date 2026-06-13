document.addEventListener('DOMContentLoaded',function(){
  // year
  const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
  // mobile nav
  const toggle=document.getElementById('navToggle'); const nav=document.getElementById('nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';});
    window.addEventListener('resize',()=>{if(window.innerWidth>720) nav.style.display='flex';});
  }
  // simple smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href'); if(href==='#') return; const target=document.querySelector(href);
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); if(window.innerWidth<=720 && nav) nav.style.display='none'; }
    });
  });
});
