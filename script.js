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
