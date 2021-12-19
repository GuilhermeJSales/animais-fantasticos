export default function initModal() {
  const abrir = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');
  const container = document.querySelector('[data-modal="container"]');

  function toggleModal(event) {
    event.preventDefault();
    container.classList.toggle('ativo');
  }

  function clicarForaModal(event) {
    event.preventDefault();
    if (event.target === this) {
      container.classList.remove('ativo');
    }
  }

  abrir.addEventListener('click', toggleModal);
  fechar.addEventListener('click', toggleModal);
  container.addEventListener('click', clicarForaModal);
}
