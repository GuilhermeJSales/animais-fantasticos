export default class Modal {
  constructor(botaoAbrir, botaoFechar, container){
  this.botaoAbrir = document.querySelector(botaoAbrir);
  this.botaoFechar = document.querySelector(botaoFechar);
  this.container = document.querySelector(container);
  this.activeClass = 'ativo'
  this.eventToggleModal = this.eventToggleModal.bind(this)
  this.clicarForaModal = this.clicarForaModal.bind(this)
  }

  toggleModal() {
    this.container.classList.toggle(this.activeClass);
  }

  eventToggleModal(event){
    event.preventDefault();
    this.toggleModal();
  }

  clicarForaModal(event) {
    event.preventDefault();
    if (event.target === this.container) {
      this.toggleModal();
    }
  }

  addModalEvent(){
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.container.addEventListener('click', this.clicarForaModal);
  }

  init(){
    if (this.botaoAbrir && this.botaoFechar && this.container){
      this.addModalEvent();
    }
    return this;
  }

 
}
