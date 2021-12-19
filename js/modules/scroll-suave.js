export default class ScrollSuave {
  constructor(links, options){
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) { 
      this.options = { behavior: 'smooth', block: 'start', };  
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this)
  }
  
  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const sections = document.querySelector(href);
    sections.scrollIntoView(this.options);
  }

  adicionarEvento(){
    this.linksInternos.forEach((links) => {
      links.addEventListener('click', this.scrollToSection);
    });
  }

  init(){
    if (this.linksInternos.length){
    this.adicionarEvento();
  }
    return this;   
  }
}
