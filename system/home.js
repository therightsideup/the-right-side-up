(function(){
  const themeButton=document.querySelector('.theme-toggle');
  const themeMeta=document.querySelector('meta[name="theme-color"]');
  const savedTheme=localStorage.getItem('rsu-theme');

  function setTheme(evening){
    document.body.classList.toggle('evening',evening);
    themeButton?.setAttribute('aria-pressed',evening?'true':'false');
    themeButton?.setAttribute('aria-label',evening?'Use light colors':'Use dark colors');
    if(themeMeta) themeMeta.setAttribute('content',evening?'#102b2a':'#183f3e');
  }

  setTheme(savedTheme==='evening');

  themeButton?.addEventListener('click',()=>{
    const evening=!document.body.classList.contains('evening');
    setTheme(evening);
    localStorage.setItem('rsu-theme',evening?'evening':'light');
  });

  if('serviceWorker' in navigator){
    navigator.serviceWorker.getRegistrations().then(registrations=>{
      registrations.forEach(registration=>registration.unregister());
      if('caches' in window){
        caches.keys().then(keys=>Promise.all(keys.map(key=>caches.delete(key))));
      }
    });
  }
})();
