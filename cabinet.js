document.querySelector('.brand').innerHTML='Ibara<span> /</span><br> Cabinet.';
document.querySelector('.mobile-brand').textContent='Ibara Cabinet.';
document.querySelector('.sidebar-caption').innerHTML='PERSONAL COLLECTION<br>創作人物の収蔵室';
document.querySelector('.sidebar-footer b').textContent='I.';
document.querySelector('footer').innerHTML='<span>IBARA CABINET / CHARACTER COLLECTION</span><span>Curated by 茨 · 2026</span>';
const toolsBar=document.createElement('div');toolsBar.className='cabinet-tools';toolsBar.innerHTML='<button type="button" id="cabinet-random">偶然の出会い ↗</button><button type="button" id="cabinet-density" aria-pressed="false">小さく並べる</button>';document.querySelector('.filter-row').insertBefore(toolsBar,document.querySelector('.filter-row label'));
document.getElementById('cabinet-random').addEventListener('click',()=>{const items=sectionCharacters();if(items.length)location.hash=items[Math.floor(Math.random()*items.length)].slug});
document.getElementById('cabinet-density').addEventListener('click',e=>{const compact=document.body.classList.toggle('compact');e.currentTarget.setAttribute('aria-pressed',String(compact));e.currentTarget.textContent=compact?'大きく並べる':'小さく並べる'});
function cabinetLabels(){
 const heading=document.querySelector('.archive-heading h1'),copy=document.querySelector('.archive-copy');
 heading.innerHTML=activeSection()==='uchiyoso'?'Shared stories.<span> / II</span>':'Characters.<span> / I</span>';
 copy.innerHTML='ここに収めた、いくつもの気配。<br><span>Choose a portrait. Open a story.</span>';
 document.querySelector('.archive-heading .eyebrow').textContent=activeSection()==='uchiyoso'?'COLLECTION II / OUR WORLD':'THE CHARACTER COLLECTION';
 document.querySelectorAll('.card-copy small').forEach(el=>el.textContent=el.textContent.split(' · ')[0]);
 document.querySelectorAll('.card-copy b').forEach(el=>el.textContent='記録を開く ↗');
 document.querySelector('.topbar-right').textContent='IBARA / CABINET';
 document.title=(document.getElementById('home-view').hidden?document.getElementById('detail-name-ja').textContent+' — ':'')+'Ibara Cabinet';
}
cabinetLabels();addEventListener('hashchange',cabinetLabels);document.getElementById('search').addEventListener('input',cabinetLabels);
