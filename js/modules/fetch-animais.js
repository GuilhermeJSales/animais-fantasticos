import animaNumeros from './anima-numeros.js';

export default function initAnimaisFetch() {
  function createAnimal(animais) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animais.animal}</h3><span data-numero>${animais.total}</span>`;
    return div;
  }

  async function animaisFetch(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach((animais) => {
        const divAnimal = createAnimal(animais);
        numerosGrid.appendChild(divAnimal);
      });
      animaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  animaisFetch('./animaisapi.json');
}
