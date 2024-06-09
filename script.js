
let menu=document.querySelector("#menu-icon")
let nav_menu=document.querySelector(".nav-menu")

menu.onclick = () => {
  menu.classList.toggle("fa-x");
  nav_menu.classList.toggle("active")

}

// const header=document.querySelector("header");

// window.addEventListener("scroll",() =>{
//   header.classList.toggle("sticky", this.window.visualViewport > 100);

// })
/* JavaScript to add/remove the .header-visible class */
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const hero = document.querySelector('.hero');
  const heroRect = hero.getBoundingClientRect();

  if (heroRect.bottom <= 0) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});