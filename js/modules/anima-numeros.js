export default class AnimaNumeros {
  constructor(numeros,observerTarget, observerClass){
  this.numeros = document.querySelectorAll(numeros);
  this.observerTarget = document.querySelector (observerTarget);
  this.oberserverClass = observerClass;

  // bin do this do objeto ao callback da mutacao
  this.handleMutation = this.handleMutation.bind(this)
  }

  // Recebe um elemento do Dom, com número em seu texto
  // incrementa a partir do 0 até o número final
  static incrementarNumero(numero){
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25);
  }

  // ativa incrementar número para cada número selecionado do Dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));  
  }

  // Função que ocorre quando a mutação ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.oberserverClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // adiciona o MutationObserver para verificar
  // quando a classe ativo é adicionado ao elemento target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init(){
    if (this.numeros.length && this.observerTarget){
    this.addMutationObserver();
    }
    return this;
  }  
}

