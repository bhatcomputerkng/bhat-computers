
document.addEventListener('DOMContentLoaded', () => {
  // FAQ toggle
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('show'));
  });

  // Lightbox with navigation
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  const img = document.createElement('img');
  overlay.appendChild(img);

  const prev = document.createElement('div');
  prev.className = 'lightbox-arrow prev';
  prev.innerHTML = '&#10094;'; // Left arrow
  overlay.appendChild(prev);

  const next = document.createElement('div');
  next.className = 'lightbox-arrow next';
  next.innerHTML = '&#10095;'; // Right arrow
  overlay.appendChild(next);

  document.body.appendChild(overlay);

  const links = Array.from(document.querySelectorAll('a.lightbox'));
  let currentIndex = -1;

  function showImage(index) {
    if (index < 0) index = links.length - 1;
    if (index >= links.length) index = 0;
    currentIndex = index;
    img.src = links[index].href;
    overlay.classList.add('active');
  }

  links.forEach((link, i) => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showImage(i);
    });
  });

  prev.addEventListener('click', e => {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });
  next.addEventListener('click', e => {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    if (e.key === 'Escape') overlay.classList.remove('active');
  });
});
