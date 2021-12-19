export default function scrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="scroll-suave"] a[href^="#"]');
  function suaveScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sections = document.querySelector(href);
    sections.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  if (linksInternos.length) {
    linksInternos.forEach((links) => {
      links.addEventListener('click', suaveScroll);
    });
  }
}
