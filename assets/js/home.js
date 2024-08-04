const input = document.getElementById('search')
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


//header
const header = document.querySelector('.header')
const offSet = 350
if(window.scrollY==0&&window.innerWidth>992)menuButton.style.display='none'
window.addEventListener('scroll',()=>{
  if(window.scrollY>offSet){
    header.classList.add('fixed')
    menuButton.style.display = 'block'
  }
  else{
    header.classList.remove('fixed')
    menuButton.style.display = 'none'
  }
})









// list images slide
const listImages = document.querySelector('.list_images')
const imgs = document.querySelectorAll('.list_images img')
const btnLeft = document.querySelector('.btn_left')
const btnRight = document.querySelector('.btn_right')
let current = 0
const handleChangeSlide = ()=>{
  if(current==3){current=0}
  listImages.style.transform = `translateX(-${100*current}%)`
  current++
}
setInterval(
 handleChangeSlide
,3000)



