/* The Right Side Up — Reader Engine v1 (behavior)
   Pagination, keyboard nav, and the shell() frame every page is wrapped in.
   A publication's content.js must be loaded BEFORE this file defines pages,
   and this file must be loaded before content.js calls shell()/render setup.
   Load order in each publication's HTML:
     1. system/engravings.js
     2. system/reader.js       (this file)
     3. publications/<slug>.content.js   (defines `pages`)
     4. <script>initReader()</script>    (kicks off rendering) */

function shell(inner,section='TEACH US TO PRAY',topic='LUKE 11'){
  return `<div class="side"><span>@THE.RIGHTSIDEUP</span><span>${section}</span><span>LUKE 11</span></div>
  <div class="meta"><span>${section}</span><span>${topic}</span></div>
  ${inner}
  <div class="footer"><span>Teach Us To Pray</span><span>@the.rightsideup</span></div>`
}

let i=0;
const left=document.getElementById('left'), right=document.getElementById('right'), counter=document.getElementById('counter');

function render(){
  const L=pages[i][0], R=pages[i][1];
  left.className='page left'+(L.teal?' teal':'');
  right.className='page right'+(R.teal?' teal':'');
  left.innerHTML=L.html;
  right.innerHTML=R.html;
  counter.textContent=`${i+1} / ${pages.length}`;
}
function next(){if(i<pages.length-1){i++;render()}}
function prev(){if(i>0){i--;render()}}
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight')next(); if(e.key==='ArrowLeft')prev();});
function initReader(){
  render();
}
