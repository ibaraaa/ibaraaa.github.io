document.body.classList.add('neon-archive');
document.querySelector('.topbar').insertAdjacentHTML('afterbegin','<a class="neon-brand" href="#home">IBARA<span>Afterhours</span></a>');
document.querySelector('.topbar-right').innerHTML='<i></i> OPEN AFTER DARK';
document.querySelector('.archive-sections').innerHTML='<a href="#home" data-section="all">すべて<small>13</small></a><a href="#oc" data-section="original">OC<small>07</small></a><a href="#uchiyoso" data-section="uchiyoso">OUR WORLD<small>06</small></a>';
document.querySelector('.filter-row').insertAdjacentHTML('afterbegin','<button id="neon-random" type="button">偶然の出会い <span>↗</span></button>');
document.getElementById('neon-random').addEventListener('click',()=>{const list=sectionCharacters();location.hash=list[Math.floor(Math.random()*list.length)].slug});
sectionCharacters=function(){return location.hash==='#uchiyoso'?characters.filter(c=>c.section==='uchiyoso'):location.hash==='#oc'?characters.filter(c=>c.section!=='uchiyoso'):characters};
updateSectionLinks=function(){const selected=location.hash==='#uchiyoso'?'uchiyoso':location.hash==='#oc'?'original':'all';document.querySelectorAll('.archive-sections a').forEach(a=>{a.toggleAttribute('aria-current',a.dataset.section===selected);if(a.dataset.section===selected)a.setAttribute('aria-current','page');a.querySelector('small').textContent=String(a.dataset.section==='all'?characters.length:characters.filter(c=>(c.section||'original')===a.dataset.section).length).padStart(2,'0')});};
renderGrid=function(items=sectionCharacters()){
 document.getElementById('character-grid').innerHTML=items.map((c,i)=>`<a class="character-card" href="#${c.slug}" aria-label="${c.ja}のプロフィールを見る" style="--order:${i}"><div class="card-image"><img src="${c.image}" alt="${c.alt}" loading="${i<4?'eager':'lazy'}"><span class="card-number">${c.number}</span><span class="card-section">${c.section==='uchiyoso'?'OUR WORLD':'OC'}</span><span class="card-invitation">物語をひらく ↗</span></div><div class="card-copy"><p>${c.ja}<small>${c.en}</small></p><b aria-hidden="true">↗</b></div><div class="card-tags">${c.tags.slice(0,2).map(t=>`<span>${t}</span>`).join('')}</div></a>`).join('');
 document.getElementById('result-count').textContent=String(items.length).padStart(2,'0');document.getElementById('empty-state').hidden=items.length>0;
};
function neonLabels(){
 document.querySelector('.archive-heading .eyebrow').textContent='THE CHARACTER COLLECTION / BY 茨';
 document.querySelector('.archive-heading h1').innerHTML='夜に咲く、<em>物語。</em>';
 document.querySelector('.archive-copy').innerHTML='気になる顔から、物語の奥へ。<br><span>Pick a face. Find a story.</span>';
 document.querySelector('.topbar-right').innerHTML='<i></i> OPEN AFTER DARK';
 document.querySelector('footer').innerHTML='<span>IBARA AFTERHOURS <i>✧</i> CHARACTER ARCHIVE</span><span>Curated by 茨 · 2026</span>';
 document.title=(document.getElementById('home-view').hidden?document.getElementById('detail-name-ja').textContent+' — ':'')+'Ibara Afterhours';updateSectionLinks();
}
renderGrid();neonLabels();addEventListener('hashchange',neonLabels);
