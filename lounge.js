(()=>{
const main=document.querySelector('main');
const header=document.createElement('header');header.className='editorial-header';header.innerHTML='<a class="wordmark" href="#home" aria-label="IBARA トップ">IBARA<i>.</i></a><div class="header-meta"><span>CHARACTER ARCHIVE<br>OC / OUR WORLD</span><a href="./">現在のサイトへ ↗</a></div>';main.prepend(header);
const footer=document.createElement('div');footer.className='editorial-footer';footer.innerHTML='<span>IBARA.</span><span>CHARACTER ARCHIVE</span><span>2026</span>';main.append(footer);
const strip=document.createElement('div');strip.className='editorial-strip';strip.setAttribute('aria-hidden','true');document.querySelector('.archive-heading').append(strip);
const heading=document.querySelector('.archive-heading h1');
function update(){const collab=activeSection()==='uchiyoso';heading.replaceChildren(document.createTextNode(collab?'OUR WORLD':'OC ARCHIVE'));const index=document.createElement('span');index.textContent=collab?'02':'01';heading.append(index);strip.replaceChildren(...sectionCharacters().slice(0,3).map(c=>{const wrap=document.createElement('div'),img=document.createElement('img');img.src=c.image;img.alt='';wrap.append(img);return wrap}));}
addEventListener('hashchange',update);update();
})();
