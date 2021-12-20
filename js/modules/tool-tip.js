export default class ToolTip {
  constructor(tooltips){
  this.tooltips = document.querySelectorAll(tooltips);
  // bind do objeto das classes aos callbacks
  this.onMouseLeave = this.onMouseLeave.bind(this);
  this.onMouseMove = this.onMouseMove.bind(this);
  this.onMouseOver = this.onMouseOver.bind(this);
}

  // move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth){    
    this.tooltipBox.style.left = `${event.pageX - 190}px`;
  } else {
  this.tooltipBox.style.left = `${event.pageX + 20}px`;
  }
}

  // remove a tooltip e os evento de mouseMove e MouseLeave
  onMouseLeave({currentTarget}) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }


  // cria a tooltip e adiciona os eventos de 
  // mousemove e mouseleave ao target.
  criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // cria tooltipbox e coloca em uma propriedade.
   onMouseOver({currentTarget}) {     
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener('mousemove', this.onMouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }


  // adiciona os eventos de mouseOver a cada tooltip
  addToolTipEvents(){
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }
    
    init(){
     if (this.tooltips.length){
        this.addToolTipEvents();
     }      
      return this;
    }
  }

 

