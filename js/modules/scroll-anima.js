export default class ScrollAnima {
  constructor(sections){
  this.sections = document.querySelectorAll(sections);
  this.windowPercent = window.innerHeight * 0.7;

  this.checkDistance = this.checkDistance.bind(this)
}

  // pega a distância de cada item
  // em relacao ao top do site
  getDistance(){
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowPercent),
      };
    });
  }

  // verifica a distancia em cada objeto
  // em relacao ao scroll do site
  checkDistance(){
    this.distance.forEach((item) => {
      if ((window.pageYOffset > item.offset)) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    })
  }

  init(){
    if (this.sections.length){
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;    
  }

  // remove o event de scroll
  stop(){
    window.removeEventListener('scroll', this.checkDistance);

  }
 
}
