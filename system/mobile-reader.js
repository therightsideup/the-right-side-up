/* The Right Side Up — one-page mobile pagination and touch navigation. */
(function(){
  if(!window.matchMedia('(max-width:760px)').matches || typeof pages==='undefined') return;

  const sequence=pages.flat();
  let mobileIndex=0;
  let touchStartX=0;
  let touchStartY=0;

  counter.setAttribute('aria-live','polite');
  counter.setAttribute('aria-atomic','true');
  left.setAttribute('aria-label','Publication page');
  right.setAttribute('aria-hidden','true');

  function renderMobile(options={}){
    const page=sequence[mobileIndex];
    left.className='page left'+(page.teal?' teal':'');
    left.innerHTML=page.html;
    right.hidden=true;
    counter.textContent=`${mobileIndex+1} / ${sequence.length}`;

    const buttons=document.querySelectorAll('.nav button');
    if(buttons[0]) buttons[0].disabled=mobileIndex===0;
    if(buttons[1]) buttons[1].disabled=mobileIndex===sequence.length-1;

    if(options.moveToPage){
      left.scrollIntoView({
        block:'start',
        behavior:window.matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'
      });
    }
  }

  next=function(){
    if(mobileIndex<sequence.length-1){
      mobileIndex++;
      renderMobile({moveToPage:true});
    }
  };

  prev=function(){
    if(mobileIndex>0){
      mobileIndex--;
      renderMobile({moveToPage:true});
    }
  };

  const stage=document.querySelector('.stage');
  stage.addEventListener('touchstart',event=>{
    const touch=event.changedTouches[0];
    touchStartX=touch.clientX;
    touchStartY=touch.clientY;
  },{passive:true});
  stage.addEventListener('touchend',event=>{
    const touch=event.changedTouches[0];
    const dx=touch.clientX-touchStartX;
    const dy=touch.clientY-touchStartY;
    if(Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.4) dx<0?next():prev();
  },{passive:true});

  renderMobile();
})();

