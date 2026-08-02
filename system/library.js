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

  function coverMarkup(publication){
    const image=publication.cover
      ? `<div class="cover-art"><img src="${publication.cover}" alt="${publication.coverAlt || ''}"></div>`
      : '<div class="cover-art" aria-hidden="true"></div>';
    return `<div class="publication-cover">
      ${image}
      <div class="cover-title">
        <p class="cover-meta"><span>${publication.coverLabel}</span><span class="cover-mark">RSU</span></p>
        <h3>${publication.title.replace('\n','<br>')}</h3>
      </div>
    </div>`;
  }

  function cardMarkup(publication){
    const cover=coverMarkup(publication);
    const details=`<div class="card-copy"><p>${publication.blurb}</p></div>`;

    if(publication.status==='live' || publication.status==='preview'){
      const action=publication.status==='preview'?'Preview publication →':'Read publication →';
      return `<article class="publication-card ${publication.status}">
        <a class="publication-card-link" href="${publication.href}" aria-label="${publication.status==='preview'?'Preview':'Read'} ${publication.title.replace('\n',' ')}">
          ${cover}
          ${details.replace('</div>',`<span class="card-action">${action}</span></div>`)}
        </a>
      </article>`;
    }

    return `<article class="publication-card pending" aria-label="${publication.title.replace('\n',' ')}, coming soon">
      ${cover}
      ${details.replace('</div>','<span class="status">In preparation</span></div>')}
    </article>`;
  }

  function shelfMarkup(shelf,publications){
    const shelfPublications=publications.filter(publication=>publication.shelf===shelf.id);
    const cards=shelfPublications.map(cardMarkup).join('');
    const featured=shelf.id==='living-hope';
    return `<section class="collection-group ${featured?'featured-collection':''}" aria-labelledby="${shelf.id}-title">
      <header class="collection-heading">
        <div>
          <p class="eyebrow">${shelf.eyebrow}</p>
          <h3 id="${shelf.id}-title">${shelf.title}</h3>
        </div>
        <div class="collection-introduction">
          <p>${shelf.description}</p>
          <span>${shelf.note}</span>
        </div>
      </header>
      <div class="collection-grid ${shelfPublications.length===1?'single':''}">${cards}</div>
    </section>`;
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
    .then(library=>{catalog.innerHTML=library.shelves.map(shelf=>shelfMarkup(shelf,library.publications)).join('');})
    .catch(()=>{catalog.innerHTML='<p class="load-error">The collection is resting for a moment. Please return soon.</p>';});
})();
