document.body.classList.add('neon-archive');
document.querySelector('.topbar').insertAdjacentHTML('afterbegin','<a class="neon-brand" href="#home"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 38C7 34 6 17 15 12c2-8 15-9 19-2 11 3 13 19 3 25-4 3-9 4-13 3Z M15 12c0 12 9 18 20 14 M34 10c-12-2-18 7-14 15 4 8 14 8 18 1 M12 23c0 8 7 13 16 12 M19 16c4-5 12-4 14 2-1 6-7 10-13 7 M24 38v8 M24 42c-8 1-11-3-11-6 6 0 10 3 11 6 M25 43c8 0 12-4 12-8-7 1-11 4-12 8"/></svg>IBARA<span>ARCHIVE</span></a>');
document.querySelector('.archive-sections').innerHTML='<a href="#home" data-section="all">すべて<small>13</small></a><a href="#oc" data-section="original">OC<small>07</small></a><a href="#uchiyoso" data-section="uchiyoso">OUR WORLD<small>06</small></a>';
sectionCharacters=function(){return location.hash==='#uchiyoso'?characters.filter(c=>c.section==='uchiyoso'):location.hash==='#oc'?characters.filter(c=>c.section!=='uchiyoso'):characters};
updateSectionLinks=function(){const selected=location.hash==='#uchiyoso'?'uchiyoso':location.hash==='#oc'?'original':'all';document.querySelectorAll('.archive-sections a').forEach(a=>{a.toggleAttribute('aria-current',a.dataset.section===selected);if(a.dataset.section===selected)a.setAttribute('aria-current','page');a.querySelector('small').textContent=String(a.dataset.section==='all'?characters.length:characters.filter(c=>(c.section||'original')===a.dataset.section).length).padStart(2,'0')});};
renderGrid=function(items=sectionCharacters()){
 document.getElementById('character-grid').innerHTML=items.map((c,i)=>`<a class="character-card" href="#${c.slug}" aria-label="${c.ja}のプロフィールを見る" style="--order:${i}"><div class="card-image"><img src="${c.image}" alt="${c.alt}" loading="${i<4?'eager':'lazy'}"><span class="card-number">${c.number}</span><span class="card-section">${c.section==='uchiyoso'?'OUR WORLD':'OC'}</span></div><div class="card-copy"><p>${c.ja}<small>${c.en}</small></p><b aria-hidden="true">↗</b></div></a>`).join('');
 document.getElementById('result-count').textContent=String(items.length).padStart(2,'0');document.getElementById('empty-state').hidden=items.length>0;
};
function neonLabels(){
 document.querySelector('.archive-heading').hidden=true;
 document.querySelector('.archive-heading h1').textContent='';
 document.querySelector('.archive-heading .eyebrow').textContent='';
 document.querySelector('.archive-copy').textContent='';
 document.querySelector('footer').innerHTML='<span>IBARA</span><a href="#home">↑ TOP</a>';
 document.title=(document.getElementById('home-view').hidden?document.getElementById('detail-name-ja').textContent+' — ':'')+'IBARA';updateSectionLinks();
}
renderGrid();neonLabels();addEventListener('hashchange',neonLabels);
