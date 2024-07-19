const input = document.querySelector('#search'); 
const overlay = document.querySelector('.overlay'); 
input.addEventListener('click', () => {
  overlay.style.display = 'block'; // Hiện overlay
});
overlay.addEventListener('click', () => {
    overlay.style.display='none'// Ẩn overlay
  });

// menu button
const menu = document.querySelector('.navbar_links')
const menuButton =document.querySelector('.menu_icons')

menuButton.addEventListener('click', ()=>{
  menu.classList.toggle("navbar_open")
  menuButton.classList.toggle("open")
})