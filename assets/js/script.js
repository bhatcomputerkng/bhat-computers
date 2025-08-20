
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    if(a.getAttribute('href') === path){ a.classList.add('active'); }
  });
})();
(function(){
  const tiles = Array.from(document.querySelectorAll('.gallery .tile img'));
  if(!tiles.length) return;
  const lb = document.querySelector('.lightbox');
  const lbImg = lb.querySelector('img');
  const prev = lb.querySelector('[data-prev]');
  const next = lb.querySelector('[data-next]');
  const closeBtn = lb.querySelector('[data-close]');
  let idx = 0;
  function open(i){ idx=i; lbImg.src = tiles[idx].src; lb.classList.add('open'); }
  function move(d){ idx=(idx+d+tiles.length)%tiles.length; lbImg.src = tiles[idx].src; }
  tiles.forEach((img,i)=> img.addEventListener('click', ()=> open(i)));
  prev.addEventListener('click', ()=> move(-1));
  next.addEventListener('click', ()=> move(+1));
  closeBtn.addEventListener('click', ()=> lb.classList.remove('open'));
  lb.addEventListener('click', (e)=>{ if(e.target===lb) lb.classList.remove('open'); });
  window.addEventListener('keydown', (e)=>{
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape') lb.classList.remove('open');
    if(e.key==='ArrowRight') move(+1);
    if(e.key==='ArrowLeft') move(-1);
  });
})();
document.querySelectorAll('.faq-item .faq-q').forEach(q=>{
  q.addEventListener('click', ()=> q.parentElement.classList.toggle('open'));
});
