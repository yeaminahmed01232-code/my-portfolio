const links = document.querySelectorAll('.nav-links a');
const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle(
        'active',
        link.getAttribute('href') === '#' + entry.target.id
      ));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

const revealItems=document.querySelectorAll('.reveal');
const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}
  });
},{threshold:.12});
revealItems.forEach(el=>revealObserver.observe(el));

const glow=document.querySelector('.cursor-glow');
if(glow && matchMedia('(min-width:801px)').matches){
  addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px';});
}
const visual=document.querySelector('.hero-visual');
if(visual && matchMedia('(min-width:801px)').matches){
  visual.addEventListener('mousemove',e=>{
    const r=visual.getBoundingClientRect(),x=((e.clientX-r.left)/r.width-.5)*7,y=((e.clientY-r.top)/r.height-.5)*7;
    visual.style.transform=`translate(${x}px,${y}px)`;
  });
  visual.addEventListener('mouseleave',()=>visual.style.transform='');
}
