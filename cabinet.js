document.querySelector('.brand').innerHTML='Ibara<span> /</span><br> Afterhours.';
document.querySelector('.mobile-brand').textContent='Ibara Afterhours.';
document.querySelector('.sidebar-caption').innerHTML='CHARACTER LOUNGE<br>夜に集う、いくつもの物語';
document.querySelector('.sidebar-footer b').textContent='I.';
document.querySelector('footer').innerHTML='<span>IBARA AFTERHOURS / CHARACTER LOUNGE</span><span>Curated by 茨 · 2026</span>';
const toolsBar=document.createElement('div');toolsBar.className='cabinet-tools';toolsBar.innerHTML='<button type="button" id="cabinet-random">偶然の出会い ↗</button><button type="button" id="cabinet-density" aria-pressed="false">小さく並べる</button>';document.querySelector('.filter-row').insertBefore(toolsBar,document.querySelector('.filter-row label'));
document.getElementById('cabinet-random').addEventListener('click',()=>{const items=sectionCharacters();if(items.length)location.hash=items[Math.floor(Math.random()*items.length)].slug});
document.getElementById('cabinet-density').addEventListener('click',e=>{const compact=document.body.classList.toggle('compact');e.currentTarget.setAttribute('aria-pressed',String(compact));e.currentTarget.textContent=compact?'大きく並べる':'小さく並べる'});
function cabinetLabels(){
 const heading=document.querySelector('.archive-heading h1'),copy=document.querySelector('.archive-copy');
 heading.innerHTML=activeSection()==='uchiyoso'?'Shared stories.<span> / II</span>':'After hours.<span> / I</span>';
 copy.innerHTML='灯りを落として、物語をひとつ。<br><span>A quiet place for vivid souls.</span>';
 document.querySelector('.archive-heading .eyebrow').textContent=activeSection()==='uchiyoso'?'COLLECTION II / OUR WORLD':'THE CHARACTER COLLECTION';
 document.querySelectorAll('.card-copy small').forEach(el=>el.textContent=el.textContent.split(' · ')[0]);
 document.querySelectorAll('.card-copy b').forEach(el=>el.textContent='記録を開く ↗');
 document.querySelector('.topbar-right').textContent='IBARA / AFTERHOURS';
 document.title=(document.getElementById('home-view').hidden?document.getElementById('detail-name-ja').textContent+' — ':'')+'Ibara Afterhours';
}
cabinetLabels();addEventListener('hashchange',cabinetLabels);document.getElementById('search').addEventListener('input',cabinetLabels);

// The lounge uses a guest menu and one large portrait, rather than a card grid.
document.body.classList.add('lounge-layout');
document.querySelector('.cabinet-tools').hidden=true;
document.querySelector('.topbar').insertAdjacentHTML('afterbegin','<a class="lounge-wordmark" href="#home">IBARA <i>Afterhours</i><span>CHARACTER LOUNGE</span></a>');
const loungeMemory={original:null,uchiyoso:null};
let loungeItems=[];
function paintGuest(slug){
 const c=loungeItems.find(c=>c.slug===slug);if(!c)return;
 loungeMemory[activeSection()]=slug;
 document.querySelectorAll('.guest-choice').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.guest===slug)));
 const n=loungeItems.indexOf(c), stage=document.getElementById('lounge-stage');
 stage.innerHTML=`<div class="portrait-frame"><img class="guest-portrait" src="${c.image}" alt="${c.alt}"><span class="portrait-corner">NO. ${c.number}</span></div><div class="guest-story"><p class="guest-kicker">TONIGHT’S COMPANY <span>${String(n+1).padStart(2,'0')} / ${String(loungeItems.length).padStart(2,'0')}</span></p><h2>${c.en}<small>${c.ja}</small></h2><p class="guest-catch">${c.catch}</p><p class="guest-intro">${c.intro}</p><a class="guest-open" href="#${c.slug}">プロフィール・プロンプトを見る <span>↗</span></a><div class="guest-controls"><button type="button" data-step="-1" aria-label="前のキャラクター">←</button><span>ANOTHER STORY</span><button type="button" data-step="1" aria-label="次のキャラクター">→</button><button type="button" id="guest-shuffle">偶然の出会い ⤨</button></div></div>`;
 stage.querySelectorAll('[data-step]').forEach(b=>b.addEventListener('click',()=>paintGuest(loungeItems[(n+Number(b.dataset.step)+loungeItems.length)%loungeItems.length].slug)));
 stage.querySelector('#guest-shuffle').addEventListener('click',()=>{if(loungeItems.length<2)return;paintGuest(loungeItems[(n+1+Math.floor(Math.random()*(loungeItems.length-1)))%loungeItems.length].slug)});
}
renderGrid=function(items=sectionCharacters()){
 loungeItems=items;document.getElementById('result-count').textContent=String(items.length).padStart(2,'0');document.getElementById('empty-state').hidden=items.length>0;
 const grid=document.getElementById('character-grid');
 grid.innerHTML=items.length?`<aside class="guest-menu"><div class="guest-menu-heading"><span>THE GUEST LIST</span><small>名前を選んで、ひとつの物語へ。</small></div><div class="guest-choices" role="group" aria-label="表示するキャラクター">${items.map(c=>`<button type="button" class="guest-choice" data-guest="${c.slug}" aria-pressed="false"><span class="guest-no">${c.number}</span><span class="guest-choice-name">${c.ja}<small>${c.en}</small></span><span class="guest-dot">↗</span></button>`).join('')}</div><p class="guest-menu-foot">Every soul has a story.<br><span>一杯の余韻のように、ゆっくりと。</span></p></aside><div id="lounge-stage" class="lounge-stage" aria-live="polite"></div>`:'';
 grid.querySelectorAll('[data-guest]').forEach(b=>b.addEventListener('click',()=>paintGuest(b.dataset.guest)));
 if(items.length)paintGuest(items.some(c=>c.slug===loungeMemory[activeSection()])?loungeMemory[activeSection()]:items[0].slug);
};
renderGrid();
