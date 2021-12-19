export default function tabNavigation() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] article');

  function tabNav(i) {
    tabContent.forEach((article) => {
      article.classList.remove('ativo');
    });
    const direcao = tabContent[i].dataset.anime;
    tabContent[i].classList.add('ativo', direcao);
  }

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    tabMenu.forEach((imgs, index) => {
      imgs.addEventListener('click', () => {
        tabNav(index);
      });
    });
  }
}
