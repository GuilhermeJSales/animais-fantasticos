export default function accordionLista() {
  const accordionList = document.querySelectorAll('[data-faq="accordion"] dt');

  function accordeon() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  if (accordionList.length) {
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    accordionList.forEach((item) => {
      item.addEventListener('click', accordeon);
    });
  }
}
