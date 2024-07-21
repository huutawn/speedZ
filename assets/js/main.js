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
window.addEventListener('scroll',()=>{
  if(window.screenY<200){
    menuButton.classList.add('hidden')
  }
  else{
    menuButton.classList.remove('hidden')
  }
})

//header
const header = document.querySelector('.header')
const offSet = 150
window.addEventListener('scroll',()=>{
  if(window.scrollY>offSet){
    header.classList.add('fixed')
  }
  else{
    header.classList.remove('fixed')
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



