export default class ScrollAnima {
  constructor(sections){
  this.sections = document.querySelectorAll(sections);
  this.windowPercent = window.innerHeight * 0.7;

  this.scrollEfect = this.scrollEfect.bind(this)
}

   scrollEfect() {
    this.sections.forEach((section) => {
      const windowHeight = section.getBoundingClientRect().top;
      if ((windowHeight - this.windowPercent) < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init(){
    this.scrollEfect();
    window.addEventListener('scroll', this.scrollEfect);
    
  }
 
}
