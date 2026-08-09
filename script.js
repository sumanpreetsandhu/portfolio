const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll('section[id]')];
const navItems=[...document.querySelectorAll('.nav-links a[href^="#"]')];
const activeObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navItems.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px'});
sections.forEach(s=>activeObserver.observe(s));

const projects={
 edu:{type:'01 / DIGITAL',title:'Educational Website',text:'Educational websites developed and managed using AI-assisted development tools, with attention to clear information structure and practical user experience.',tags:['Website Management','AI-assisted Development','Digital Content']},
 learning:{type:'02 / CONTENT',title:'Digital Learning Resources',text:'Digital learning materials and resources created to support training, communication and student engagement.',tags:['Learning Resources','Training Materials']},
 canva:{type:'03 / DESIGN',title:'Canva & Digital Content',text:'Posters, advertisements, catalogs and educational content created using Canva for digital communication and learning.',tags:['Canva','Digital Content']},
 it:{type:'04 / TRAINING',title:'Computer & IT Training',text:'Practical training activities covering computer fundamentals, digital literacy and computer-based learning.',tags:['Digital Literacy','Technical Support']}
};
const modal=document.getElementById('modal');
document.querySelectorAll('.project-link').forEach(link=>link.addEventListener('click',e=>{
 e.preventDefault();const p=projects[link.dataset.project];
 document.getElementById('modalType').textContent=p.type;
 document.getElementById('modalTitle').textContent=p.title;
 document.getElementById('modalText').textContent=p.text;
 document.getElementById('modalTags').innerHTML=p.tags.map(t=>`<span>${t}</span>`).join('');
 modal.classList.add('open');
}));
document.getElementById('modalClose').addEventListener('click',()=>modal.classList.remove('open'));
document.querySelector('.modal-backdrop').addEventListener('click',()=>modal.classList.remove('open'));
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});

const glow=document.querySelector('.cursor-glow');
document.addEventListener('pointermove',e=>{
  if(window.innerWidth>900){
    glow.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
  }
});
