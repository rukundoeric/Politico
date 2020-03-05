const nav = document.querySelector('#menu-nav');
const CloseMenu = document.querySelector('#close-menu-btn');
const OpenMenu = document.querySelector('#show-menu-btn');
console.log("Hello there");
const closeMenuNav = () => {  
  if(nav.classList.contains('show')){
    nav.classList.remove('show');
  }
  nav.classList.add('hide');
}

const showMenuNav = () => {
  if(nav.classList.contains('hide')){
    nav.classList.remove('hide');
  }
  nav.classList.add('show');
}

CloseMenu.addEventListener('click', () => {
   closeMenuNav();
});
OpenMenu.addEventListener('click', () => {
  console.log("yED")
   if(nav.classList.contains('hide')){
     showMenuNav()
   } else {
     closeMenuNav()
   }
});