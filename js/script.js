import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import TabNav from './modules/tab-navigation.js';
import Modal from './modules/init-modal.js';
import ToolTip from './modules/tool-tip.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetchbitcoin.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropdownMenu from './modules/dropdownmenu';
import menuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';




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

const scrollAnima = new ScrollAnima('[data-scroll="anima-scroll"]');
scrollAnima.init();

const dropdownMenu = new DropdownMenu('[data-dropdown]', ['touchstart', 'click']);
dropdownMenu.init();

menuMobile();

fetchAnimais('../../animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');



initFuncionamento();





