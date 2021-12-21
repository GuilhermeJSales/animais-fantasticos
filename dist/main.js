/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion-list.js":
/*!**************************************!*\
  !*** ./js/modules/accordion-list.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list){\r\n   this.accordionList = document.querySelectorAll(list);\r\n   this.activeClass = 'ativo';\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  addAccordionEvent(){\r\n    this.accordionList.forEach((item) => {\r\n      item.addEventListener('click', ()=> this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  init(){\r\n    if (this.accordionList.length) {\r\n      this.toggleAccordion(this.accordionList[0]);\r\n      this.addAccordionEvent();    \r\n    }\r\n    return this;  \r\n  }    \r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/accordion-list.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\r\n  constructor(numeros,observerTarget, observerClass){\r\n  this.numeros = document.querySelectorAll(numeros);\r\n  this.observerTarget = document.querySelector (observerTarget);\r\n  this.oberserverClass = observerClass;\r\n\r\n  // bin do this do objeto ao callback da mutacao\r\n  this.handleMutation = this.handleMutation.bind(this)\r\n  }\r\n\r\n  // Recebe um elemento do Dom, com número em seu texto\r\n  // incrementa a partir do 0 até o número final\r\n  static incrementarNumero(numero){\r\n    const total = +numero.innerText;\r\n    const incremento = Math.floor(total / 100);\r\n    let start = 0;\r\n    const timer = setInterval(() => {\r\n      start += incremento;\r\n      numero.innerText = start;\r\n      if (start > total) {\r\n        numero.innerText = total;\r\n        clearInterval(timer);\r\n      }\r\n    }, 25);\r\n  }\r\n\r\n  // ativa incrementar número para cada número selecionado do Dom\r\n  animaNumeros() {\r\n    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));  \r\n  }\r\n\r\n  // Função que ocorre quando a mutação ocorrer\r\n  handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains(this.oberserverClass)) {\r\n      this.observer.disconnect();\r\n      this.animaNumeros();\r\n    }\r\n  }\r\n\r\n  // adiciona o MutationObserver para verificar\r\n  // quando a classe ativo é adicionado ao elemento target\r\n  addMutationObserver() {\r\n    this.observer = new MutationObserver(this.handleMutation);\r\n    this.observer.observe(this.observerTarget, { attributes: true });\r\n  }\r\n\r\n  init(){\r\n    if (this.numeros.length && this.observerTarget){\r\n    this.addMutationObserver();\r\n    }\r\n    return this;\r\n  }  \r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/fetch-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fetch-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\r\n\r\nfunction fetchAnimais(url, target) {\r\n\r\n\r\n  // cria a div contendo informações\r\n  // com o total de animais\r\n  function createAnimal(animais) {\r\n    const div = document.createElement('div');\r\n    div.classList.add('numero-animal');\r\n    div.innerHTML = `<h3>${animais.animal}</h3><span data-numero>${animais.total}</span>`;\r\n    return div;\r\n  }\r\n\r\n  // Preenche cada animal no Dom\r\n  const numerosGrid = document.querySelector(target);\r\n  function preencherAnimais(animal){\r\n    const divAnimal = createAnimal(animal);\r\n    numerosGrid.appendChild(divAnimal);\r\n  }\r\n\r\n\r\n  // anima os números de cada animal\r\n  function animaisNumeros(){\r\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]', '.numeros', 'ativo');\r\n    animaNumeros.init();\r\n  }\r\n\r\n\r\n  // puxa os animais através de um arquivo JSON\r\n  // e cria cada animal utilizando createAnimal\r\n  async function criarAnimais() {\r\n    try {\r\n      // Fetch, espera a resposta e transforma em Json\r\n      const animaisResponse = await fetch(url);\r\n      const animaisJSON = await animaisResponse.json();\r\n\r\n      // Após a transformação de Json, ativa as funções\r\n      // para preencher e animar os números\r\n      animaisJSON.forEach(animal => preencherAnimais(animal));\r\n      animaisNumeros();\r\n    } catch (erro) {\r\n      console.log(erro);\r\n    }\r\n  }\r\n  return criarAnimais ();\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetch-animais.js?");

/***/ }),

/***/ "./js/modules/fetchbitcoin.js":
/*!************************************!*\
  !*** ./js/modules/fetchbitcoin.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\r\n  fetch(url)\r\n  .then((response) => response.json())\r\n  .then((json) => {\r\n    const btcPreco = document.querySelector('.btc-preco');\r\n    btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);\r\n  }).catch((erro) => {\r\n    console.log(erro);\r\n  });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/fetchbitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]');\n\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getUTCHours() - 3;\n  const semanaAberto = (diasSemana.indexOf(diaAgora) !== -1);\n  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/init-modal.js":
/*!**********************************!*\
  !*** ./js/modules/init-modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir, botaoFechar, container){\r\n  this.botaoAbrir = document.querySelector(botaoAbrir);\r\n  this.botaoFechar = document.querySelector(botaoFechar);\r\n  this.container = document.querySelector(container);\r\n  this.activeClass = 'ativo'\r\n  this.eventToggleModal = this.eventToggleModal.bind(this)\r\n  this.clicarForaModal = this.clicarForaModal.bind(this)\r\n  }\r\n\r\n  toggleModal() {\r\n    this.container.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  eventToggleModal(event){\r\n    event.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  clicarForaModal(event) {\r\n    event.preventDefault();\r\n    if (event.target === this.container) {\r\n      this.toggleModal();\r\n    }\r\n  }\r\n\r\n  addModalEvent(){\r\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n    this.container.addEventListener('click', this.clicarForaModal);\r\n  }\r\n\r\n  init(){\r\n    if (this.botaoAbrir && this.botaoFechar && this.container){\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n\r\n \r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/init-modal.js?");

/***/ }),

/***/ "./js/modules/scroll-sides.js":
/*!************************************!*\
  !*** ./js/modules/scroll-sides.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ scrollEfeito)\n/* harmony export */ });\nfunction scrollEfeito() {\n  const sections = document.querySelectorAll('[data-scroll=\"anima-scroll\"]');\n  const windowPercent = window.innerHeight * 0.7;\n  function scrollEfect() {\n    sections.forEach((section) => {\n      const windowHeight = section.getBoundingClientRect().top;\n      if ((windowHeight - windowPercent) < 0) {\n        section.classList.add('ativo');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativo');\n      }\n    });\n  }\n  if (sections.length) {\n    sections[0].classList.add('ativo');\n    window.addEventListener('scroll', scrollEfect);\n  }\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-sides.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options){\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) { \r\n      this.options = { behavior: 'smooth', block: 'start', };  \r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this)\r\n  }\r\n  \r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const sections = document.querySelector(href);\r\n    sections.scrollIntoView(this.options);\r\n  }\r\n\r\n  adicionarEvento(){\r\n    this.linksInternos.forEach((links) => {\r\n      links.addEventListener('click', this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init(){\r\n    if (this.linksInternos.length){\r\n    this.adicionarEvento();\r\n  }\r\n    return this;   \r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tab-navigation.js":
/*!**************************************!*\
  !*** ./js/modules/tab-navigation.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\r\n  constructor(menu, content){\r\n  this.tabMenu = document.querySelectorAll(menu);\r\n  this.tabContent = document.querySelectorAll(content);\r\n   this.activeClass = 'ativo';\r\n  }\r\n\r\n  activeTab(index) {\r\n    this.tabContent.forEach((article) => {\r\n      article.classList.remove(this.activeClass);\r\n    });\r\n    const direcao = this.tabContent[index].dataset.anime;\r\n    this.tabContent[index].classList.add(this.activeClass, direcao);\r\n  }\r\n\r\n  addTabNavEvent(){\r\n    this.tabMenu.forEach((item, index) => {\r\n      item.addEventListener('click', () => this.activeTab(index));\r\n    });\r\n  }\r\n\r\n  init(){\r\n    if (this.tabMenu.length && this.tabContent.length) {\r\n      this.activeTab(0);\r\n      this.addTabNavEvent();\r\n    }\r\n    return this;\r\n  }\r\n\r\n  \r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tab-navigation.js?");

/***/ }),

/***/ "./js/modules/tool-tip.js":
/*!********************************!*\
  !*** ./js/modules/tool-tip.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\r\n  constructor(tooltips){\r\n  this.tooltips = document.querySelectorAll(tooltips);\r\n  // bind do objeto das classes aos callbacks\r\n  this.onMouseLeave = this.onMouseLeave.bind(this);\r\n  this.onMouseMove = this.onMouseMove.bind(this);\r\n  this.onMouseOver = this.onMouseOver.bind(this);\r\n}\r\n\r\n  // move a tooltip com base em seus estilos\r\n  // de acordo com a posição do mouse\r\n  onMouseMove(event) {\r\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\r\n    if (event.pageX + 240 > window.innerWidth){    \r\n    this.tooltipBox.style.left = `${event.pageX - 190}px`;\r\n  } else {\r\n  this.tooltipBox.style.left = `${event.pageX + 20}px`;\r\n  }\r\n}\r\n\r\n  // remove a tooltip e os evento de mouseMove e MouseLeave\r\n  onMouseLeave({currentTarget}) {\r\n    this.tooltipBox.remove();\r\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\r\n    currentTarget.removeEventListener('mousemove', this.onMouseMove);\r\n  }\r\n\r\n\r\n  // cria a tooltip e adiciona os eventos de \r\n  // mousemove e mouseleave ao target.\r\n  criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div');\r\n    const text = element.getAttribute('aria-label');\r\n    tooltipBox.classList.add('tooltip');\r\n    tooltipBox.innerText = text;\r\n    document.body.appendChild(tooltipBox);\r\n    this.tooltipBox = tooltipBox;\r\n  }\r\n\r\n  // cria tooltipbox e coloca em uma propriedade.\r\n   onMouseOver({currentTarget}) {     \r\n    this.criarTooltipBox(currentTarget);\r\n    currentTarget.addEventListener('mousemove', this.onMouseMove);\r\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\r\n  }\r\n\r\n\r\n  // adiciona os eventos de mouseOver a cada tooltip\r\n  addToolTipEvents(){\r\n    this.tooltips.forEach((item) => {\r\n      item.addEventListener('mouseover', this.onMouseOver);\r\n    });\r\n  }\r\n    \r\n    init(){\r\n     if (this.tooltips.length){\r\n        this.addToolTipEvents();\r\n     }      \r\n      return this;\r\n    }\r\n  }\r\n\r\n \r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/modules/tool-tip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion-list.js */ \"./js/modules/accordion-list.js\");\n/* harmony import */ var _modules_tab_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-navigation.js */ \"./js/modules/tab-navigation.js\");\n/* harmony import */ var _modules_init_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/init-modal.js */ \"./js/modules/init-modal.js\");\n/* harmony import */ var _modules_tool_tip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tool-tip.js */ \"./js/modules/tool-tip.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetchbitcoin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetchbitcoin.js */ \"./js/modules/fetchbitcoin.js\");\n/* harmony import */ var _modules_scroll_sides_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll-sides.js */ \"./js/modules/scroll-sides.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"scroll-suave\"] a[href^=\"#\"]');\r\nscrollSuave.init()\r\n\r\nconst accordion = new _modules_accordion_list_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-faq=\"accordion\"] dt');\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tab_navigation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] article');\r\ntabNav.init();\r\n\r\nconst modal = new _modules_init_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\r\nmodal.init();\r\n\r\nconst toolTip = new _modules_tool_tip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]');\r\ntoolTip.init()\r\n\r\n;(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('../../animaisapi.json', '.numeros-grid');\r\n\r\n(0,_modules_fetchbitcoin_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('https://blockchain.info/ticker', '.btc-preco');\r\n\r\n(0,_modules_scroll_sides_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;