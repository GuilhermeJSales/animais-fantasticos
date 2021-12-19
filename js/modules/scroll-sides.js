export default function scrollEfeito() {
  const sections = document.querySelectorAll('[data-scroll="anima-scroll"]');
  const windowPercent = window.innerHeight * 0.7;
  function scrollEfect() {
    sections.forEach((section) => {
      const windowHeight = section.getBoundingClientRect().top;
      if ((windowHeight - windowPercent) < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    sections[0].classList.add('ativo');
    window.addEventListener('scroll', scrollEfect);
  }
}
