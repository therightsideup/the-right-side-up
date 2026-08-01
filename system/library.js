(function(){
  const catalog=document.querySelector('#catalog');
  const themeButton=document.querySelector('.theme-toggle');
  const themeMeta=document.querySelector('meta[name="theme-color"]');
  const savedTheme=localStorage.getItem('rsu-theme');

  function setTheme(evening){
    document.body.classList.toggle('evening',evening);
    themeButton?.setAttribute('aria-pressed',evening?'true':'false');
    themeButton?.setAttribute('aria-label',evening?'Use light colors':'Use dark colors');
    if(themeMeta) themeMeta.setAttribute('content',evening?'#102b2a':'#183f3e');
  }

  function coverMarkup(publication,number){
    const image=publication.cover
      ? `<div class="cover-art"><img src="${publication.cover}" alt="${publication.coverAlt || ''}"></div>`
      : '<div class="cover-art" aria-hidden="true"></div>';
    return `<div class="publication-cover">
      ${image}
      <div class="cover-title">
        <p class="cover-meta"><span>Publication ${number} · ${publication.scripture}</span><span class="cover-mark">RSU</span></p>
        <h3>${publication.title.replace('\n','<br>')}</h3>
      </div>
    </div>`;
  }

  function cardMarkup(publication){
    const number=String(publication.number).padStart(2,'0');
    const cover=coverMarkup(publication,number);
    const details=`<div class="card-copy"><p>${publication.blurb}</p></div>`;

    if(publication.status==='live'){
      return `<article class="publication-card">
        <a class="publication-card-link" href="${publication.href}" aria-label="Read ${publication.title.replace('\n',' ')}">
          ${cover}
          ${details.replace('</div>','<span class="card-action">Read publication →</span></div>')}
        </a>
      </article>`;
    }

    return `<article class="publication-card pending" aria-label="${publication.title.replace('\n',' ')}, coming soon">
      ${cover}
      ${details.replace('</div>','<span class="status">In preparation</span></div>')}
    </article>`;
  }

  setTheme(savedTheme==='evening');
  themeButton?.addEventListener('click',()=>{
    const evening=!document.body.classList.contains('evening');
    setTheme(evening);
    localStorage.setItem('rsu-theme',evening?'evening':'light');
  });

  fetch('/data/publications.json')
    .then(response=>{
      if(!response.ok) throw new Error('The library could not be loaded.');
      return response.json();
    })
    .then(publications=>{catalog.innerHTML=publications.map(cardMarkup).join('');})
    .catch(()=>{catalog.innerHTML='<p class="load-error">The collection is resting for a moment. Please return soon.</p>';});
})();
