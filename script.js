document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('toggleFact');
  const factText = document.getElementById('factText');

  if (button && factText) {
    button.addEventListener('click', () => {
      factText.classList.toggle('hidden');
      factText.classList.toggle('show');

      if(factText.classList.contains('show')){
        button.textContent = 'Скрыть фан факт';
      } else {
        button.textContent = 'Показать фан факт';
      }
    });
  }

  const more = document.getElementById('moreInfo');
  const extra = document.getElementById('extra');

  if(more && extra){
    more.addEventListener('click', function(){
      const isHidden = extra.classList.toggle('hidden');
      extra.setAttribute('aria-hidden', isHidden ? 'true' : 'false');
      more.textContent = isHidden ? 'Показать дополнительную информацию' : 'Скрыть';
    });
  }
});

// Кнопки "развернуть" для биографии
document.querySelectorAll('.reveal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    const hidden = target.classList.toggle('hidden');
    btn.textContent = hidden ? 'Показать больше' : 'Скрыть';
  });
});

// Появление блоков при скролле
const faders = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

faders.forEach(el => observer.observe(el));

