(()=>{"use strict";class t{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observerTarget=document.querySelector(e),this.oberserverClass=i,this.handleMutation=this.handleMutation.bind(this)}static incrementarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let o=0;const s=setInterval((()=>{o+=i,t.innerText=o,o>e&&(t.innerText=e,clearInterval(s))}),25)}animaNumeros(){this.numeros.forEach((t=>this.constructor.incrementarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.oberserverClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observerTarget,{attributes:!0})}init(){return this.numeros.length&&this.observerTarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}adicionarEvento(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.adicionarEvento(),this}}('[data-menu="scroll-suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&(this.toggleAccordion(this.accordionList[0]),this.addAccordionEvent()),this}}('[data-faq="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] article').init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.container=document.querySelector(i),this.activeClass="ativo",this.eventToggleModal=this.eventToggleModal.bind(this),this.clicarForaModal=this.clicarForaModal.bind(this)}toggleModal(){this.container.classList.toggle(this.activeClass)}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clicarForaModal(t){t.preventDefault(),t.target===this.container&&this.toggleModal()}addModalEvent(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.container.addEventListener("click",this.clicarForaModal)}init(){return this.botaoAbrir&&this.botaoFechar&&this.container&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,t.pageX+240>window.innerWidth?this.tooltipBox.style.left=t.pageX-190+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addToolTipEvents(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addToolTipEvents(),this}}("[data-tooltip]").init(),function(e,i){const o=document.querySelector(".numeros-grid");!async function(){try{const e=await fetch("../../animaisapi.json");(await e.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.animal}</h3><span data-numero>${t.total}</span>`,e}(t);o.appendChild(e)}(t))),new t("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t)}}()}(),fetch("https://blockchain.info/ticker").then((t=>t.json())).then((t=>{document.querySelector(".btc-preco").innerText=(1e3/t.BRL.sell).toFixed(4)})).catch((t=>{console.log(t)})),new class{constructor(t){this.sections=document.querySelectorAll(t),this.windowPercent=.7*window.innerHeight,this.checkDistance=function(t,e){let i;return(...e)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...e),i=null}),50)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.windowPercent)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add("ativo"):t.element.classList.contains("ativo")&&t.element.classList.remove("ativo")}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-scroll="anima-scroll"]').init(),function(){const t=document.querySelector("[data-semana]"),e=t.dataset.semana.split(",").map(Number),i=t.dataset.horario.split(",").map(Number),o=new Date,s=o.getDay(),n=o.getUTCHours()-3,a=-1!==e.indexOf(s),r=n>=i[0]&&n<i[1];a&&r&&t.classList.add("aberto")}()})();