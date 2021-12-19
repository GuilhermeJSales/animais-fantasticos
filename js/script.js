import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/accordion-list.js';
import tabNavigation from './modules/tab-navigation.js';
import scrollEfeito from './modules/scroll-sides.js';
import initModal from './modules/init-modal.js';
import toolTip from './modules/tool-tip.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimaisFetch from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetchbitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="scroll-suave"] a[href^="#"]');
scrollSuave.init()

const accordion = new Accordion('[data-faq="accordion"] dt');
accordion.init();


scrollEfeito();
tabNavigation();
initModal();
toolTip();
initFuncionamento();
initAnimaisFetch();
initFetchBitcoin();


