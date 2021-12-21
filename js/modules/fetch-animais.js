import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {


  // cria a div contendo informações
  // com o total de animais
  function createAnimal(animais) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animais.animal}</h3><span data-numero>${animais.total}</span>`;
    return div;
  }

  // Preenche cada animal no Dom
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal){
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }


  // anima os números de cada animal
  function animaisNumeros(){
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }


  // puxa os animais através de um arquivo JSON
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch, espera a resposta e transforma em Json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de Json, ativa as funções
      // para preencher e animar os números
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais ();
}
