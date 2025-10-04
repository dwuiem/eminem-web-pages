// script.js — интерактивность
document.addEventListener('DOMContentLoaded', function(){
  // Кнопка — смена фона (тёмная / светлая акцентная)
  const btn = document.getElementById('colorToggle');
  if(btn){
    btn.addEventListener('click', function(){
      const root = document.documentElement;
      const current = getComputedStyle(root).getPropertyValue('--bg').trim();
      if(current === '#0f1724'){
        root.style.setProperty('--bg', '#fff7f9');
        root.style.setProperty('--text', '#071021');
        root.style.setProperty('--card', '#fff');
        root.style.setProperty('--muted', '#334155');
        root.style.setProperty('--accent', '#ff3d81');
      } else {
        // вернуть дефолт
        root.style.setProperty('--bg', '#0f1724');
        root.style.setProperty('--text', '#e6eef8');
        root.style.setProperty('--card', '#0b1220');
        root.style.setProperty('--muted', '#9fb0c8');
        root.style.setProperty('--accent', '#ff6ec7');
      }
    });
  }

  // Кнопка в галерее — показать/скрыть доп. информацию
  const more = document.getElementById('moreInfo');
  const extra = document.getElementById('extra');
  if(more && extra){
    more.addEventListener('click', function(){
      const isHidden = extra.classList.toggle('hidden');
      // aria
      extra.setAttribute('aria-hidden', isHidden ? 'true' : 'false');
      more.textContent = isHidden ? 'Показать дополнительную информацию' : 'Скрыть';
    });
  }
});
