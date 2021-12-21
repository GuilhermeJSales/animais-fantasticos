import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-navigation.js';
import Modal from './modules/init-modal.js';
import ToolTip from './modules/tool-tip.js';
import scrollEfeito from './modules/scroll-sides.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetchbitcoin.js';


const scrollSuave = new ScrollSuave('[data-menu="scroll-suave"] a[href^="#"]');
scrollSuave.init()

const accordion = new Accordion('[data-faq="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] article');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const toolTip = new ToolTip('[data-tooltip]');
toolTip.init()


fetchAnimais('../../animaisapi.json', '.numeros-grid');
scrollEfeito();
initFuncionamento();

initFetchBitcoin();


