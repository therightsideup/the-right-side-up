(function(){
  const coverMode=new URLSearchParams(window.location.search).get('cover');
  if(['full-art','art-forward'].includes(coverMode)){
    document.body.dataset.cover=coverMode;
  }

  const links=[...document.querySelectorAll('.reader-bar nav a')];
  const sections=links.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const themeButton=document.querySelector('.theme-toggle');

  const observer=new IntersectionObserver(entries=>{
    const visible=entries
      .filter(entry=>entry.isIntersecting)
      .sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible) return;
    links.forEach(link=>{
      const active=link.getAttribute('href')===`#${visible.target.id}`;
      link.classList.toggle('active',active);
      if(active) link.setAttribute('aria-current','true');
      else link.removeAttribute('aria-current');
    });
  },{rootMargin:'-24% 0px -62%',threshold:[0,.15,.4]});

  sections.forEach(section=>observer.observe(section));

  themeButton.addEventListener('click',()=>{
    document.body.classList.toggle('evening');
    themeButton.setAttribute(
      'aria-pressed',
      document.body.classList.contains('evening')?'true':'false'
    );
  });
})();
