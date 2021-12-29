import outsideClick from './outside-click.js';

export default function menuMobile() {

  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['touchstart', 'click'];


  function openMenu(){
    menuList.classList.add('active');
    menuButton.classList.add('active');
    outsideClick(menuList, eventos, ()=> {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    })

  }
  eventos.forEach((uservent) => menuButton.addEventListener(uservent, openMenu))  
}